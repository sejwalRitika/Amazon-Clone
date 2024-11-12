import Homebanner from './HomeBanner/homebanner';
import HomeDetails from './HomeDetails/homedetails';
import './homescreen.css';
function Homescreen () {
return(
<div className='homescreen'>
<Homebanner/>
<HomeDetails/>
</div>
)
}

export default Homescreen;