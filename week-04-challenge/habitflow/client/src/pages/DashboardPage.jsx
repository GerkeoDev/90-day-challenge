
import { useContext, useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import { AuthContext } from "../context/AuthContext"
import HTTPClient from "../utils/HTTPClient"
import HabitForm from "../components/HabitForm"

const DashboardPage = () => {
    const [showForm, setShowForm] = useState(false)
    const [habits, setHabits] = useState([])
    const { user } = useContext(AuthContext)
    const client = new HTTPClient()
    useEffect(() => {
        console.log(user)
        console.log(showForm)

        client.getAllHabits()
            .then(res => setHabits(res.data))
            .catch(err => console.log(err))
    }, [])

    const createNewHabit = (data) => {
        client.createHabit(data)
            .then(res => setHabits(prev => [...prev, res.data]))
            .then(() => setShowForm(false))
            .catch(err => console.log(err))
    }

    const deleteHabit = (id) => {
        window.confirm('Are you sure you want to delete this habit?') &&
        client.deleteHabit(id)
            .then(() => setHabits(prev => prev.filter(habit => habit._id !== id)))
            .catch(err => console.log(err))
    }

    const checkHabit = (id) => {
        client.checkHabit(id)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const buttonStyle = "text-white w-full rounded-lg py-2 px-4 bg-black hover:bg-gray-900 cursor-pointer transition duration-100"
    return (
        <div className="flex flex-row">
            {
                showForm && <HabitForm 
                    onClose={()=> setShowForm(false)}
                    onSubmitProp={createNewHabit}
                />
            }
            <SideBar currentView={'dashboard'}/>
            <div className="content p-5 w-full">
                <div className="flex justify-between p-2">
                    <div>
                        <h2>Hello, {user?.userName}!👋</h2>
                        <p className="text-sm">Here you can manage your habits</p>
                    </div>
                    <div>
                        <button className={buttonStyle} onClick={() => setShowForm(!showForm)}>+ New Habit</button>
                    </div>
                </div>
                <div className="w-96 p-2 mt-5 w-full">
                    <div>
                        <p>Your habits</p>
                    </div>
                    <ul className="mt-3 flex flex-col border border-gray-300 rounded-md">
                        {habits.length === 0 && <li>Nothing here</li>}
                        {
                            habits?.map(habit => (
                                <li key={habit._id}
                                    className="p-4 border-b border-gray-300 hover:bg-gray-300 cursor-pointer transition duration-200 flex justify-between items-center"
                                >
                                    {habit.title}
                                    {/*Checkbox */}
                                    <input type="checkbox" className="" onChange={() => checkHabit(habit._id)}/>
                                    <button 
                                        className="float-right text-gray-500 px-2.5 pb-0.5 rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200"
                                        onClick={() => deleteHabit(habit._id)}
                                    >x</button>
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