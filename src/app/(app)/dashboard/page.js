// import Header from '@/app/(app)/Header'
// import '@/app/global.css'

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
//         </>
//     )
// }

// export default Dashboard
'use client'

import { useEffect, useState } from 'react'
import axios from '@/lib/axios'
import Header from '@/app/(app)/Header'
import '@/app/global.css'
import "@/public/assets-admin/vendor/bootstrap/css/bootstrap.min.css"
import "@/public/assets-admin/vendor/bootstrap-icons/bootstrap-icons.css"
import "@/public/assets-admin/vendor/boxicons/css/boxicons.min.css"
import "@/public/assets-admin/vendor/quill/quill.snow.css"
import "@/public/assets-admin/vendor/quill/quill.bubble.css"
import "@/public/assets-admin/vendor/remixicon/remixicon.css"
import "@/public/assets-admin/vendor/simple-datatables/style.css"
import "@/public/assets-admin/css/style.css"
import $ from 'jquery'
import 'datatables.net-bs5'

// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

const Dashboard = () => {
    const [data, setData] = useState({
        demandes: [],
        demandeCount: 0,
        demandeApprouveCount: 0,
        montantTotal: 0,
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('/api/dashboard-data')
            .then(response => {
                setData(response.data)
                setLoading(false)
                setTimeout(() => {
                    $('#demandesTable').DataTable()
                }, 100)
            })
            .catch(error => {
                setError(error.response ? error.response.data.error : 'Une erreur est survenue')
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div>Chargement...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <Header title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            Vous êtes connecté !
                        </div>
                    </div>
                </div>
            </div>
            <main id="main" className="main">
                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Nombre de demandes <span>| Clients</span></h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-journal-bookmark-fill"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>{data.demandeCount}</h6>
                                                    <span className="text-success small pt-1 fw-bold">12%</span>
                                                    <span className="text-muted small pt-2 ps-1">augmentation</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card revenue-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Montant des demandes <span>| Total</span></h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-currency-dollar"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>${data.montantTotal}</h6>
                                                    <span className="text-success small pt-1 fw-bold">8%</span>
                                                    <span className="text-muted small pt-2 ps-1">augmentation</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-4 col-xl-12">
                                    <div className="card info-card customers-card">
                                        <div className="card-body">
                                            <h5 className="card-title">Demandes approuvées <span>| Total</span></h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-building-check"></i>
                                                </div>
                                                <div className="ps-3">
                                                    <h6>{data.demandeApprouveCount}</h6>
                                                    <span className="text-danger small pt-1 fw-bold">12%</span>
                                                    <span className="text-muted small pt-2 ps-1">diminution</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Bilan <span>| Demandes</span></h5>
                                            <table id="demandesTable" className="table table-borderless datatable">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Client</th>
                                                        <th scope="col">E-mail Client</th>
                                                        <th scope="col">Projet</th>
                                                        {/* <th scope="col">RIB</th> */}
                                                        <th scope="col">Montant</th>
                                                        <th scope="col">Reste</th>
                                                        <th scope="col">Statut</th>
                                                        <th scope="col">Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.demandes.map(demande => (
                                                        <tr key={demande.id}>
                                                            <th scope="row"><a href="#">{demande.id}</a></th>
                                                            <td>{demande.client.nom} {demande.client.prenom}</td>
                                                            <td>{demande.client.email}</td>
                                                            <td className="">{demande.projet}</td>
                                                            {/* <td>{demande.client.rib}</td> */}
                                                            <td>${demande.montant_voulu}</td>
                                                            <td>${demande.montant_restant < 0 ? 0 : demande.montant_restant}</td>
                                                            <td>
                                                                <span className={`badge bg-${demande.statut === 'valide' || demande.statut === 'paid' ? 'success' : (demande.statut === 'pending' ? 'warning' : 'danger')}`}>
                                                                    {demande.statut}
                                                                </span>
                                                            </td>
                                                            <td className="scrolling-text">{demande.description}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Dashboard
