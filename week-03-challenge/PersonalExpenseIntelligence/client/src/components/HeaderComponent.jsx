// import { useState } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import logo from '../assets/logo.svg'

const HeaderComponent = (props) => {
    const {view} = props
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    return (
        <>
            <div className="flex justify-between items-center bg-gray-700 text-orange-400 font-bold px-5 py-2.5 h-16">
                <a className="flex items-center" href="/">
                    <img src={logo} className="w-6 h-6 mr-2" />
                    <h1 className='text-xl'>Personal Expense Intelligence</h1>
                </a>
                {
                    view !== 'Account' &&
                    <button 
                        className="text-gray-700 bg-orange-400 weight-bold px-2 py-2 rounded-lg hover:bg-orange-500 transition shadow-sm" 
                        onClick={()=> navigate('/account')}
                    >{!user? 'Login' : 'Account'}</button>

                }
            </div>
        </>
    )
}

export default HeaderComponent