
import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import InviteForm from "../components/InviteForm";
// import NumberCounter from "../components/NumberCounter";
const Main = () => {
    const [formData, setFormData] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const handleFormData = (data) => {
        setFormData(data)
        setSubmitted(true)
    }
    return (
        <div>
            <HeaderComponent formData={formData} submitted={submitted}/>
            <div className="content">
                {/* <NumberCounter/> */}
                <InviteForm onSubmitForm={handleFormData} submitted={submitted}/>
            </div>
            
        </div>
    )
}
export default Main;