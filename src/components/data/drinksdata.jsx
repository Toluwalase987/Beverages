import bigicola from "../../img/bigicola1.png"
import bigiapple from "../../img/bigiapple.png";
import bigilemon from "../../img/bigilemon2.png";
import bigiginger from "../../img/bigiginger.png";
import bigitropical from "../../img/bigitropical.png";
import fura1 from "../../img/fura6.jpeg";
import fura2 from "../../img/fura5.jpeg";
import fura3 from "../../img/fura5.png";
import fura4 from "../../img/fura7.png";
import fura5 from "../../img/fura8.jpg";
import kunu1 from "../../img/kunu6.jpg";
import kunu2 from "../../img/kunu3.jpg";
import kunu4 from "../../img/kunu5.jpg";
import kunu5 from "../../img/kunu8.jpeg";
import kunu6 from "../../img/kunu7.webp";
import zobo1 from "../../img/zobo1.jpg";
import zobo2 from "../../img/zobo2.jpg";
import zobo3 from "../../img/zobo3.jpg";
import zobo6 from "../../img/zobo6.jpg";
import zobo7 from "../../img/zobo6.jpeg";
import bigiImg from "../../img/Bigi2.jpg";
import kunuImg from "../../img/kunu5.png";
import furaImg from "../../img/fura5.png";
import zoboImg from "../../img/zobo6.jpeg"; 


const drinksData = [
    {
      brandName: "Bigi Cola",
      name: "Bigi Drinks",
      coverPhoto: bigiImg,
      image: bigicola,
      description: "Mouthwatering Perfection Starts With Originality In Taste. Bigi Cola Is Our Carbonated Drink With The Popular Cola Signature Taste. This Cola Drink Has A Sure Refreshing Taste Like None Other.Impress With Style When You Refresh With Mr. Cool!",
      brand: "Bigi",
      currentPrice: "200",
      formerPrice: "150",
      discount: "+33%",
      similarDrinks: [bigiapple, bigitropical, bigilemon, bigiginger]
    },
    {
      brandName: "Fura Da Nono",
      name: "Fura",
      coverPhoto: furaImg,
      image: fura4,
      description: "Mouthwatering Perfection Starts With Originality In Taste. Fura Is Our Traditional Beverage With The Popular Yoghurt Signature Taste. This Drink Has A Sure Refreshing Taste Like None Other.Impress With Style When You Refresh With Fura Da Nono!",
      brand: "Naija's Beverages",
      currentPrice: "500",
      formerPrice: "550",
      discount: "-33%",
      similarDrinks: [fura2, fura3, fura1, fura5]
    },
    {
      brandName: "Kunun Zaki",
      name: "Kunu",
      coverPhoto: kunuImg,
      image: kunu6,
      description: "Mouthwatering Perfection Starts With Originality In Taste. Kunun Zaki Is Our Northern Local Drink With The Popular Millet Signature Taste. This Beverage Has A Sure Refreshing Taste Like None Other.Impress With Style When You Refresh With Kunun Zaki!",
      brand: "Naija's Beverages",
      currentPrice: "200",
      formerPrice: "150",
      discount: "+33%",
      similarDrinks: [kunu2, kunu1, kunu5, kunu4]
    },
    {
      brandName: "Zobo",
      name: "Zobo",
      coverPhoto: zoboImg,
      image: zobo6,
      description: "Mouthwatering Perfection Starts With Originality In Taste. Zobo Is Our Local Beverage With The Popular Hibiscus Signature Taste. This Drink Has A Sure Refreshing Taste Like None Other.Impress With Style When You Refresh With Zobo!",
      brand: "Dovel",
      currentPrice: "400",
      formerPrice: "450",
      discount: "-33%",
      similarDrinks: [zobo2, zobo3, zobo7, zobo1]
    }
  ]
  

  export default drinksData;
  