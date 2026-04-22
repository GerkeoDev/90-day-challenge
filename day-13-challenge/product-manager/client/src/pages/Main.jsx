import ProductForm from "../components/ProductForm";

const Main = () => {
    const initialData = {
        title: '',
        price: '',
        description: ''
    }
    const createProduct = product => {
        console.log('Creating product', product);
    }
    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm initialData={initialData} onSubmitProp={createProduct} />
        </div>
    )
}
export default Main;