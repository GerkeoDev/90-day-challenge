import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const Update = () => {
    const { id } = useParams();
    const [ initialData, setInitialData] = useState({
        title: '',
        price: '',
        description: ''
    });
    const updateProduct = product => {
        axios.put(`${apiUrl}/${id}`, product)
            .then(res => setInitialData(res.data))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        axios.get(`${apiUrl}/${id}`)
            .then(res => setInitialData(res.data))
            .catch(err=> console.log(err));
    }, [id])
    return (
        <div>
            <h1>Update Product</h1>
            <ProductForm initialData={initialData} onSubmitProp={updateProduct}/><hr />
        </div>
    )
}
export default Update;