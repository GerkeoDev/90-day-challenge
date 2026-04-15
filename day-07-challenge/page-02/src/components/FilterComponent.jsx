import { useEffect, useState } from "react";

const FilterComponent = () => {
    const urlArray = "https://kitsu.io/api/edge/anime"
    const [apiData, setApiData] = useState([])
    const [apiFilter, setApiFilter] = useState(0)
    useEffect(() => {
        fetch(urlArray)
            .then(res=> res.json())
            .then(data=> setApiData(data.data))
    },[]);
    useEffect(() => {
        apiData.length && console.log(apiData)
    },[apiData]);
    const filteredApiData = apiData.filter(object => parseFloat(object.attributes.averageRating)>=apiFilter)
    return (
        <div>
            <div>
                <p>Filter Component</p>
                <input type="text" onChange={(e)=>setApiFilter(e.target.value)} value={apiFilter}/>
                {/* <button onClick={()=> console.log(filteredApiData)}>Log</button> */}
            </div>
            {filteredApiData.map((object, index)=> (
                <div key={index}>
                    <div>{object.attributes.canonicalTitle}</div>
                </div>
            ))}
        </div>
    )
}
export default FilterComponent;