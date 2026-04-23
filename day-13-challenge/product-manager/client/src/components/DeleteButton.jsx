const DeleteButton = props => {
    const { productId } = props;
    return <button onClick={() => console.log(productId)}>
        Delete
    </button>
}
export default DeleteButton;