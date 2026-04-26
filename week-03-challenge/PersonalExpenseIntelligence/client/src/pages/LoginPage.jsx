import { useContext, useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import RegisterFormComp from "../components/RegisterFormComp"
import LoginFormComp from "../components/LoginFormComp"
import { AuthContext } from "../context/AuthContext"
import HTTPClient from "../utils/HTTPClient"

const LoginPage = () => {
    const [currentView, setCurrentView] = useState('Sign In')
    const changeCurrentView = (view) => setCurrentView(view)

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

    useEffect(() => {
        console.log("User: ", user)
    }, [])

    return user ? <>
            <div>
                <HeaderComponent view="Account"/>
                <div className="bg-gray-600 h-screen flex justify-center">
                    <div className="shadow-lg border border-gray-700 w-96 p-5">
                        <p className="text-2xl text-orange-400 mb-5">You are already logged in</p>
                        <button 
                            className="bg-red-900 text-orange-400 weight-bold px-2 py-2 rounded-lg hover:bg-red-700 transition shadow-sm"
                            onClick={handleLogout}
                        >Logout</button>
                    </div>
                </div>
            </div>
        </>
    :(
        <>
            <div>
                <HeaderComponent view="Account"/>
                <div className="bg-gray-600 h-screen flex justify-center">
                    <div className="shadow-lg border border-gray-700 w-96 p-5">
                        {
                            currentView === 'Sign In' ?
                            <LoginFormComp changeCurrentView={changeCurrentView}/> :
                            <RegisterFormComp changeCurrentView={changeCurrentView}/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage