
import { useContext, useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import { AuthContext } from "../context/AuthContext"
import HTTPClient from "../utils/HTTPClient"
import HabitForm from "../components/HabitForm"

const DashboardPage = () => {
    const [showForm, setShowForm] = useState(false)
    const [habits, setHabits] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        console.log(user)
        console.log(showForm)
        const client = new HTTPClient()

        client.getAllHabits()
            .then(res => setHabits(res.data))
            .catch(err => console.log(err))
    }, [])

    const createNewHabit = (data) => {
        const client = new HTTPClient()
        client.createHabit(data)
            .then(res => console.log(res))
            .then(() => setShowForm(false))
            .catch(err => console.log(err))
    }

    const buttonStyle = "text-white w-full rounded-lg p-2 bg-gray-800 hover:bg-gray-900 active:bg-gray-700 cursor-pointer transition duration-300"
    return (
        <div className="flex flex-row">
            {
                showForm && <HabitForm 
                    onClose={()=> setShowForm(false)}
                    onSubmitProp={createNewHabit}
                />
            }
            <SideBar currentView={'dashboard'}/>
            <div className="content">
                <div className="flex justify-between p-2">
                    <div>
                        <h2>Hello, {user?.userName}!👋</h2>
                        <p className="text-sm">This is your dashboard</p>
                    </div>
                    <div>
                        <button className={buttonStyle} onClick={() => setShowForm(!showForm)}><span className="text-green-300">+</span> New Habit</button>
                    </div>
                </div>
                <div className="w-96 h-screen p-2 border border-gray-100 shadow">
                    <div>
                        <p className="text-xl">Your habits</p>
                    </div>
                    <hr className="text-gray-100"/>
                    <ul className="mt-2 flex flex-col gap-2">
                        {habits.length === 0 && <li>Nothing here</li>}
                        {
                            habits?.map(habit => (
                                <li key={habit._id}
                                    className="p-2 rounded-md hover:bg-gray-100 cursor-pointer transition duration-300"
                                >
                                    {habit.title}
                                    <button 
                                        className="float-right text-red-500 border border-red-500 p-1 rounded-md hover:bg-red-500 hover:text-white"
                                        onClick={() => console.log("Habit deleted: ",habit._id)}
                                    >Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default DashboardPage