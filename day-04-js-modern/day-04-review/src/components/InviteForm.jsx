import '../styles/InviteForm.css'
const InviteForm = () => {
    const handleSumbit = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <form onSubmit={handleSumbit} className="formClass">
                <div className='divs2 marginBDiv'>
                    <label>Name: </label>
                    <input type="text" />
                </div>
                <div className='divs2 marginBDiv'>
                    <label htmlFor="">Email: </label>
                    <input type="email" />
                </div>
                <div className='divs2 marginBDiv'>
                    <label htmlFor="">How did you hear about us? </label>
                    <input type="text" />
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