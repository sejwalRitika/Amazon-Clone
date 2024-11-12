import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART_QUANTITY, } from "../Actionstype";

export let addToCart = (item)=>({
type : ADD_TO_CART,
payload: item
});

export let removeFromCart = (itemId) => ({
type: REMOVE_FROM_CART,
payload: itemId
});

export let updateCartQuantity = (itemId, quantity) => ({
type: UPDATE_CART_QUANTITY,
payload:{itemId, quantity}
});

export let clearCart = () => ({
type: CLEAR_CART
});