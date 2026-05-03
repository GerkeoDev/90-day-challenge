import { useContext } from "react"
import HeaderCmp from "../components/HeaderCmp"
import { AuthContext } from "../context/AuthContext"
import { useState } from "react"
import LoginFormCmp from "../components/LoginFormCmp"
import RegisterFormCmp from "../components/RegisterFormCmp"

const AuthPage = () => {
    const [currentView, setCurrentView] = useState('Sign In')
    const { user } = useContext(AuthContext)

    return user ? (
        <div>
            <HeaderCmp />
            <h1>Account</h1>
        </div>
    ) : (
        <div>
            <HeaderCmp />
            <div className="w-96 mx-auto">
                {
                    currentView === 'Sign In' ? (
                        <LoginFormCmp changeCurrectView={setCurrentView}/>
                    ) : (
                        <RegisterFormCmp />
                    )
                }
            </div>
            
        </div>
    )
}

export default AuthPage