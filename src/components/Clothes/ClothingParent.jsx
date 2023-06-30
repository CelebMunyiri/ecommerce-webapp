import React from 'react'
import ClothingChild from './ClothingChild'

function ClothingParent() {
    const clothings=[
        {
            name:'Gucci Men Shirt',
            img:'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1686760412/752266_XJFTA_9692_001_100_0000_Light-GG-cotton-terry-cloth-polo-with-Web.jpg',
            description:"This is a Gucci men shirt with neck length 0f 20cm, good for size 40-43 men shirt size",
            price:'$200'
        },
        {
            name:'Louis Vuitton Men Shirt',
            img:'https://di2ponv0v5otw.cloudfront.net/posts/2023/01/30/63d87c7432c1dc6bd76ade55/s_wp_63d87d61dff94dde11ed9ffa.webp'
            ,description:"Medium sized men shirt with long lasting mayterial and perfurmed with walalo best perfumes",
            price:'$120'
        },
    ]
    const ListOfClothes=clothings.map(clothes=>
        <ClothingChild key={clothes.name} clothes={clothes}/>)
  return (
    <div className='container'>
      {ListOfClothes}
    </div>
  )
}

export default ClothingParent
