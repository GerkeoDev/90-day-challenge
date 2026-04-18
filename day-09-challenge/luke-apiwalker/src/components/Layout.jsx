import { useEffect } from "react";
const droids = require("../assets/images/droids.png")

const Layout = ({data}) => {
    let title = ""
    let properties = []
    switch(data?.type){
        case "people":
            title = data.resource.name
            properties = [`Eye Color: ${data.resource.eye_color}`, `Hair Color: ${data.resource.hair_color}`, `Skin Color: ${data.resource.skin_color}`, `Birth Year: ${data.resource.birth_year}`, `Gender: ${data.resource.gender}`, `Mass: ${data.resource.mass}`, `Height: ${data.resource.height}`]
            break;
        case "planets":
            title = data.resource.name
            properties = [`Population: ${data.resource.population}`, `Climate: ${data.resource.climate}`, `Terrain: ${data.resource.terrain}`, `Diameter: ${data.resource.diameter}`, `Gravity: ${data.resource.gravity}`, `Orbital Period: ${data.resource.orbital_period}`, `Rotation Period: ${data.resource.rotation_period}`, `Surface Water: ${data.resource.surface_water}`]
            break;
        case "films":
            title = data.resource.name
            properties = [`Episode: ${data.resource.episode_id}`, `Director: ${data.resource.director}`, `Release Date: ${data.resource.release_date}`, `Producer: ${data.resource.producer}`, `Opening Crawl: ${data.resource.opening_crawl}`]
            break;
        case "species":
            title = data.resource.name
            properties = [`Eye Color: ${data.resource.eye_color}`, `Hair Color: ${data.resource.hair_color}`, `Skin Color: ${data.resource.skin_color}`, `Birth Year: ${data.resource.birth_year}`, `Gender: ${data.resource.gender}`, `Mass: ${data.resource.mass}`, `Height: ${data.resource.height}`]
            break;
        case "vehicles":
            title = data.resource.name
            properties = [`Eye Color: ${data.resource.eye_color}`, `Hair Color: ${data.resource.hair_color}`, `Skin Color: ${data.resource.skin_color}`, `Birth Year: ${data.resource.birth_year}`, `Gender: ${data.resource.gender}`, `Mass: ${data.resource.mass}`, `Height: ${data.resource.height}`]
            break;
        case "starships":
            title = data.resource.name
            properties = [`Eye Color: ${data.resource.eye_color}`, `Hair Color: ${data.resource.hair_color}`, `Skin Color: ${data.resource.skin_color}`, `Birth Year: ${data.resource.birth_year}`, `Gender: ${data.resource.gender}`, `Mass: ${data.resource.mass}`, `Height: ${data.resource.height}`]
            break;
        default:
            title = "Unknown Resource"
            break;
    }
    useEffect(()=> {
        console.log("Data from Layout",data)
    },[data])
    return data==="error"?(
        <div>
            <p>These aren't the droids you're looking for</p>
            <img src={droids} alt="These aren't the droids you're looking for" />
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

