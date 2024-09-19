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
//                                     <h5 className="card-title">Liste des demandes en attentes</h5>
//                                     <table className="table datatable">
//                                         <thead>
//                                             <tr>
//                                                 <th scope="col">#</th>
//                                                 <th scope="col">Nom</th>
//                                                 <th scope="col">Prénom</th>
//                                                 <th scope="col">Actions</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {/* {clients.map(client => (
//                                                 <tr key={client.id}>
//                                                     <th scope="row">{client.id}</th>
//                                                     <td>{client.nom}</td>
//                                                     <td>{client.prenom}</td>
//                                                     <td>
//                                                         <div style={{ display: 'flex', flexDirection: 'row' }}>
//                                                             <form onSubmit={(event) => handleAction(event, 'approuver', client.demande_id)}>
//                                                                 <button type="submit" className="badge bg-success" style={{ marginRight: '1%' }}>Valider</button>
//                                                             </form>
//                                                             <form onSubmit={(event) => handleAction(event, 'reject', client.demande_id)}>
//                                                                 <button type="submit" className="badge bg-danger">Rejeter</button>
//                                                             </form>
//                                                         </div>
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
import { useEffect, useState, useMemo } from 'react'
import axios from '@/lib/axios'
import { useTable } from 'react-table'

// export const metadata = {
//     title: 'Laravel - Dashboard',
// }

const Dashboard = () => {
    const [clients, setClients] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Fetch clients data
        axios.get('/api/clients')
            .then(response => {
                setClients(response.data)
                setLoading(false)
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des clients:', error)
                setError('Erreur lors de la récupération des clients.')
                setLoading(false)
            })
    }, [])

    const handleAction = async (event, action, demande_id) => {
        event.preventDefault()

        try {
            let response
            if (action === 'approuver') {
                response = await axios.post(`/api/demandes/${demande_id}/approuver`)
            } else if (action === 'reject') {
                response = await axios.post(`/api/demandes/${demande_id}/reject`)
            }

            if (response.data.success) {
                alert('Action réussie: ' + response.data.success)
                // Reload clients data after action
                axios.get('/api/clients')
                    .then(response => {
                        setClients(response.data)
                    })
                    .catch(error => {
                        console.error('Erreur lors de la récupération des clients:', error)
                    })
            } else {
                alert('Erreur: ' + response.data.error)
            }
        } catch (error) {
            console.error("Erreur lors de l'exécution de l'action :", error)
            alert('Une erreur est survenue.')
        }
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
                Header: 'Actions',
                accessor: 'actions',
                Cell: ({ row }) => (
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <form onSubmit={(event) => handleAction(event, 'approuver', row.original.demande_id)}>
                            <button type="submit" className="badge bg-success" style={{ marginRight: '1%' }}>Valider</button>
                        </form>
                        <form onSubmit={(event) => handleAction(event, 'reject', row.original.demande_id)}>
                            <button type="submit" className="badge bg-danger">Rejeter</button>
                        </form>
                    </div>
                ),
            },
        ],
        []
    )

    const tableInstance = useTable({ columns, data: clients })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

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
                <section className="section" style={{ borderRadius: '20px' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card overflow-auto">
                                <div className="card-body">
                                    <h5 className="card-title">Liste des demandes en attentes</h5>
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

