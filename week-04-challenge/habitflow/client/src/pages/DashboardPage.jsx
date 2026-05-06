
import SideBar from "../components/SideBar"

const DashboardPage = () => {
    return (
        <div className="flex flex-row">
            <SideBar currentView={'dashboard'}/>
            <div className="content">
                <h1>Dashboard</h1>
            </div>
            
        </div>
    )
}

export default DashboardPage