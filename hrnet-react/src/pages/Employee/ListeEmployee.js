import React, { useEffect, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../utils/selectors'
import { useTable } from 'react-table'
import {
  useSortBy,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
} from 'react-table/dist/react-table.development'
import Table from '../../components/Table'

const ListeEmployee = () => {
  let users = useSelector(selectUsers)
  users = users.users

  const data = useMemo(() => users, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'first',
          },
          {
            Header: 'Last Name',
            accessor: 'last',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Start Date',
            accessor: 'startDate',
          },
          {
            Header: 'Department',
            accessor: 'departments',
          },
          {
            Header: 'Date of Birth',
            accessor: 'birth',
          },
        ],
      },
      {
        Header: 'Adress',
        columns: [
          {
            Header: 'Street',
            accessor: 'street',
          },
          {
            Header: 'City',
            accessor: 'city',
          },
          {
            Header: 'State',
            accessor: 'state',
          },
          {
            Header: 'Zip code',
            accessor: 'zipCode',
          },
        ],
      },
    ],
    []
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  //const firstPageRows = rows.slice(0, 20)

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   rows,
  //   prepareRow,
  //   state,
  //   visibleColumns,
  //   preGlobalFilteredRows,
  //   setGlobalFilter,
  // } = useTable(
  //   {
  //     columns,
  //     data,
  //   },
  //   useSortBy,
  //   useGlobalFilter
  // )
  // const firstPageRows = rows.slice(0, 20)
  // return (
  //   <>
  //     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
  //       <thead>
  //         {headerGroups.map((headerGroup) => (
  //           <tr {...headerGroup.getHeaderGroupProps()}>
  //             {headerGroup.headers.map((column) => (
  //               <th
  //                 {...column.getHeaderProps(column.getSortByToggleProps())}
  //                 style={{
  //                   borderBottom: 'solid 3px red',
  //                   background: 'aliceblue',
  //                   color: 'black',
  //                   fontWeight: 'bold',
  //                 }}
  //               >
  //                 {column.render('Header')}
  //                 <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
  //               </th>
  //             ))}
  //           </tr>
  //         ))}
  //       </thead>
  //       <tbody {...getTableBodyProps()}>
  //         {firstPageRows.map((row, i) => {
  //           prepareRow(row)
  //           return (
  //             <tr {...row.getRowProps()}>
  //               {row.cells.map((cell) => {
  //                 return (
  //                   <td
  //                     {...cell.getCellProps()}
  //                     style={{
  //                       padding: '10px',
  //                       border: 'solid 1px gray',
  //                       background: 'papayawhip',
  //                     }}
  //                   >
  //                     {cell.render('Cell')}
  //                   </td>
  //                 )
  //               })}
  //             </tr>
  //           )
  //         })}
  //       </tbody>
  //     </table>
  //     <br />
  //     <div>Showing the first 20 results of {rows.length} rows</div>
  //   </>
  // )

  return (
    <>
      <h1>employe list</h1>
      <Table columns={columns} data={data} />
    </>
  )
}

export default ListeEmployee
