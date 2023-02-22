import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Router from '@/pages/Router'
import { Provider } from 'react-redux'
import store from './utils/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/*" element={<Router />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
