const webUrl = process.env.REACT_APP_URL;
const ProductList = props => {
    const { products } = props;
    return (
        <div>
            {products.map((product, idx) => <div key={idx}>
                <label htmlFor="title"><a href={`${webUrl}/${product._id}`}>{product.title}</a></label><br />
                <label htmlFor="price"> {product.price}</label><br />
                <label htmlFor="description"> {product.description}</label><hr />
            </div>)}
        </div>
    )
}
export default ProductList;