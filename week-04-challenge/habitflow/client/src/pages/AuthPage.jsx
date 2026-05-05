import { useContext } from "react"
import HeaderCmp from "../components/HeaderCmp"
import { AuthContext } from "../context/AuthContext"
import { useState } from "react"
import LoginFormCmp from "../components/LoginFormCmp"
import RegisterFormCmp from "../components/RegisterFormCmp"
import HTTPClient from "../utils/HTTPClient"

const AuthPage = () => {
    const [currentView, setCurrentView] = useState('Sign In')
    const { user } = useContext(AuthContext)

    const handleLogout = () => {
        const client = new HTTPClient()
        client.logout()
            .then(res => {
                console.log(res.data.message)
                window.location.href = '/account'
            })
            .catch(err => console.log(err))
    }
    return user ? (
        <div>
            <HeaderCmp />
            <div className="w-96 mx-auto flex flex-col gap-5">
                <h2 className="">My Account</h2>
                <button 
                    className="text-red-300 w-full rounded-md p-2 border border-red-300 bg-gray-800 hover:bg-gray-900 transition duration-300"
                    onClick={handleLogout}
                >Logout</button>
            </div>
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