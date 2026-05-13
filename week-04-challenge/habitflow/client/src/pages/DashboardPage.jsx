
import { useContext, useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import { AuthContext } from "../context/AuthContext"
import HTTPClient from "../utils/HTTPClient"
import HabitForm from "../components/HabitForm"
import dayjs from "dayjs"
import CreatedConfirmation from "../components/CreatedConfirmation"

const DashboardPage = () => {
    const [showForm, setShowForm] = useState(false)
    const [createdConfirmation, setCreatedConfirmation] = useState(false)
    const initialData = {
        title: '',
        frequency: 'daily'
    }
    const [habit, setHabit] = useState(initialData)
    const [habits, setHabits] = useState([])
    const { user } = useContext(AuthContext)
    const client = new HTTPClient()

    useEffect(() => {
        client.getAllHabits()
            .then(res => setHabits(res.data))
            .catch(err => console.log(err))
    }, [])

    const createOrUpdateHabit = (data) => {
        if (habit._id) {
            client.updateHabit(habit._id, data)
                .then(res => {
                    setHabits(prev => prev.map(habit => habit._id === res.data._id ? res.data : habit))
                    console.log(res)
                })
                .then(() => {
                    setShowForm(false)
                    setHabit(initialData)
                })
                .catch(err => console.log(err))
            return
        }
        client.createHabit(data)
            .then(res => setHabits(prev => [...prev, res.data]))
            .then(() => {
                setShowForm(false)
                setCreatedConfirmation(true)
            })
            .catch(err => console.log(err))
    }

    const deleteHabit = (id) => {
        window.confirm('Are you sure you want to delete this habit?') &&
        client.deleteHabit(id)
            .then(() => setHabits(prev => prev.filter(habit => habit._id !== id)))
            .catch(err => console.log(err))
    }

    const checkHabit = (id) => {
        const localDate = dayjs().format('YYYY-MM-DD')
        client.checkHabit(id, localDate)
            .then(res => {
                setHabits(prev => prev.map(habit => habit._id === res.data._id ? res.data : habit))
            })
            .catch(err => console.log(err))
    }

    const buttonStyle = "text-white w-full rounded-lg py-2 px-4 bg-black hover:bg-gray-900 cursor-pointer transition duration-100"
    const checkedStyle = "w-5 h-5 border border-gray-300 rounded-full bg-green-500"
    const uncheckedStyle = "w-5 h-5 border border-gray-300 rounded-full"
    return (
        <div className="flex flex-row">
            {
                showForm && <HabitForm 
                    initialData={habit}
                    onClose={()=> {
                        setShowForm(false)
                        setHabit(initialData)}}
                    onSubmitProp={createOrUpdateHabit}
                />
            }
            {
                createdConfirmation && <CreatedConfirmation setCreatedConfirmation={setCreatedConfirmation} />
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
                        {habits.length === 0 && <li>Nothing to see here</li>}
                        {
                            habits?.map(habit => (
                                <li key={habit._id}
                                    className="p-4 border-b border-gray-300 hover:bg-gray-300 cursor-pointer transition duration-200 flex justify-between items-center"
                                >   
                                    <div className="flex justify-left gap-1 items-end text-sm w-1/3">
                                        <p>{habit.title}</p>
                                    </div>
                                    <div className="flex flex-col gap-1 items-end text-sm">
                                        <p>{habit.frequency.charAt(0).toUpperCase() + habit.frequency.slice(1)}</p>
                                    </div>
                                    <div className="flex flex-col gap-1 items-end text-sm">
                                        <div>Streak</div>
                                        <div>{habit.stats.currentStreak} days</div>
                                    </div>
                                    <div className="flex justify-right gap-2 items-center text-sm">
                                        <input 
                                            type="checkbox" 
                                            checked={habit.stats.completedToday}
                                            className={habit.stats.completedToday ? checkedStyle : uncheckedStyle}
                                            onChange={() => checkHabit(habit._id)}
                                        />
                                        <button 
                                            className="text-gray-500 px-1.5 pb-0.5 rounded-sm hover:bg-black hover:text-white cursor-pointer transition duration-200"
                                            onClick={() => {
                                                setHabit({...habit, id: habit._id})
                                                setShowForm(true)
                                            }}
                                        >Edit</button>
                                        <button 
                                            className="text-gray-500 px-2.5 pb-0.5 rounded-full hover:bg-black hover:text-white cursor-pointer transition duration-200"
                                            onClick={() => deleteHabit(habit._id)}
                                        >x</button>
                                    </div>
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