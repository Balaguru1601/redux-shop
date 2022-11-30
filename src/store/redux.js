import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = process.env.REACT_APP_FIREBASE_URL;

// const getInitialData = async () => {
//     try {
//         const response = await axios.get(url);
//         return response.data;
//     } catch (error) {
//         console.log("Fetching data failed");
//         return {
// 	items: [],
// 	total: 0,
// 	totalQuantity: 0,
// };
//     }
// }

const initialCartState = {
	items: [],
	total: 0,
	totalQuantity: 0,
};
const initialToggleState = { isVisible: false };

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		setInitial(state, action) {
			return { items: action.payload.items || [], ...action.payload };
		},
		add(state, action) {
			if (
				state.items.findIndex(
					(item) => item.id === action.payload.id
				) === -1
			) {
				state.items.push(action.payload);
				state.total += action.payload.price;
				state.totalQuantity++;
			} else {
				for (const item of state.items)
					if (item.id === action.payload.id) {
						item.quantity++;
						state.total += item.price;
					}
			}
		},
		increase(state, action) {
			for (const item of state.items)
				if (item.id === action.payload) {
					item.quantity++;
					state.total += item.price;
				}
		},
		decrease(state, action) {
			for (const item of state.items) {
				if (item.id === action.payload) {
					if (item.quantity > 1) item.quantity--;
					else if (item.quantity === 1) {
						state.items = state.items.filter(
							(item) => item.id !== action.payload
						);
						state.totalQuantity--;
					}
					state.total -= item.price;
				}
			}
		},
	},
});

const toggleSlice = createSlice({
	name: "toggle",
	initialState: initialToggleState,
	reducers: {
		toggleCart(state) {
			state.isVisible = !state.isVisible;
		},
		notify(state, action) {
			if (action.payload) console.log("Sending Data");
			else console.log("Data sent succesfully!");
		},
	},
});

const store = configureStore({
	reducer: { cart: cartSlice.reducer, toggle: toggleSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const toggleActions = toggleSlice.actions;

export const getInitialData = () => {
	return async (dispatch) => {
		const getData = async () => {
			try {
				const response = await axios.get(url);
				dispatch(cartActions.setInitial(response.data));
			} catch (error) {
				console.log("fetching data error");
			}
		};

		await getData();
	};
};

export const sendData = (cart) => {
	return (dispatch) => {
		dispatch(toggleActions.notify(true));

		const sendRequest = async () => {
			try {
				await axios.put(url, { ...cart });
				dispatch(toggleActions.notify(false));
			} catch (error) {
				console.log("Data sending failed!");
			}
		};

		sendRequest();
	};
};

export default store;
