
import { useContext, useEffect, useState } from "react"
import SideBar from "../components/SideBar"
import { AuthContext } from "../context/AuthContext"
import HTTPClient from "../utils/HTTPClient"

const DashboardPage = () => {
    const [habits, setHabits] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        console.log(user)
        const client = new HTTPClient()

        client.getAllHabits()
            .then(res => setHabits(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="flex flex-row">
            <SideBar currentView={'dashboard'}/>
            <div className="content">
                <h3>Hello, {user?.userName}!👋</h3>
                <p>This is your dashboard</p>
                <div>
                    <p>Your habits</p>
                    <ul>
                        {
                            habits.map(habit => (
                                <li key={habit.id}>{habit.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default DashboardPage