
import '../styles/SideBar.css'
import HTTPClient from '../utils/HTTPClient'

const SideBar = props => {
    const { currentView } = props

    const handleLogout = () => {
        if(window.confirm('Are you sure you want to logout?')){
            const client = new HTTPClient()
            client.logout()
                .then(res => {
                    console.log(res.data.message)
                    window.location.href = '/account'
                })
                .catch(err => console.log(err))
        }

    }
    return (
        <div className="flex flex-col w-40 h-screen border-r border-gray-300">
            <div className='p-3 flex gap-3 items-center justify-center text-xl border-b border-gray-300'>
                <i></i>
                <div>HabitFlow</div>
                <i></i>
            </div>
            <ul className='mt-2 flex flex-col gap-2'>
                <li>
                    <a href="/dashboard" className={currentView === 'dashboard' ? 'active disabled' : ''} >
                        <i></i><span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="/habits" className={currentView === 'habits' ? 'active disabled' : ''}>
                        <i></i><span>Habits</span>
                    </a>
                </li>
                <li>
                    <a href="/stats" className={currentView === 'stats' ? 'active disabled' : ''}>
                        <i></i><span>Stats</span>
                    </a>
                </li>
                <li>
                    <a href="/calendar" className={currentView === 'calendar' ? 'active disabled' : ''}>
                        <i></i><span>Calendar</span>
                    </a>
                </li>
                <li>
                    <a href="/profile" className={currentView === 'profile' ? 'active disabled' : ''}>
                        <i></i><span>Profile</span>
                    </a>
                </li>
                <li>
                    <button onClick={handleLogout}>
                        <i></i><span>Logout</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default SideBar