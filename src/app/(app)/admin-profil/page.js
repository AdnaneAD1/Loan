// import Header from '@/app/(app)/Header'
// import '@/app/global.css'
// import "@/public/assets-admin/vendor/bootstrap/css/bootstrap.min.css"
// import "@/public/assets-admin/vendor/bootstrap-icons/bootstrap-icons.css"
// import "@/public/assets-admin/vendor/boxicons/css/boxicons.min.css"
// import "@/public/assets-admin/vendor/quill/quill.snow.css"
// import "@/public/assets-admin/vendor/quill/quill.bubble.css"
// import "@/public/assets-admin/vendor/remixicon/remixicon.css"
// import "@/public/assets-admin/vendor/simple-datatables/style.css"
// import "@/public/assets-admin/css/style.css"

// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

// const Dashboard = () => {
//     return (
//         <>
//             <Header title="Dashboard" />
//             <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 bg-white border-b border-gray-200">
//                             You are logged in!
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <main id="main" className="main">
//                 <div className="pagetitle">
//                     <h1>Profile</h1>
//                     <nav>
//                         <ol className="breadcrumb">
//                             <li className="breadcrumb-item"><a href="/">Home</a></li>
//                             <li className="breadcrumb-item">Admin</li>
//                             <li className="breadcrumb-item active">Profile</li>
//                         </ol>
//                     </nav>
//                 </div>

//                 <section className="section profile">
//                     <div className="row">
//                         <div className="col-xl-4">
//                             <div className="card">
//                                 <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
//                                     <i className="bi bi-person-circle" style={{ fontSize: '6rem' }}></i>
//                                     {/* <h2>{user ? user.prenom : ''}</h2> */}
//                                     <h3>Admin</h3>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="col-xl-8">
//                             <div className="card">
//                                 <div className="card-body pt-3">
//                                     <ul className="nav nav-tabs nav-tabs-bordered">
//                                         <li className="nav-item">
//                                             <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-edit">Editer le profile</button>
//                                         </li>
//                                         <li className="nav-item">
//                                             <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Changer le mot de passe</button>
//                                         </li>
//                                     </ul>
//                                     <div className="tab-content pt-2">
//                                         <div className="tab-pane fade profile-edit show active pt-3" id="profile-edit">
//                                             <form>
//                                                 {/* {successMessage && (
//                                                     <div className="alert alert-success">
//                                                         {successMessage}
//                                                     </div>
//                                                 )}
//                                                 {errorMessage && (
//                                                     <div className="alert alert-danger">
//                                                         {errorMessage}
//                                                     </div>
//                                                 )} */}
//                                                 <div className="row mb-3">
//                                                     <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Nom et prenom</label>
//                                                     <div className="col-md-8 col-lg-9">
//                                                         <input name="nom" type="text" className="form-control" id="fullName" placeholder="Entrez votre nom" />
//                                                         <br />
//                                                         <input name="prenom" type="text" className="form-control" id="fullName" placeholder="Entrez votre prenom" />
//                                                     </div>
//                                                 </div>
//                                                 <div className="row mb-3">
//                                                     <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
//                                                     <div className="col-md-8 col-lg-9">
//                                                         <input name="email" type="email" className="form-control" id="Email" />
//                                                     </div>
//                                                 </div>
//                                                 <div className="text-center">
//                                                     <button type="submit" className="btn btn-primary">Save Changes</button>
//                                                 </div>
//                                             </form>
//                                         </div>

//                                         <div className="tab-pane fade pt-3" id="profile-settings">
//                                             <form>
//                                                 <div className="row mb-3">
//                                                     <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
//                                                     <div className="col-md-8 col-lg-9">
//                                                         <div className="form-check">
//                                                             <input className="form-check-input" type="checkbox" id="changesMade" checked />
//                                                             <label className="form-check-label" htmlFor="changesMade">
//                                                                 Changes made to your account
//                                                             </label>
//                                                         </div>
//                                                         <div className="form-check">
//                                                             <input className="form-check-input" type="checkbox" id="newProducts" checked />
//                                                             <label className="form-check-label" htmlFor="newProducts">
//                                                                 Information on new products and services
//                                                             </label>
//                                                         </div>
//                                                         <div className="form-check">
//                                                             <input className="form-check-input" type="checkbox" id="proOffers" />
//                                                             <label className="form-check-label" htmlFor="proOffers">
//                                                                 Marketing and promo offers
//                                                             </label>
//                                                         </div>
//                                                         <div className="form-check">
//                                                             <input className="form-check-input" type="checkbox" id="securityNotify" checked disabled />
//                                                             <label className="form-check-label" htmlFor="securityNotify">
//                                                                 Security alerts
//                                                             </label>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="text-center">
//                                                     <button type="submit" className="btn btn-primary">Enregister</button>
//                                                 </div>
//                                             </form>
//                                         </div>

//                                         <div className="tab-pane fade pt-3" id="profile-change-password">
//                                             <form className="form-line">
//                                                 {/* {successMessage && (
//                                                     <div className="alert alert-success">
//                                                         {successMessage}
//                                                     </div>
//                                                 )}
//                                                 {errorMessage && (
//                                                     <div className="alert alert-danger">
//                                                         {errorMessage}
//                                                     </div>
//                                                 )} */}
//                                                 <div className="row mb-3">
//                                                     <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Ancien mot de passe</label>
//                                                     <div className="col-md-8 col-lg-9">
//                                                         <input name="password_ancienne" type="password" className="form-control" required />
//                                                     </div>
//                                                 </div>
//                                                 <div className="row mb-3">
//                                                     <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">Nouveau mot de passe</label>
//                                                     <div className="col-md-8 col-lg-9">
//                                                         <input name="password_new" type="password" className="form-control" required />
//                                                     </div>
//                                                 </div>
//                                                 <div className="text-center">
//                                                     <button type="submit" className="btn btn-primary">Change Password</button>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// }

// export default Dashboard
'use client'
import { useEffect, useState } from 'react';
import axios from '@/lib/axios';
import Header from '@/app/(app)/Header';
import '@/app/global.css';
import "@/public/assets-admin/vendor/bootstrap/css/bootstrap.min.css";
import "@/public/assets-admin/vendor/bootstrap-icons/bootstrap-icons.css";
import "@/public/assets-admin/vendor/boxicons/css/boxicons.min.css";
import "@/public/assets-admin/vendor/quill/quill.snow.css";
import "@/public/assets-admin/vendor/quill/quill.bubble.css";
import "@/public/assets-admin/vendor/remixicon/remixicon.css";
import "@/public/assets-admin/vendor/simple-datatables/style.css";
import "@/public/assets-admin/css/style.css";

// export const metadata = {
//     title: 'Laravel - Dashboard',
// };

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('/api/profile');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setErrorMessage('Failed to fetch user profile.');
            }
        };

        fetchUser();
    }, []);

    const handleUpdateProfile = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            name: formData.get('nom') + ' ' + formData.get('prenom'),
            email: formData.get('email'),
            password: formData.get('password_new'),
            password_confirmation: formData.get('password_confirm')
        };

        try {
            await axios.post('/api/update', data);
            setSuccessMessage('Profile updated successfully.');
        } catch (error) {
            console.error('Error updating profile:', error);
            setErrorMessage('Failed to update profile.');
        }
    };

    return (
        <>
            <Header title="Dashboard" />
            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            You are logged in!
                        </div>
                    </div>
                </div>
            </div> */}
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Profile</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item">Admin</li>
                            <li className="breadcrumb-item active">Profile</li>
                        </ol>
                    </nav>
                </div>

                <section className="section profile">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <i className="bi bi-person-circle" style={{ fontSize: '6rem' }}></i>
                                    <h3>{user ? user.name : 'Admin'}</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-8">
                            <div className="card">
                                <div className="card-body pt-3">
                                    <ul className="nav nav-tabs nav-tabs-bordered">
                                        <li className="nav-item">
                                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-edit">Editer le profile</button>
                                        </li>
                                        <li className="nav-item">
                                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Changer le mot de passe</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content pt-2">
                                        <div className="tab-pane fade profile-edit show active pt-3" id="profile-edit">
                                            <form onSubmit={handleUpdateProfile}>
                                                {successMessage && (
                                                    <div className="alert alert-success">
                                                        {successMessage}
                                                    </div>
                                                )}
                                                {errorMessage && (
                                                    <div className="alert alert-danger">
                                                        {errorMessage}
                                                    </div>
                                                )}
                                                <div className="row mb-3">
                                                    <label htmlFor="fullName" className="col-md-4 col-lg-3 col-form-label">Nom et prénom</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="nom" type="text" className="form-control" id="fullName" placeholder="Entrez votre nom" />
                                                        <br />
                                                        <input name="prenom" type="text" className="form-control" id="fullName" placeholder="Entrez votre prénom" />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="Email" className="col-md-4 col-lg-3 col-form-label">Email</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="email" type="email" className="form-control" id="Email" />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Save Changes</button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="tab-pane fade pt-3" id="profile-settings">
                                            <form>
                                                <div className="row mb-3">
                                                    <label htmlFor="notifications" className="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="changesMade" checked />
                                                            <label className="form-check-label" htmlFor="changesMade">
                                                                Changes made to your account
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="newProducts" checked />
                                                            <label className="form-check-label" htmlFor="newProducts">
                                                                Information on new products and services
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="proOffers" />
                                                            <label className="form-check-label" htmlFor="proOffers">
                                                                Marketing and promo offers
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="securityNotify" checked disabled />
                                                            <label className="form-check-label" htmlFor="securityNotify">
                                                                Security alerts
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Enregistrer</button>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="tab-pane fade pt-3" id="profile-change-password">
                                            <form className="form-line">
                                                {successMessage && (
                                                    <div className="alert alert-success">
                                                        {successMessage}
                                                    </div>
                                                )}
                                                {errorMessage && (
                                                    <div className="alert alert-danger">
                                                        {errorMessage}
                                                    </div>
                                                )}
                                                <div className="row mb-3">
                                                    <label htmlFor="currentPassword" className="col-md-4 col-lg-3 col-form-label">Ancien mot de passe</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="password_ancienne" type="password" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="newPassword" className="col-md-4 col-lg-3 col-form-label">Nouveau mot de passe</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="password_new" type="password" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="passwordConfirm" className="col-md-4 col-lg-3 col-form-label">Confirmer le nouveau mot de passe</label>
                                                    <div className="col-md-8 col-lg-9">
                                                        <input name="password_confirm" type="password" className="form-control" required />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button type="submit" className="btn btn-primary">Change Password</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </>
    );
};

export default Dashboard;
