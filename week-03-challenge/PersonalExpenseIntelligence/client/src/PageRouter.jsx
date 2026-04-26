import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import { useState } from 'react'
import { useEffect } from 'react'
import HTTPClient from './utils/HTTPClient'


const PageRouter = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const client = new HTTPClient()
    
    client.me()
      .then(res => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
    console.log(user)
  }, [])
  if (loading) return <div>Loading...</div>
  return(
    <>{/*TODO: Add AuthContext here*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default PageRouter