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
import { useRouter } from 'next/navigation'
import axios from '@/lib/axios'
import { useTable } from 'react-table'

const Dashboard = () => {
    const [clientsValides, setClientsValides] = useState([])
    const [clientsInvalides, setClientsInvalides] = useState([])
    const router = useRouter()

    useEffect(() => {
        // Fetch valid clients
        axios.get('/api/clients/valides')
            .then(response => {
                setClientsValides(response.data)
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des clients valides:', error)
            })

        // Fetch invalid clients
        axios.get('/api/clients/invalides')
            .then(response => {
                setClientsInvalides(response.data)
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des clients invalides:', error)
            })
    }, [])

    const handleActivation = async (event, clientId) => {
        event.preventDefault()

        try {
            const response = await axios.post(`/api/clients/${clientId}/activer`)

            if (response.data.message) {
                alert('Client activé avec succès')
                // Re-fetch invalid clients and valid clients
                axios.get('/api/clients/valides')
                    .then(response => {
                        setClientsValides(response.data)
                    })
                    .catch(error => {
                        console.error('Erreur lors de la récupération des clients valides:', error)
                    })

                axios.get('/api/clients/invalides')
                    .then(response => {
                        setClientsInvalides(response.data)
                    })
                    .catch(error => {
                        console.error('Erreur lors de la récupération des clients invalides:', error)
                    })
            } else {
                alert('Erreur: ' + response.data.error)
            }
        } catch (error) {
            console.error("Erreur lors de l'activation du client:", error)
            alert('Une erreur est survenue.')
        }
    }

    const handleClientClick = (clientId) => {
        router.push(`/user-info?clientId=${clientId}`)
    }

    // Configuration des colonnes pour les clients valides
    const columnsValides = useMemo(
        () => [
            {
                Header: '#',
                accessor: 'id',
            },
            {
                Header: 'email',
                accessor: 'email',
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
                Header: 'Numéro',
                accessor: 'tel',
            },
        ],
        []
    )

    // Configuration des colonnes pour les clients invalides
    const columnsInvalides = useMemo(
        () => [
            {
                Header: '#',
                accessor: 'id',
            },
            {
                Header: 'email',
                accessor: 'email',
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
                Header: 'Numéro',
                accessor: 'tel',
            },
            {
                Header: 'Actions',
                accessor: 'actions',
                Cell: ({ row }) => (
                    <button
                        onClick={(event) => handleActivation(event, row.original.id)}
                        className="badge bg-success"
                    >
                        Activer
                    </button>
                ),
            },
        ],
        []
    )

    const { getTableProps: getTablePropsValides, getTableBodyProps: getTableBodyPropsValides, headerGroups: headerGroupsValides, rows: rowsValides, prepareRow: prepareRowValides } = useTable({ columns: columnsValides, data: clientsValides })
    const { getTableProps: getTablePropsInvalides, getTableBodyProps: getTableBodyPropsInvalides, headerGroups: headerGroupsInvalides, rows: rowsInvalides, prepareRow: prepareRowInvalides } = useTable({ columns: columnsInvalides, data: clientsInvalides })

    return (
        <>
            <Header title="Dashboard" />
            <main id="main" className="main">
                <section className="section" style={{ borderRadius: '20px' }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card overflow-auto">
                                <div className="card-body">
                                    <h5 className="card-title">Liste des clients valides</h5>
                                    <table {...getTablePropsValides()} className="table">
                                        <thead>
                                            {headerGroupsValides.map(headerGroup => (
                                                <tr {...headerGroup.getHeaderGroupProps()}>
                                                    {headerGroup.headers.map(column => (
                                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                                    ))}
                                                </tr>
                                            ))}
                                        </thead>
                                        <tbody {...getTableBodyPropsValides()}>
                                            {rowsValides.map(row => {
                                                prepareRowValides(row)
                                                return (
                                                    <tr {...row.getRowProps()} onClick={() => handleClientClick(row.original.id)} style={{ cursor: 'pointer' }}>
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

                        <div className="col-lg-12">
                            <div className="card overflow-auto">
                                <div className="card-body">
                                    <h5 className="card-title">Liste des clients non valides</h5>
                                    <table {...getTablePropsInvalides()} className="table">
                                        <thead>
                                            {headerGroupsInvalides.map(headerGroup => (
                                                <tr {...headerGroup.getHeaderGroupProps()}>
                                                    {headerGroup.headers.map(column => (
                                                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                                                    ))}
                                                </tr>
                                            ))}
                                        </thead>
                                        <tbody {...getTableBodyPropsInvalides()}>
                                            {rowsInvalides.map(row => {
                                                prepareRowInvalides(row)
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

