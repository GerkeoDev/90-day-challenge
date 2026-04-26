import { useState } from "react"
import HTTPClient from "../utils/HTTPClient"

const RegisterFormComp = (props) => {
    const {changeCurrentView} = props

    const [ dataForm, setDataForm ] = useState({})

    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!dataForm.email || !dataForm.userName || !dataForm.password) return
        console.log(dataForm)
        let client = new HTTPClient()

        client.register(dataForm)
            .then(() => client.login(dataForm.email, dataForm.password))
            .then(() => client.me())
            .then(res => console.log(res))
            .then(() => window.location.href = '/')
            .catch(err => console.log(err))

        setDataForm({})
    }

    const inputStyle = "w-full px-4 mb-2 py-2 bg-gray-200 text-gray-900 text-sm rounded-lg border border-transparent focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
    return (
        <div>
            <div className="flex justify-between mb-5">
                    <h1 className="text-2xl text-orange-400 ">Register</h1>
                    <button 
                        onClick={()=>changeCurrentView('Sign In')}
                        className="bg-gray-700 text-orange-400 weight-bold px-2 py-2 rounded-lg hover:bg-gray-800 transition shadow-sm"
                    >Sign In</button>
                </div>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                    <div>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Email" 
                            className={inputStyle}
                            value={dataForm.email || ""}
                            onChange={handleChange}
                        />
                        <input 
                            type="text" 
                            name="userName"
                            placeholder="Name" 
                            className={inputStyle}
                            value={dataForm.userName || ""}
                            onChange={handleChange}
                        />
                        <input 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            className={inputStyle}
                            value={dataForm.password || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="bg-gray-800 text-orange-400 weight-bold px-2 py-2 rounded-lg hover:bg-gray-900 transition shadow-sm">Register</button>
                </form>
        </div>
    )
}

export default RegisterFormComp