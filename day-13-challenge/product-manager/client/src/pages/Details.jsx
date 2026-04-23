import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const apiUrl = process.env.REACT_APP_API_URL;
const webUrl = process.env.REACT_APP_URL;
const Details = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const getProduct = () => {
        axios.get(`${apiUrl}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getProduct();
    }, [])
    return (product && <div>
            <h1>{product.title}</h1>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div>
                <span><a href={`${webUrl}/${id}/edit`}>Edit</a> </span>
                <DeleteButton productId={id} />
            </div>
        </div>
    )
}
export default Details;