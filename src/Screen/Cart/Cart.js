import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { removeFromCart } from '../../Redux/actions/Action';
import './cart.css';
function Cart () {
let [cartItem, setCartItem]= useState([]);
let dispatch = useDispatch();
let cartItems = useSelector((state) => state.cart.items);
let a = 0;
let cost = cartItems.map((item)=>{return a = a+ item.price});
useEffect(()=>{
setCartItem(cartItems);
},[cartItems])

let handleRemoveFromCart = (id) =>{
toast.error('Item Remove From Cart',{
position:"bottom-right"
})
dispatch(removeFromCart(id));
}
return(
<div className='cart'>
<div className='topleftcart'>
<div className='topleftcartTitle'>Shopping Cart</div>
<div className="deselectAllCart">Deselect all items</div>
<div className="cartPriceTextDivider">Price</div>

<div className="cartItemsDiv">
{
cartItems.map((item,ind)=>{
return(
<div className="cartitemBlock">
<div className="cartItemleftBlock">
<div className="cartItemLeftBlockimage">
<img className='cartItemLeftBlockimg' src={item.imageUrl} alt="imag" />
</div>
<div className="cartItemLeftBlockDetails">
<div className="cartItemLeftBlockName">{item.name}</div>
<div className="instockCart">In stock</div>
<div className='elgFreeShp'>Elligible for Free Shipping</div>
<div className="amazonFullFilledImage"><img className="fullfillImg" src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt='img' /></div>
<div className="removeFromcart"onClick={()=>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
</div>
</div>
<div className="cartItemRightBlock">
Rs{item. price}
</div>
</div>
)
})
}


</div>
</div>
<div className="toprightcart">
<div className="subTotalTitle">Subtotal ({cartItem.length} iteam): <span className='subTotalTitleSpan'>Rs {a}</span></div>
<div className="giftAddto">
<input type='checkbox' />
<div>This Order Contains a gift</div>
</div>
<div className="proceedToBuy">Proceed To Buy</div>
</div>
<ToastContainer/>
</div>
)
}

export default Cart;