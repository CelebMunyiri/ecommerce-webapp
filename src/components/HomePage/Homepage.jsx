import React,{useState,useEffect} from 'react'
import './Homepage.css'

const Homepage=()=> {
    const [imageIndex,setImageIndex]=useState(0)
    const imagestoUse=[
        'url(https://ke.jumia.is/cms/2023/W27/CP/Sliders2/Dstv_S.jpg)',
        'url(https://ke.jumia.is/cms/2023/W29/CP/Sliders/KE_HiiBaridi_BundlePacks_0723_S.jpg)',
        'url(https://ke.jumia.is/cms/2023/ODS/July/SW2_S.jpg)',
        'url(https://ke.jumia.is/cms/2023/W27/CP/KE_Weekend_NewArrivals_0623_S.jpg)',
        'url(https://ke.jumia.is/cms/2023/W29/CP/Revised/KE_HiiBaridi_BodyShop_0723_S_rvsd.jpg)',
        'url(https://ke.jumia.is/cms/2023/W29/CP/Sliders/KE_HiiBaridi_Smartphones_0723_S.jpg)'

    ];
    
    useEffect(()=>{
        const changeBackground=()=>{
            setImageIndex((prevIndex)=>(prevIndex+1)%imagestoUse.length);
        };
        const interval=setInterval(changeBackground,2000);

        return ()=>clearInterval(interval)
    },[]);
  return (
    <div className='homepage'>
      <div className="upper">
        <div className="navigation"></div>
        <div className="promotions" style={{background:imagestoUse[imageIndex],width:'100%',height:'100%',}}></div>
        <div className="sidebar"></div>
      </div>
    </div>
  )
}

export default Homepage
