import { useState } from "react"
import axios from "axios"
const SearchForm = ({updateData}) => {
    const [selected, setSelected] = useState('people')
    const [selectedId, setSelectedId] = useState('1')
    const handleChangeSelected = (e) => {
        setSelected(e.target.value)
    }
    const handleChangeSelectedId = (e) => {
        setSelectedId(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.get(`https://swapi.dev/api/${selected}/${selectedId}`)
            .then(res => updateData({resource: res.data, type: selected}))
            .catch(err => updateData("error"))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <span>
                    <label>Look for:</label>
                    <select name="selectSearch" id="selectSearch" value={selected} onChange={handleChangeSelected}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="films">Films</option>
                        <option value="species">Species</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="starships">Starships</option>
                    </select>
                </span>
                <span>
                    <label>ID:</label>
                    <input type="text" value={selectedId} onChange={handleChangeSelectedId}/>
                </span>
                <span>
                    <input type="submit" value={"Send"}/>
                </span>
            </form>
        </div>
    )
}
export default SearchForm;