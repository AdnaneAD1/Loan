'use client'

import { useEffect, useState, useMemo } from 'react'
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
import { useTable } from 'react-table'

const Dashboard = () => {
    const [data, setData] = useState({
        demandes: [],
        demandeCount: 0,
        demandeApprouveCount: 0,
        montantTotal: 0,
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Chargement des données depuis l'API
    useEffect(() => {
        axios.get('/api/dashboard-data')
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
            .catch(error => {
                setError(error.response ? error.response.data.error : 'Une erreur est survenue')
                setLoading(false)
            })
    }, [])

    // Configuration des colonnes pour React Table
    const columns = useMemo(
        () => [
            {
                Header: '#',
                accessor: 'id', // Clé pour accéder à la donnée
            },
            {
                Header: 'Client',
                accessor: row => `${row.client.nom} ${row.client.prenom}`, // Combiner nom et prénom
            },
            {
                Header: 'E-mail Client',
                accessor: 'client.email',
            },
            {
                Header: 'Projet',
                accessor: 'projet',
            },
            {
                Header: 'Montant',
                accessor: 'montant_voulu',
                Cell: ({ value }) => `$${value}`, // Formatage du montant
            },
            {
                Header: 'Reste',
                accessor: 'montant_restant',
                Cell: ({ value }) => `$${value < 0 ? 0 : value}`, // Gestion du reste
            },
            {
                Header: 'Statut',
                accessor: 'statut',
                Cell: ({ value }) => (
                    <span className={`badge bg-${value === 'valide' || value === 'paid' ? 'success' : (value === 'pending' ? 'warning' : 'danger')}`}>
                        {value}
                    </span>
                ),
            },
            {
                Header: 'Description',
                accessor: 'description',
                Cell: ({ value }) => <div className="scrolling-text">{value}</div>, // Texte défilant pour description
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data: data.demandes })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    // Gestion des états de chargement et d'erreur
    if (loading) {
        return <div>Chargement...</div>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            <Header title="Dashboard" />
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
                                {/* Statistiques principales */}
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

                                {/* Tableau des demandes */}
                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">
                                        <div className="card-body">
                                            <h5 className="card-title">Bilan <span>| Demandes</span></h5>
                                            <table {...getTableProps()} className="table table-borderless">
                                                <thead>
                                                    {headerGroups.map(headerGroup => (
                                                        <tr {...headerGroup.getHeaderGroupProps()}>
                                                            {headerGroup.headers.map(column => (
                                                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </thead>
                                                <tbody {...getTableBodyProps()}>
                                                    {rows.map(row => {
                                                        prepareRow(row)
                                                        return (
                                                            <tr {...row.getRowProps()}>
                                                                {row.cells.map(cell => (
                                                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                                                ))}
                                                            </tr>
                                                        )
                                                    })}
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
