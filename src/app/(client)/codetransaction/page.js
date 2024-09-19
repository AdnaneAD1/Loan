'use client'
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import '@/app/global.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '@/hooks/auth';
import Loading from '@/app/(app)/Loading';
import { useRouter } from 'next/navigation';

const CodeEntry = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: 'auth' });

    useEffect(() => {
        if (!user) {
            router.push('/login');
        } else if (user.role !== 'Client') {
            router.push('/login');
        }
    }, [user, router]);

    if (!user) {
        return <Loading />;
    }
    const [codes, setCodes] = useState(['', '', '', '']);
    const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [alert, setAlert] = useState('');
    const [isCodeLocked, setIsCodeLocked] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);

    const handleCodeChange = (value) => {
        const newCodes = [...codes];
        newCodes[currentCodeIndex] = value;
        setCodes(newCodes);
    };

    const incrementProgressGradually = (targetProgress) => {
        setIsCodeLocked(true);
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < targetProgress) {
                    return prevProgress + (25 / 60);
                } else {
                    clearInterval(interval);
                    setIsCodeLocked(false);
                    return targetProgress;
                }
            });
        }, 1000);

        const countdown = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(countdown);
                    return 60;
                }
            });
        }, 1000);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const codeToVerify = codes[currentCodeIndex];

        try {
            const response = await axios.post('/api/verify-codes', { code: codeToVerify, index: currentCodeIndex });
            if (response.data.success) {
                const targetProgress = progress + 25;
                incrementProgressGradually(targetProgress);
                setAlert('Code accepté. Veuillez attendre la validation avant d’entrer le suivant.');

                if (currentCodeIndex < 3) {
                    setCurrentCodeIndex(currentCodeIndex + 1);
                } else {
                    setAlert('Tous les codes ont été validés.');
                }
            } else {
                setAlert(response.data.message);
            }
        } catch (error) {
            setAlert('Erreur lors de la vérification du code. Veuillez contacter l’administrateur.');
        }
    };

    const codeLabels = [
        'Code d\'authentification utilisateur',
        'Code de validation du bénéficiaire',
        'Code de confirmation transactionnelle',
        'Code de vérification finale'
    ];

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <header className="flex justify-between items-center mb-4">
                    <button>
                        <FaArrowLeft className="text-xl" onClick={() => router.back()} />
                    </button>
                </header>
                <h1 className="text-xl font-semibold text-black mb-4">Entrez vos codes</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor={`code-${currentCodeIndex}`} className="text-black">{codeLabels[currentCodeIndex]}</label>
                        <input
                            type="text"
                            className="mt-2 p-2 w-full border rounded text-black"
                            id={`code-${currentCodeIndex}`}
                            value={codes[currentCodeIndex]}
                            onChange={(e) => handleCodeChange(e.target.value)}
                            disabled={isCodeLocked}
                        />
                    </div>
                    <button type="submit" className="w-full py-2 mt-4 text-lg font-semibold text-white bg-red-600 rounded-lg" disabled={isCodeLocked}>
                        Vérifier
                    </button>
                </form>

                {alert && <div className="text-red-600 mt-4">{alert}</div>}

                <div className="w-full bg-gray-200 rounded-full mt-4">
                    <div
                        className="bg-red-600 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
                        style={{ width: `${progress}%` }}
                    >
                        {progress.toFixed(1)}%
                    </div>
                </div>
                {isCodeLocked && <div className="text-black mt-2">Temps restant : {timeLeft}s</div>}
            </div>
        </div>
    );
};

export default CodeEntry;
