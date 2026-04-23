import { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from 'axios';
import ProductList from "../components/ProductList";
const apiUrl = process.env.REACT_APP_API_URL;

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const initialData = {
        title: '',
        price: '',
        description: ''
    }
    const createProduct = product => {
        axios.post(apiUrl, product)
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
    }
    useEffect(() => {
        axios.get(apiUrl)
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    })
    return (
        <div className="main">
            <h1>Product Manager</h1>
            <ProductForm initialData={initialData} onSubmitProp={createProduct} />
            <hr />
            {loaded && <ProductList products={products} />}
        </div>
    )
}
export default Main;