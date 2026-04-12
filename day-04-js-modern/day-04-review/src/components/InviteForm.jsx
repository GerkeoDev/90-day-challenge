import { useState } from 'react';
import '../styles/InviteForm.css'
const InviteForm = ({onSubmitForm}) => {
    const defaultInputForm = {
        name: "",
        email: "",
        code: "",
        howHearAboutUs: ""
    }
    const [inputForm, setInputForm] = useState(defaultInputForm)
    const handleChange = (e) => {
        
        setInputForm({
            ...inputForm,
            [e.target.name]: e.target.value
        })
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        onSubmitForm(inputForm)
    }
    return (
        <div>
            <form onSubmit={handleSumbit} className="formClass">
                <div className='divs2 marginBDiv'>
                    <label>Name: </label>
                    <input type="text" name="name" value={inputForm.name} onChange={handleChange}/>
                </div>
                <div className='divs2 marginBDiv'>
                    <label htmlFor="">Email: </label>
                    <input type="email" name="email" value={inputForm.email} onChange={handleChange}/>
                </div>
                <div className='divs2 marginBDiv'>
                    <label htmlFor="">Invitation Code:</label>
                    <input type="text" name="code" value={inputForm.code} onChange={handleChange}/>
                </div>
                <div className='divs2 marginBDiv'>
                    <label htmlFor="">How did you hear about us? </label>
                    <input type="text" name="howHearAboutUs" value={inputForm.howHearAboutUs} onChange={handleChange}/>
                </div>
                <div className='divs'>
                    <button type="submit">Request your Invitation</button>
                </div>
            </form>
        </div>
    );
}
export default InviteForm;

// Nombre completo
// Email
// ¿Cómo te enteraste? (select)
// Botón: “Solicitar invitación”