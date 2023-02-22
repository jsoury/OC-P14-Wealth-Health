import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Error from '@/components/Error'
import CreateEmployee from './Employee/CreateEmployee'
import ListeEmployee from './Employee/ListeEmployee'

const PublicRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route path="/employee/create" element={<CreateEmployee />} />
      <Route path="/employee/list" element={<ListeEmployee />} />
    </Routes>
  )
}

export default PublicRouter
