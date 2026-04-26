import HeaderComponent from "../components/HeaderComponent"


const Home = () => {
    
    return(
        <>
            <div>
                <HeaderComponent view="Home"/>   
                <div className="bg-gray-400 h-screen flex justify-center">
                    <div className="bg-gray-600 w-96 p-5">
                        <h1>Home Page</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home