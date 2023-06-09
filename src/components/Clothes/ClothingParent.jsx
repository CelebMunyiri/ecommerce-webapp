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
        {
            name:'Adidas Men Shirt',
            img:'https://i.ebayimg.com/images/g/aDcAAOSwhylkeqRo/s-l1600.jpg',
            description:'This a medium sized mens sports T-shirt, Rhymes well with other Adidas products like shoes and Pants',
            price:'$157'
        },
        {
            name:'Fendi men Shirts ',
            img:'https://i.ebayimg.com/images/g/kQkAAOSwoKJkeqRH/s-l500.jpg',
            description:'This a Fendi wear for men of medium size and large with different color themes',
            price:'$201'
        },
        {
           name:'Ladies Casual Jacket',
           img:'https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/WomensFashion/Freelinks/Casual-Jackets.png'
           ,description:'A ladies Casual jacket for neutral weather and summer times',
           price:'$231.0'
        },
        {
            name:'Ladies Pants',
            img:'https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/WomensFashion/Freelinks/Pants.png',
            description:'Ladies Pants, loose baggy sweat pants and parazos',
            price:'$180.0'
        },
        {
            name:'Ladies Jeans Wear',
            img:'https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/WomensFashion/Freelinks/Jeans.png',
            description:'Ladies Jeans of different sizes according to customer size, made of cotton material, easy to clean and dry',
            price:'$200.0'
        },
        {
            name:'Ladies Dresses',
            img:'https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/WomensFashion/Freelinks/Dresses.png',
            description:'This are dresses of high Quality material',
            price:'$150.0'
        },
        {
            name:'Ladies Top & Teess',
            img:'https://ke.jumia.is/cms/2022/BlackFriday/Userneeds/WomensFashion/Freelinks/Tops-&-Tees.png',
            description:'This are Cotton made ladies tops and tees of different sizes and color',
            price:'$120.0'
        },{
            name:'Sling Bag Ladies Handbags',
            img:'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/42/8890611/1.jpg?4206',
            description:'Fashion Black Sling Bag Handbags shoulder Bag wallet Waterproof-Black',
            price:'$5.50'
        },
        {
            name:'Halter jumpsuit trousers',
            img:'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/47/253668/1.jpg?7165',
            description:'Generic women Sexy sleeveless halter Jumpsuit Trousers',
            price:'$9.00'
        },
        {
            name:'Square Neck Lantern Ruffle Shorts',
            img:'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/17/253668/1.jpg?7123',
            description:"Generic women Square Neck lantern Long Sleeve Ruffle shorts casuals Culottes Jumpsuit",
            price:'1$2.00'

        }
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
