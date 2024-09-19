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
//                 {/* {successMessage && (
//                     <div className="alert alert-success">
//                         {successMessage}
//                     </div>
//                 )}
//                 {errorMessage && (
//                     <div className="alert alert-danger">
//                         {errorMessage}
//                     </div>
//                 )} */}
//                 <section className="section" style={{ borderRadius: '20px' }}>
//                     <div className="row">
//                         <div className="col-lg-12">
//                             <div className="card">
//                                 <div className="card-body">
//                                     <h5 className="card-title">Liste des clients</h5>
//                                     <table className="table datatable">
//                                         <thead>
//                                             <tr>
//                                                 <th scope="col">#</th>
//                                                 <th scope="col">Nom</th>
//                                                 <th scope="col">Prénom</th>
//                                                 <th scope="col">Montant restant</th>
//                                                 <th scope="col">Mettre à jour</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {/* {clients.map(client => (
//                                                 <tr key={client.id}>
//                                                     <th scope="row">{client.id}</th>
//                                                     <td>{client.nom}</td>
//                                                     <td>{client.prenom}</td>
//                                                     <td>{client.montant_restant}</td>
//                                                     <td>
//                                                         <form onSubmit={(event) => handleUpdate(event, client.demande_id)}>
//                                                             <div className="input-group">
//                                                                 <input
//                                                                     type="number"
//                                                                     className="form-control"
//                                                                     name="montant_take"
//                                                                     placeholder="Entrez le montant recu"
//                                                                     required
//                                                                 />
//                                                                 <button type="submit" className="btn btn-primary">Mettre à jour</button>
//                                                             </div>
//                                                         </form>
//                                                     </td>
//                                                 </tr>
//                                             ))} */}
//                                         </tbody>
//                                     </table>
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

// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

const Dashboard = () => {
    const [clients, setClients] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    useEffect(() => {
        // Récupérer la liste des clients
        axios.get('/api/clientsdettes')
            .then(response => {
                setClients(response.data)
            })
            .catch(error => {
                setErrorMessage(error.response ? error.response.data.error : 'Une erreur est survenue lors du chargement des clients')
            })
    }, [])

    const handleUpdate = (event, demandeId) => {
        event.preventDefault()

        const montantTake = event.target.montant_take.value

        axios.post(`/api/clients/${demandeId}/update`, { montant_take: montantTake })
            .then(response => {
                setSuccessMessage(response.data.success)
                setErrorMessage('')

                // Mettre à jour la liste des clients
                axios.get('/api/clientsdettes')
                    .then(response => {
                        setClients(response.data)
                    })
                    .catch(error => {
                        setErrorMessage(error.response ? error.response.data.error : 'Erreur lors de la mise à jour de la liste des clients')
                    })
            })
            .catch(error => {
                setSuccessMessage('')
                setErrorMessage(error.response ? error.response.data.error : 'Une erreur est survenue lors de la mise à jour du montant')
            })
    }

    // Configuration des colonnes pour React Table
    const columns = useMemo(
        () => [
            {
                Header: '#',
                accessor: 'id', // Clé pour accéder à la donnée
            },
            {
                Header: 'Nom',
                accessor: 'name',
            },
            {
                Header: 'Prénom',
                accessor: 'prenom',
            },
            {
                Header: 'Montant restant',
                accessor: 'montant_restant',
            },
            {
                Header: 'Mettre à jour',
                accessor: 'actions',
                Cell: ({ row }) => (
                    <form onSubmit={(event) => handleUpdate(event, row.original.demande_id)}>
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                name="montant_take"
                                placeholder="Entrez le montant reçu"
                                required
                            />
                            <button type="submit" className="btn btn-primary">Mettre à jour</button>
                        </div>
                    </form>
                ),
            },
        ],
        []
    )

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: clients })

    return (
        <>
            <Header title="Dashboard" />
            <main id="main" className="main">
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
                <section className="section" style={{ borderRadius: '20px' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card overflow-auto">
                                <div className="card-body">
                                    <h5 className="card-title">Liste des clients</h5>
                                    <table {...getTableProps()} className="table">
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
                </section>
            </main>
        </>
    )
}

export default Dashboard

