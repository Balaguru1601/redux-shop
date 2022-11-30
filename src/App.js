import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { sendData,getInitialData } from "./store/redux";

let isInitial = true;

function App() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
        if (isInitial) {
            dispatch(getInitialData());
			isInitial = false;
			return;
		}
		dispatch(sendData(cart));
	}, [cart, dispatch]);

	const cartIsVisible = useSelector((state) => state.toggle.isVisible);
	return (
		<Layout>
			{cartIsVisible && <Cart />}
			<Products />
		</Layout>
	);
}

export default App;
