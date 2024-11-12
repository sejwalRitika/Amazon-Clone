import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../../../Assets/Logo.png';
import india from '../../../Assets/india.png';
import './navbarbelt.css';
function Navbarbelt () {
let cartItems = useSelector((state)=> state.cart.items);
return(
<div className='navbarbelt'>
<div className='leftnavbetl'>
<NavLink to={'/'} className='leftnavbeltlogo'>
<img className="amazonlogo" src={logo} alt="amazon" />
<span className='navbar_inlogo'>.in</span>
</NavLink>
<div className='navbarBeltlocation'>
<div className='navbarBeltLocationimg'>
<LocationOnIcon className='navbarBeltimgicon' SX={{fontSize: "22px"}}/>
</div>
<div className='navbarbeltlocationplace'>
<div className='navbarbeltlocationtop'>Devlivering To Delhi</div>
<div className='navbarbeltlocationbottom'>Update Location</div>
</div>
</div>
</div>
<div className='navbarbeltsearchbox'>
<div className='navbarBeltsearchDiv'>
<div className='navbarBeltsearchBoxAll'>
<div className='naverBeltsearchBoxAllText'>All</div>
<ArrowDropDownIcon sx={{fontSize: "20px"}}/>
</div>
<input type="text" className='navbarBeltInputsearchbox' placeholder='search Amazon.in'/>
<div className='searchiconnavbarbelt'>
<SearchIcon sx={{fontSize:"26px"}}className='searchicon'/>
</div>
</div>
</div>
<div className='rightsidenavbarbelt'>
<div className='indianflag'>
<img src={india}  className="indiaflagcode" alt="flag" />
<div className='indianavbarbelt'>EN 
<ArrowDropDownIcon sx={{fontSize:16,marginTop:1,marginLeft:-0.4}} className='indiacode'/></div>
</div>
<div className='hellosigninnavbar'>
<div className='hellonavbarbelt'>Hello,User</div>
<div className='indianavbarbelt'>Account & List</div>
</div>
<div className='hellosigninnavbar'>
<div className='hellonavbarbelt'>Returns</div>
<div className='indianavbarbelt'>& orders</div>
</div>
<NavLink to={'/cart'} className='hellosigninnavbar'>
<span className='cartitemnumberbelt'>{cartItems.length}</span>
<div className='hellonavbarbelt'><ShoppingCartIcon/><span className='carttitle'>Cart</span></div>
</NavLink>
</div>
</div>
)
}

export default Navbarbelt;