import product from '../../../Product';
import './homebanner.css';
function Homebanner () {
return(
<div className='homeBanner'>
<img className="homeBannerimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img24/Jupiter24/H1/J24_P1_GW_PC_EventHero_NTA_BU_RNPUnrec_Tmr_2x._CB544523957_.jpg" alt="logo" />
<div className='garybackgroundhomebanner'></div>
<div className='homeBanneritemDiv'>
{
product.map((item,index)=>{
return(
<div className='homebanneritemdivcard' key={index}>
<div className='homebanneritemdivcardTitle'>{item.itemTitle}</div>
<div className='imghomebanneritemdivcard'>
{
item.imgs.map((it, ind)=>{
return(
<div className='imgBannerHomeDiv' key={ind}>
<img className="imgbannerhomedivimg"src={it}alt="logo" />
<div className='imBannerImgName'>Products</div>
</div>
)
})
}
</div>
<div className='seemorehomebanner'>See More</div>
</div>
)
})
}
</div>
</div>
)
}

export default Homebanner;