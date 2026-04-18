import { useEffect } from "react";

const Layout = ({data}) => {
    let title = ""
    let properties = []
    switch(data?.type){
        case "people":
            title = data.resource.name
            properties = [`Eye Color: ${data.resource.eye_color}`]
            break;
        default:
            title = "Unknown Resource"
            break;
    }
    useEffect(()=> {
        console.log("Data from the Layout",data)
    },[data])
    return data===null?(
        <div>
            Holita no hay
        </div>
    ):(
        <div>
            <h2>{title}</h2>
            {properties.map(p=>(
                <div key={p.id}>{p}</div>
            ))}
        </div>
    )
}
export default Layout;