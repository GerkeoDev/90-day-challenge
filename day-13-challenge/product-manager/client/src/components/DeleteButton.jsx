import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;
const DeleteButton = props => {
    const { productId, deleteConfirmation } = props;
    const handleDelete = () => {
        window.confirm('Are you sure you want to delete this product?') &&
        axios.delete(`${apiUrl}/${productId}`)
            .then(res => deleteConfirmation(true))
            .catch(err => console.log(err));
    }
    return <button onClick={handleDelete}>
        Delete
    </button>
}
export default DeleteButton;