import { useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { AuthContext } from "../context/AuthContext"

const Home = () => {
    const { user } = useContext(AuthContext)
    useEffect(() => {
        console.log("User: ", user)
    }, [])
    return(
        <>
            <div>
                <HeaderComponent view="Home"/>   
                <div className="bg-gray-600 h-screen flex justify-center">
                    <div className="w-full p-5 flex justify-center">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home