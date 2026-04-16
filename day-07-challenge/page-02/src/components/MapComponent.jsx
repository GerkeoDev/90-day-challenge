import { useState } from "react";

const MapComponent = () => {
    const urlApi = "https://kitsu.io/api/edge/anime";
    const [ dataApi, setDataApi ] = useState([])
    const handleClick = () => {
        fetch(urlApi)
            .then(res => res.json())
            .then(data => {setDataApi(data.data)})
    }
    return (
        <div>
            <div>
                Map Component
            </div>
            <div>
                <button onClick={handleClick}>Get Animes</button>
            </div>
            <div style={{marginTop: "30px"}}>
                {dataApi.map((element, index) => (
                    <div key={index}>
                        <p className="box">
                            <div>Title: {element.attributes.canonicalTitle}</div>
                            <div>Description: {element.attributes.description}</div>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MapComponent;