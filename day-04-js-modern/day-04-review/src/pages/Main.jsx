
import HeaderComponent from "../components/HeaderComponent";
import InviteForm from "../components/InviteForm";
// import NumberCounter from "../components/NumberCounter";
const Main = () => {
    
    return (
        <div>
            <HeaderComponent/>
            <div className="content">
                {/* <NumberCounter/> */}
                <InviteForm />
            </div>
            
        </div>
    )
}
export default Main;