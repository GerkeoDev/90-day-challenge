// import { useState } from "react"
import { useNavigate } from "react-router-dom"

const HeaderComponent = (props) => {
    const {view} = props
    const navigate = useNavigate()
    return (
        <>
            <div className="flex justify-between items-center bg-gray-700 text-orange-400 font-bold px-5 py-2.5 h-16">
                <h1 className='text-xl'>{view}</h1>
                {
                    view !== 'Login' &&
                    <button 
                        className="bg-gray-800 text-orange-400 weight-bold px-5 py-2.5 rounded-full hover:bg-gray-900 transition shadow-sm" 
                        onClick={()=> navigate('login')}
                    >Login</button>
                }
            </div>
        </>
    )
}

export default HeaderComponent