import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../../store/redux";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
	const dispatch = useDispatch();

	const cartToggleHandler = () => {
		dispatch(toggleActions.toggleCart());
	};

	const quantity = useSelector((state) => state.cart.totalQuantity);

	return (
		<button className={classes.button} onClick={cartToggleHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{quantity}</span>
		</button>
	);
};

export default CartButton;
