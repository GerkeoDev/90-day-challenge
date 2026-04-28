import { useContext, useEffect } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { AuthContext } from "../context/AuthContext"
import ExpenseFormComp from "../components/ExpenseFormComp"
import HTTPClient from "../utils/HTTPClient"
import AnalysisComp from "../components/AnalysisComp"

const Home = () => {
    const { user } = useContext(AuthContext)

    const createExpenseFromForm = (data) => {
        const client = new HTTPClient()
        client.createExpense(data)
            .then(res=> console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log("User: ", user)
    }, [])
    return !user ? (
        <>
            <div>
                <HeaderComponent view="Home"/>   
                <div className="bg-gray-600 h-screen flex justify-center">
                    <div className="w-full p-5 flex justify-center">
                        <p className="text-2xl text-orange-400 mb-5">You are not logged in</p>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div>
                <HeaderComponent view="Home"/>   
                <div className="bg-gray-600 h-screen flex justify-center">
                    <div className="w-full p-5 flex flex-col">
                        <ExpenseFormComp onSubmitProp={createExpenseFromForm}/>
                        <AnalysisComp />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home