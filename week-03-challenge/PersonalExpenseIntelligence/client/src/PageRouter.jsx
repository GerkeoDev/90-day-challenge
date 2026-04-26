import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'
import { useEffect } from 'react'
import HTTPClient from './utils/HTTPClient'
import { AuthContext } from './context/AuthContext'


const PageRouter = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const client = new HTTPClient()
    
    client.me()
      .then(res => {
        setUser(res.data)
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])
  if (loading) return <div>Loading...</div>
  return(
    <>
      <AuthContext.Provider value={{user}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  )
}
export default PageRouter