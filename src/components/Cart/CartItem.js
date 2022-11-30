import { useDispatch } from "react-redux";
import { cartActions } from "../../store/redux";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
	const dispatch = useDispatch();

	const increaseQuantity = (id) => {
		dispatch(cartActions.increase(id));
	};

	const decreaseQuantity = (id) => {
		dispatch(cartActions.decrease(id));
	};

	return props.items.map((item) => (
		<li className={classes.item} key={item.id}>
			<header>
				<h3>{item.title}</h3>
				<div className={classes.price}>
					<span className={classes.itemprice}>
						(${item.price.toFixed(2)}/item)
					</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{item.quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={increaseQuantity.bind(null,item.id)}>+</button>
					<button onClick={decreaseQuantity.bind(null,item.id)}>-</button>
				</div>
			</div>
		</li>
	));
};

export default CartItem;
