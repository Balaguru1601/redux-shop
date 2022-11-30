import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
	const items = useSelector((state) => state.cart.items);
	const total = useSelector((state) => state.cart.total);

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				<CartItem items={items} />
			</ul>
			<h2>Total : ${total}</h2>
		</Card>
	);
};

export default Cart;
