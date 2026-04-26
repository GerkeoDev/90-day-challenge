import { useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import RegisterFormComp from "../components/RegisterFormComp"
import LoginFormComp from "../components/LoginFormComp"

const LoginPage = () => {
    const [currentView, setCurrentView] = useState('Sign In')
    const changeCurrentView = (view) => setCurrentView(view)
    return (
        <>
            <div>
                <HeaderComponent view="Login"/>
                <div className="bg-gray-400 h-screen flex justify-center">
                    <div className="bg-gray-600 w-96 p-5">
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