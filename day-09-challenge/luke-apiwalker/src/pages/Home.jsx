import { useState } from 'react'
import Layout from '../components/Layout'
import SearchForm from '../components/SearchForm'
const Home = () => {
    const [ data, setData ] = useState(null)
    const updateData = (newData) => {
        setData(newData)
    }
    return (
        <div>
            <SearchForm updateData={updateData}/>
            <Layout data={data}/>
        </div>
    )
}
export default Home