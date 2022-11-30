import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/redux";

const ProductItem = (props) => {
    const dispatch = useDispatch();

    const AddToCartHandler = (item) => {
        dispatch(cartActions.add(item));
    }

	return props.items.map((item) => (
		<li className={classes.item} key={item.id}>
			<Card>
				<header>
					<h3>{item.title}</h3>
					<div className={classes.price}>
						${item.price.toFixed(2)}
					</div>
				</header>
				<p>{item.description}</p>
				<div className={classes.actions}>
					<button onClick={AddToCartHandler.bind(null,item)}>Add to Cart</button>
				</div>
			</Card>
		</li>
	));
};

export default ProductItem;
