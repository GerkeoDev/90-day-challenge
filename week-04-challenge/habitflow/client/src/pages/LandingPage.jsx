import HeaderCmp from "../components/HeaderCmp"

const LandingPage = () => {
    return (
        <div>
            <HeaderCmp />
            <h1>Welcome to HabitFlow</h1>
            <p>Manage your habits and track your progress</p>
            <a href="/account" className="decoration-underline">Login</a>
        </div>
    )
}

export default LandingPage