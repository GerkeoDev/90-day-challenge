import { useState } from "react";

const ProductForm = (props) => {
    const {initialData, onSubmitProp} = props;
    const [product, setProduct] = useState(initialData);
    const handleSubmit = e => {
        e.preventDefault();
        onSubmitProp(product);
        setProduct(initialData);
    };
    const handleChange = e => {
        console.log([e.target.value, e.target.name]);
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" placeholder="Title" value={product.title} onChange={e=>handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="price">Price: </label>
                <input type="text" name="price" placeholder="Price" value={product.price} onChange={e=>handleChange(e)}/>
            </div>
            <div>
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" placeholder="Description" value={product.description} onChange={e=>handleChange(e)}/>
            </div>
            <div>
                <input type="submit"/>
            </div>
        </form> 
    )
}
export default ProductForm;