import { deleteProduct } from "../store/actions/productActions";
import { useDispatch } from "react-redux";
const DeleteButton = (props) => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-outline-danger"
      onClick={() => dispatch(deleteProduct(props.productId))}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
