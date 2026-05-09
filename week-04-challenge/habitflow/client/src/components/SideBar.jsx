import { Link, useNavigate } from 'react-router-dom'
import '../styles/SideBar.css'
import HTTPClient from '../utils/HTTPClient'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import logo from '../assets/fire-icon.svg'


const SideBar = props => {
    const { currentView } = props
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        if(window.confirm('Are you sure you want to logout?')){
            const client = new HTTPClient()
            client.logout()
                .then(res => {
                    console.log(res.data.message)
                    setUser(null)
                    navigate('/account')
                })
                .catch(err => console.log(err))
        }

    }
    return (
        <div className="flex flex-col w-60 h-screen border-r border-gray-300 sticky top-0">
            <div className='py-6 flex gap-2 items-center justify-center text-xl'>
                <i className='h-6 w-6 flex justify-center'><img src={logo} alt="Logo"/></i>
                <div className='font-bold'>HabitFlow</div>
                <i></i>
            </div>
            <div className='p-2 pt-0 flex flex-col justify-between h-full'>
                <ul className='my-2 flex flex-col gap-2'>
                    <li>
                        <Link to="/dashboard" className={currentView === 'dashboard' ? 'active disabled buttonSideBar' : 'buttonSideBar'} >
                            <i></i><span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/habits" className={currentView === 'habits' ? 'active disabled buttonSideBar' : 'buttonSideBar'}>
                            <i></i><span>Habits</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/stats" className={currentView === 'stats' ? 'active disabled buttonSideBar' : 'buttonSideBar'}>
                            <i></i><span>Stats</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/calendar" className={currentView === 'calendar' ? 'active disabled buttonSideBar' : 'buttonSideBar'}>
                            <i></i><span>Calendar</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/account" className={currentView === 'account' ? 'active disabled buttonSideBar' : 'buttonSideBar'}>
                            <i></i><span>My account</span>
                        </Link>
                    </li>
                    
                </ul>
                <div>
                    <button 
                        className="buttonSideBar border border-gray-300" 
                        onClick={handleLogout}
                    >
                        <i></i><span>Logout</span>
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default SideBar