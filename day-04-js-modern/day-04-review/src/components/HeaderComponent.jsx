
import '../styles/HeaderComponent.css'
const HeaderComponent = ({formData, submitted}) => {
    return (
        <div className='header'>
            {/* <button onClick={()=> console.log(formData)}>Verify Data</button> */}
            {submitted ? ( 
                <div className='success'>
                    Invitation request sent
                </div>
            ) : (
                <div className='idle'>
                    Invitation System
                </div>
            )
            }
        </div>
    )
}
export default HeaderComponent