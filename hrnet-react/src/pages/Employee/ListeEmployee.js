import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectUsers } from '../../utils/selectors'
import UTable from '../../components/Table'

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
  return (
    <>
      <h1>employe list</h1>
      <UTable columns={columns} data={data} />
    </>
  )
}

export default ListeEmployee
