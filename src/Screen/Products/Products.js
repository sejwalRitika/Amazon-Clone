import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../Redux/actions/Action';
import './products.css';
import projectdata from './projectdata';
function Products (){

let dispatch = useDispatch();
let cartItems = useSelector((state) => state.cart.items);
let handleAddToCart = (item) =>{
toast.success('SuccessFully Added in Cart',{
position:"bottom-right"
})
dispatch(addToCart(item))
}
return(
<div className='productpage'>
<div className='productTopBanner'>
<div className='productTopBannerItems'>
Electronics
</div>
<div className='productTopBannerItemsSubMenu'>Moblie & Accessories</div>
<div className='productTopBannerItemsSubMenu'>Laptops & Accessories</div>
<div className='productTopBannerItemsSubMenu'>TV & Home Entertainment</div>
<div className='productTopBannerItemsSubMenu'>Audio</div>
<div className='productTopBannerItemsSubMenu'>Cameras</div>
<div className='productTopBannerItemsSubMenu'>Computer Peripherals</div>
<div className='productTopBannerItemsSubMenu'>Smart Technology</div>
<div className='productTopBannerItemsSubMenu'>Musical Instruments</div>
<div className='productTopBannerItemsSubMenu'>Office & Stationary</div>
</div>
<div className='productspagaMain'>
<div className='productspageMainLeftCategory'>
<div className='productspagemainleftcategoryTitle'>Category</div>
<div className='productspagemainleftcategorycontent'>
<div className='productspagemainleftcategoryTitlecontent'>Computer & Accessories</div>
<div className='productspagemainleftcategorycontentsub'>Macbooks</div>
<div className='productspagemainleftcategorycontentsub'>Amazon Prime</div>
<div className='productspagemainleftcategorycontentsub'>Average Customer Revivew</div>

<div className='ratingleftbox'>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<div className='andup'>& Up</div>
</div>

<div className='ratingleftbox'>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon  sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<div className='andup'>& Up</div>
</div>
<div className='ratingleftbox'>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon  sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<div className='andup'>& Up</div>
</div>
<div className='ratingleftbox'>
<StarRateIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon  sx={{fontSize:"20px", color:"#febd69"}}/>
<StarOutlineIcon sx={{fontSize:"20px", color:"#febd69"}}/>
<div className='andup'>& Up</div>
</div>

<div className='productspagemainleftcategorycontentsub'>Amazon Prime</div>
<div className='productspagemainleftcategorycontentsub'>Average Customer Review</div>

<div className='productspagemainleftcategorycontentsub'>Amazon Prime</div>
<div className='productspagemainleftcategorycontentsub'>Average Customer Review</div>

<div className='productspagemainleftcategorycontentsub'>Amazon Prime</div>
<div className='productspagemainleftcategorycontentsub'>Average Customer Review</div>

<div className='productspagemainleftcategorycontentsub'>Amazon Prime</div>
<div className='productspagemainleftcategorycontentsub'>Average Customer Review</div>

<div className='productspagemainleftcategorycontentsub'>Amazon Prime</div>
<div className='productspagemainleftcategorycontentsub'>Average Customer Review</div>
</div>
</div>

<div className='productspagemainright'>
<div className='productspagemainrighttopbanner'>
1-5 of 5 resultfor <span className='productspagemainrighttopbannerspan'>Macbooks</span>
</div>
<div className='itemsImageproductPage'>
{
projectdata.map((item,index)=>{
return(
<div className='itemsimageproductpageone' key={item.id}>
<div className='imgBlockitemsimageproductpageone'>
<img src={item.imageUrl}  className="prouctimag" alt="img" />
</div>
<div className='productNameProducts'>
<div>{item.name}</div>
<div className='productNameProductRating'>
<StarRateIcon sx={{fontSize:"16px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"16px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"16px", color:"#febd69"}}/>
<StarRateIcon sx={{fontSize:"16px", color:"#febd69"}}/>
<StarOutlineIcon  sx={{fontSize:"16px", color:"#febd69"}}/>
</div>
<div className='priceproductdetailpage'>
<div className='currencytext'>₹</div>
<div className='ratehomedetail'>
<div className='ratehomedetailsprice'>{item.price}</div>
<div className='addtobasketBtn' onClick={()=>{handleAddToCart(item)}}>Add To Cart</div>
</div>
</div>
<div className='offprouductpage'>Upto 10% off on selct cards</div>
<div className='freeDeliveryhomepage'>Free Delivery By Amazon</div>
</div>
</div>
)
})
}
</div>
</div>
</div>
<ToastContainer/>
</div>
)
}

export default Products;