import React from 'react'
import Card from '../../components/Cards'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

import styles from './home.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Card title={'create employee'} icon={faUserPlus} direction={'row'} link={'/employee/create'}>
        Add an employee to the WealthHealth database
      </Card>
      <Card
        title={'View current employees'}
        icon={faUsers}
        direction={'row'}
        link={'employee/list'}
      >
        Employee dashboard: visualize basic data of all WealthHealth employees.
      </Card>
    </div>
  )
}

export default Home
