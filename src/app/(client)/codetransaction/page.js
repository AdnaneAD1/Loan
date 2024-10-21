// 'use client'
// import { useState, useEffect } from 'react';
// import axios from '@/lib/axios';
// import '@/app/global.css';
// import { FaArrowLeft } from 'react-icons/fa';
// import { useAuth } from '@/hooks/auth';
// import Loading from '@/app/(app)/Loading';
// import { useRouter } from 'next/navigation';

// const CodeEntry = () => {
//     const router = useRouter();
//     const { user } = useAuth({ middleware: 'auth' });

//     useEffect(() => {
//         if (!user) {
//             router.push('/login');
//         } else if (user.role !== 'Client') {
//             router.push('/login');
//         }
//     }, [user, router]);

//     if (!user) {
//         return <Loading />;
//     }
//     const [codes, setCodes] = useState(['', '', '', '']);
//     const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
//     const [progress, setProgress] = useState(0);
//     const [alert, setAlert] = useState('');
//     const [isCodeLocked, setIsCodeLocked] = useState(false);
//     const [timeLeft, setTimeLeft] = useState(60);

//     const handleCodeChange = (value) => {
//         const newCodes = [...codes];
//         newCodes[currentCodeIndex] = value;
//         setCodes(newCodes);
//     };

//     const incrementProgressGradually = (targetProgress) => {
//         setIsCodeLocked(true);
//         const interval = setInterval(() => {
//             setProgress((prevProgress) => {
//                 if (prevProgress < targetProgress) {
//                     return prevProgress + (25 / 60);
//                 } else {
//                     clearInterval(interval);
//                     setIsCodeLocked(false);
//                     return targetProgress;
//                 }
//             });
//         }, 1000);

//         const countdown = setInterval(() => {
//             setTimeLeft((prevTime) => {
//                 if (prevTime > 0) {
//                     return prevTime - 1;
//                 } else {
//                     clearInterval(countdown);
//                     return 60;
//                 }
//             });
//         }, 1000);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const codeToVerify = codes[currentCodeIndex];

//         try {
//             const response = await axios.post('/api/verify-codes', { code: codeToVerify, index: currentCodeIndex });
//             if (response.data.success) {
//                 const targetProgress = progress + 25;
//                 incrementProgressGradually(targetProgress);
//                 setAlert('Code accepté. Veuillez attendre la validation avant d’entrer le suivant.');

//                 if (currentCodeIndex < 3) {
//                     setCurrentCodeIndex(currentCodeIndex + 1);
//                 } else {
//                     setAlert('Tous les codes ont été validés.');
//                 }
//             } else {
//                 setAlert(response.data.message);
//             }
//         } catch (error) {
//             setAlert('Erreur lors de la vérification du code. Veuillez contacter l’administrateur.');
//         }
//     };

//     const codeLabels = [
//         'Code d\'authentification utilisateur',
//         'Code de validation du bénéficiaire',
//         'Code de confirmation transactionnelle',
//         'Code de vérification finale'
//     ];

//     return (
//         <div className="flex justify-center items-center h-screen bg-white">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//                 <header className="flex justify-between items-center mb-4">
//                     <button>
//                         <FaArrowLeft className="text-xl" onClick={() => router.back()} />
//                     </button>
//                 </header>
//                 <h1 className="text-xl font-semibold text-black mb-4">Entrez vos codes</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <label htmlFor={`code-${currentCodeIndex}`} className="text-black">{codeLabels[currentCodeIndex]}</label>
//                         <input
//                             type="text"
//                             className="mt-2 p-2 w-full border rounded text-black"
//                             id={`code-${currentCodeIndex}`}
//                             value={codes[currentCodeIndex]}
//                             onChange={(e) => handleCodeChange(e.target.value)}
//                             disabled={isCodeLocked}
//                         />
//                     </div>
//                     <button type="submit" className="w-full py-2 mt-4 text-lg font-semibold text-white bg-red-600 rounded-lg" disabled={isCodeLocked}>
//                         Vérifier
//                     </button>
//                 </form>

//                 {alert && <div className="text-red-600 mt-4">{alert}</div>}

//                 <div className="w-full bg-gray-200 rounded-full mt-4">
//                     <div
//                         className="bg-red-600 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
//                         style={{ width: `${progress}%` }}
//                     >
//                         {progress.toFixed(1)}%
//                     </div>
//                 </div>
//                 {isCodeLocked && <div className="text-black mt-2">Temps restant : {timeLeft}s</div>}
//             </div>
//         </div>
//     );
// };

// export default CodeEntry;
// 'use client'
// import { useState, useEffect } from 'react';
// import axios from '@/lib/axios';
// import '@/app/global.css';
// import { FaArrowLeft } from 'react-icons/fa';
// import { useAuth } from '@/hooks/auth';
// import Loading from '@/app/(app)/Loading';
// import { useRouter } from 'next/navigation';

// const CodeEntry = () => {
//     const router = useRouter();
//     const { user } = useAuth({ middleware: 'auth' });

//     useEffect(() => {
//         if (!user) {
//             router.push('/login');
//         } else if (user.role !== 'Client') {
//             router.push('/login');
//         }
//     }, [user, router]);

//     if (!user) {
//         return <Loading />;
//     }
    
//     // Définition des états
//     const [codes, setCodes] = useState(['', '', '', '']);
//     const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
//     const [progress, setProgress] = useState(0);
//     const [alert, setAlert] = useState('');
//     const [isCodeLocked, setIsCodeLocked] = useState(false);
    
//     // Modification du code saisi
//     const handleCodeChange = (value) => {
//         const newCodes = [...codes];
//         newCodes[currentCodeIndex] = value;
//         setCodes(newCodes);
//     };

//     // Progression de la barre graduellement
//     const incrementProgressGradually = (targetProgress) => {
//         setIsCodeLocked(true); // Masquer le formulaire et le message d'alerte
//         const interval = setInterval(() => {
//             setProgress((prevProgress) => {
//                 if (prevProgress < targetProgress) {
//                     return prevProgress + (25 / 60);
//                 } else {
//                     clearInterval(interval);
//                     setIsCodeLocked(false); // Afficher le formulaire et le message d'alerte après la progression
//                     return targetProgress;
//                 }
//             });
//         }, 1000);
//     };

//     // Soumission du formulaire
//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const codeToVerify = codes[currentCodeIndex];

//         try {
//             const response = await axios.post('/api/verify-codes', { code: codeToVerify, index: currentCodeIndex });
//             if (response.data.success) {
//                 const targetProgress = progress + 25;
//                 incrementProgressGradually(targetProgress); // Incrémenter la barre
//                 setAlert('Code accepté. Veuillez entrer le prochain.'); // Modifier le message d'alerte
                
//                 if (currentCodeIndex < 3) {
//                     setCurrentCodeIndex(currentCodeIndex + 1); // Passer au code suivant
//                 } else {
//                     setAlert('Tous les codes ont été validés.'); // Tous les codes sont validés
//                 }
//             } else {
//                 setAlert(response.data.message); // Afficher l'alerte d'erreur
//             }
//         } catch (error) {
//             setAlert('Erreur lors de la vérification du code. Veuillez contacter l’administrateur.'); // Erreur réseau
//         }
//     };

//     const codeLabels = [
//         'Code d\'authentification utilisateur',
//         'Code de validation du bénéficiaire',
//         'Code de confirmation transactionnelle',
//         'Code de vérification finale'
//     ];

//     return (
//         <div className="flex justify-center items-center h-screen bg-white">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//                 <header className="flex justify-between items-center mb-4">
//                     <button>
//                         <FaArrowLeft className="text-xl" onClick={() => router.back()} />
//                     </button>
//                 </header>
//                 <h1 className="text-xl font-semibold text-black mb-4">Entrez vos codes</h1>
//                 {/* Masquer le formulaire si le code est verrouillé */}
//                 {!isCodeLocked && (
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                             <label htmlFor={`code-${currentCodeIndex}`} className="text-black">{codeLabels[currentCodeIndex]}</label>
//                             <input
//                                 type="text"
//                                 className="mt-2 p-2 w-full border rounded text-black"
//                                 id={`code-${currentCodeIndex}`}
//                                 value={codes[currentCodeIndex]}
//                                 onChange={(e) => handleCodeChange(e.target.value)}
//                                 disabled={isCodeLocked} // Désactiver si verrouillé
//                             />
//                         </div>
//                         <button type="submit" className="w-full py-2 mt-4 text-lg font-semibold text-white bg-red-600 rounded-lg" disabled={isCodeLocked}>
//                             Vérifier
//                         </button>
//                     </form>
//                 )}

//                 {/* Affichage du message d'alerte si disponible */}
//                 {alert && !isCodeLocked && <div className="text-red-600 mt-4">{alert}</div>}

//                 {/* Barre de progression */}
//                 <div className="w-full bg-gray-200 rounded-full mt-4">
//                     <div
//                         className="bg-red-600 text-xs font-medium text-white text-center p-1 leading-none rounded-full"
//                         style={{ width: `${progress}%` }}
//                     >
//                         {progress.toFixed(1)}%
//                     </div>
//                 </div>
//                 {/* Message "Veuillez patienter" au lieu du décompte */}
//                 {isCodeLocked && <div className="text-black mt-2">Veuillez patienter...</div>}
//             </div>
//         </div>
//     );
// };

// export default CodeEntry;
'use client'
import { useState, useEffect } from 'react';
import axios from '@/lib/axios';
import '@/app/global.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '@/hooks/auth';
import Loading from '@/app/(app)/Loading';
import { useRouter, useSearchParams } from 'next/navigation';

const CodeEntry = () => {
    const router = useRouter();
    const { user } = useAuth({ middleware: 'auth' });
    const searchParams = useSearchParams();
    const transactionId = searchParams.get('transactionId'); // Récupère l'ID de la transaction depuis les paramètres de recherche
    const initialProgress = parseFloat(searchParams.get('progress')) || 0;

    useEffect(() => {
        // Si l'utilisateur n'est pas authentifié ou n'a pas le rôle "Client", redirige vers la page de connexion
        if (!user) {
            router.push('/login');
        } else if (user.role !== 'Client') {
            router.push('/login');
        }
    }, [user, router]);

    // Si l'utilisateur n'est pas encore chargé, affiche un écran de chargement
    if (!user) {
        return <Loading />;
    }

    // Vérifie la présence de l'ID de la transaction avant d'autoriser la progression
    useEffect(() => {
        if (!transactionId) {
            setAlert('Aucune transaction sélectionnée. Veuillez en choisir une.');
        }
    }, [transactionId]);

    const [codes, setCodes] = useState(['', '', '', '']);
    const [currentCodeIndex, setCurrentCodeIndex] = useState(initialProgress / 25);
    const [progress, setProgress] = useState(initialProgress);
    const [alert, setAlert] = useState('');
    const [isCodeLocked, setIsCodeLocked] = useState(false);

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
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const codeToVerify = codes[currentCodeIndex];

        if (!transactionId) {
            setAlert('Erreur : aucune transaction sélectionnée.');
            return;
        }

        try {
            const response = await axios.post('/api/verify-codes', { code: codeToVerify, index: currentCodeIndex, transactionId });
            if (response.data.success) {
                const targetProgress = progress + 25;

                await axios.post('/api/update-progress', {
                    transactionId: transactionId,
                    progress: targetProgress
                });

                incrementProgressGradually(targetProgress);
                setAlert('Code accepté. Veuillez entrer le prochain.');

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

                {!isCodeLocked && transactionId && (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor={`code-${currentCodeIndex}`} className="text-black">{codeLabels[currentCodeIndex]}</label>
                            <input
                                id={`code-${currentCodeIndex}`}
                                type="text"
                                value={codes[currentCodeIndex]}
                                onChange={(e) => handleCodeChange(e.target.value)}
                                className="form-control text-black"
                                disabled={isCodeLocked}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full" disabled={isCodeLocked}>Soumettre</button>
                    </form>
                )}

                {alert && (
                    <div className="alert alert-info mt-3 text-black">{alert}</div>
                )}

                <div className="progress mt-3">
                    <div className="progress-bar" role="progressbar" style={{ width: `${progress}%`, backgroundColor: '#29B6F6' }}></div>
                </div>
            </div>
        </div>
    );
};

export default CodeEntry;
