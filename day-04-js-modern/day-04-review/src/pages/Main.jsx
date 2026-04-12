
import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import InviteForm from "../components/InviteForm";
// import NumberCounter from "../components/NumberCounter";
const Main = () => {
    const [formData, setFormData] = useState({})
    const handleFormData = (data) => {
        console.log("Datos recibidos en Main:", data)
        setFormData(data)
    }
    return (
        <div>
            <HeaderComponent formData={formData}/>
            <div className="content">
                {/* <NumberCounter/> */}
                <InviteForm onSubmitForm={handleFormData}/>
            </div>
            
        </div>
    )
}
export default Main;