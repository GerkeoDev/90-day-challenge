import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'
import LandingPage from './pages/LandingPage'
import { useEffect } from 'react'
import HTTPClient from './utils/HTTPClient'
import { useState } from 'react'
import DashboardPage from './pages/DashboardPage'
import AuthPage from './pages/AuthPage'


const PageRouter = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const client = new HTTPClient()
    client.me()
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <>
      <AuthContext.Provider value={{user}}>
          <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/account' element={<AuthPage />} />
            <Route path='/dashboard' element={<DashboardPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}

export default PageRouter
