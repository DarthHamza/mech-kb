const DeleteButton = (props) => {
  const handleDelete = () => {
    props.deleteProduct(props.product.id);
  };
  return (
    <button className="btn btn-outline-danger" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
