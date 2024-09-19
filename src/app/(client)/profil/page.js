'use client'
import { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaEdit, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import useSWR from 'swr';
import axios from '@/lib/axios';
import { useAuth } from '@/hooks/auth'; // Importer le hook d'authentification
import '@/app/global.css';

const Profile = () => {
    const router = useRouter();
    const { logout } = useAuth(); // Utiliser la fonction de déconnexion

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
    });

    const [isEditing, setIsEditing] = useState({
        name: false,
        email: false,
        phone: false,
        address: false,
    });

    // Fetcher le profil du client via API
    const fetcher = url => axios.get(url).then(res => res.data);
    const { data, mutate } = useSWR('/api/client-profile', fetcher);

    useEffect(() => {
        if (data) {
            setUserData(data.client);
        }
    }, [data]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const toggleEdit = (field) => {
        setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleSubmit = async (field) => {
        try {
            await axios.post('/api/update-client-profile', userData);
            toggleEdit(field);
            mutate(); // Rafraîchir les données du profil après mise à jour
        } catch (error) {
            console.error("Erreur lors de la mise à jour du profil:", error);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black p-4">
            <header className="flex justify-between items-center mb-4">
                <button>
                    <FaArrowLeft className="text-xl" onClick={() => router.back()} />
                </button>
                <h1 className="text-xl font-semibold">Profile</h1>
                <button onClick={() => toggleEdit('name')}>
                    <FaEdit className="text-xl" />
                </button>
            </header>

            <section className="bg-white rounded-3xl p-6 mb-6 shadow-lg">
                <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl text-red-700">
                        <FaUser />
                    </div>
                </div>

                {['name', 'email', 'tel', 'address'].map((field) => (
                    <div key={field} className="mb-4">
                        <h2 className="text-lg font-bold capitalize">{field}</h2>
                        {isEditing[field] ? (
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                name={field}
                                value={userData[field]}
                                onChange={handleInputChange}
                                className="border-b-2 border-red-700 w-full py-1 text-black"
                                onBlur={() => handleSubmit(field)}
                            />
                        ) : (
                            <p className="text-black" onClick={() => toggleEdit(field)}>{userData[field]}</p>
                        )}
                    </div>
                ))}

                <button onClick={logout} className="bg-red-500 text-white p-2 rounded-md">
                    Se Déconnecter
                </button>
            </section>
        </div>
    );
};

export default Profile;
