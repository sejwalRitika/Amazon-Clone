import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import './navbarbanner.css';
function Navbarbanner () {
let option =[
{ "name": "Fresh" },
{ "name": "Amazon miniT" },
{ "name": "Sell" },
{ "name": "Best Sellers" },
{ "name": "Today's Deals" }, 
{ "name": "Mobiles" }, 
{ "name": "Electronics" }, 
{ "name": "Prime" }, 
{ "name": "Customer Service" }, 
{ "name": "Fashion" }, 
{ "name": "Home & Kitchen" }
]
return(
<div className="navbarBanner">
<div className="navberBannerOptionsLeft">
<div className='optionnavbarBanner'>
<MenuIcon sx={{fontSize:"24px"}}/>
<div className='alloptionsnavbaeBanner'>All</div>
</div>
{
option.map((iteam, index)=>{
return(
<NavLink to={'/products'} className='optionnavbarBanner'key={index}>
<div className='alloptionsnavbaeBanner'>{iteam.name}</div>
</NavLink>
)
})
}
</div>
<div className="navbarBannerRightSide">
<img src="https://f.media-amazon.com/images/G/31/img19/SiddMiniTV/26MayHero/SWM_400x391._CB557661637_.jpg" alt='amzonprime'/>
</div>
</div>
)
}

export default Navbarbanner;