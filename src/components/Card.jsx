import React from "react";
import Item from "./Item";
//import { ListOfProducts } from "./data";
//import {ListOfProducts} from './data'



//Encounterred a bug while resolving hooks,
//The prevents mapping of products inform of cards into the container

const Card=()=>{
  let  products=[
        {
            name:'Watch',
            description:'This a US brand watch built be Mandevour company, it is one of the best in the market',
            cost:'$5.5',
            image:'https://i.imgur.com/aTtVpES.jpg',
        },
        {
        name: 'Kettle',
        cost: '$3.8',
        description: 'Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.',
        image: 'https://i.imgur.com/Mx7dA2Y.jpg',
        alt: 'A bronze statue of two crossed hands delicately holding a human brain in their fingertips.'
      }, {
        name: 'Television',
        cost: '$15.4',
        description: 'This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.',
        image: 'https://i.imgur.com/ZF6s192m.jpg',
        alt: 'A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.'
      }, {
        name: 'Sneaker',
        cost: '$22.6',
        description: 'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
        image: 'https://i.imgur.com/aTtVpES.jpg',
        alt: 'The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.'
      }, {
        name: 'Smart Watch',
        cost: '$13.2',
        description: 'Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.',
        image: 'https://i.imgur.com/RCwLEoQm.jpg',
        alt: 'Three monumental stone busts with the heads that are disproportionately large with somber faces.'
      }, {
        name: 'Man city Jersey',
        cost: '$90.2',
        description: 'The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.',
        image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        alt: 'A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.'
      }, {
        name: 'Iphone Pro 12',
        cost: '$17.5',
        description: 'This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.',
        image: 'https://i.imgur.com/2heNQDcm.jpg',
        alt: 'A tall sculpture made of three elements stacked on each other reminding of a human figure.'
      }, {
        name: 'Sub Woofer',
        cost: '$32.9',
        description: "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
        image: 'https://i.imgur.com/wIdGuZwm.png',
        alt: 'An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.'
      }, {
        name: 'Comfort Chair',
        cost: '$54.0',
        description: "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
        image: 'https://i.imgur.com/AlHTAdDm.jpg',
        alt: 'The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.'
      }, {
        name: 'Terracotta Army',
        cost: '$45.6',
        description: 'The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.',
        image: 'https://i.imgur.com/HMFmH6m.jpg',
        alt: '12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.'
      }, {
        name: 'Lunar Landscape',
        cost: '$37.8',
        description: 'Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.',
        image: 'https://i.imgur.com/rN7hY6om.jpg',
        alt: 'A black matte sculpture where the individual elements are initially indistinguishable.'
      }, {
        name: 'Gucci shirt',
        cost: '$76.9',
        description: 'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
        image: 'https://i.imgur.com/okTpbHhm.jpg',
        alt: 'A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.'
      }, {
        name: 'Hippos toy',
        cost: '$34.7',
        description: 'The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.',
        image: 'https://i.imgur.com/6o5Vuyu.jpg',
        alt: 'A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.'
      }
    ]
    
    const ListofProducts=products.map(product=>
        <Item key={product.name} product={product}/>
    )

    return(
       <div>
        {ListofProducts}
        </div>
    )
}
export default Card