import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    return user ? children : navigate('/account')
}

const PublicRoute = ({ children }) => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    return user ? navigate('/dashboard') : children
}

export { PrivateRoute, PublicRoute }