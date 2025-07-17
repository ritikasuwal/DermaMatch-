import React, { useEffect, useState } from "react";
import HomeSlider from "../../HomeSlider/HomeSlider";
import CatSlider from "../../HomeCatSlider/CatSlider";
import ProductCard from "../../ProductCard";

// import dt from "../../../assets/detox.webp"
// import vc from "../../../assets/vitamin_c_serum_3.webp"
// import alo from "../../../assets/alo.jpg"
// import acne from "../../../assets/acne.jpg"
// import cetnight from "../../../assets/cetnight.jpg"
// import joygreentea from "../../../assets/joygreentea.jpg"
// import hy from "../../../assets/hy.jpg"
// import rfm from "../../../assets/rfm.jpg"
// import matespf30 from "../../../assets/matespf30.webp"
// import plum from "../../../assets/plum.webp"
// import dermacosun from "../../../assets/dermacosuns.webp"
import axios from "axios";
// const ProductList = [
//   {
//     name: "The Derma Co 1% Hyaluronic Sunscreen ",
//     price: 799,
//     category: "Sunscreen",
//     image: dermacosun,
//   },
//   {
//     name: "Charcoal Detox Face Pack",
//     price: 750,
//     category: "Face Pack",
//     image: dt,
//   },
//   {
//     name: "Vitamin C Serum 30ml",
//     price: 1200,
//     category: "Serum",
//     image: vc,
//   },
//   {
//     name: "Aloe Vera Gel",
//     price: 500,
//     category: "Moisturizer",
//     image: alo,
//   },
//   {
//     name: "Vanilla Caramello Body Lotion by Plum",
//     price: 820,
//     category: "Body Lotion",
//     image: plum,
//   },
//   {
//     name: "Acne Control Face Wash",
//     price: 650,
//     category: "Face Wash",
//     image: acne,
//   },
//   {
//     name: " Cetaphil Brightening Night Cream",
//     price: 1350,
//     category: "Night Cream",
//     image: cetnight,
//   },
//   {
//     name: "Joy Green Tea Toner",
//     price: 800,
//     category: "Toner",
//     image:joygreentea,
//   },
//   {
//     name: "Dr.Sheth's Hyaluronic Acid Moisturizer",
//     price: 1100,
//     category: "Moisturizer",
//     image: hy,
//   },
//   {
//     name: "Saffron Radiance Mask",
//     price: 1050,
//     category: "Face Pack",
//     image: rfm,
//   },
//   {
//     name: "Daily Matte Sunscreen SPF30",
//     price: 890,
//     category: "Sunscreen",
//     image: matespf30,
//   },
// ];

const Home = () => {
   const [products, setPRoducts] = useState([]);
  
      useEffect(()=>{
          axios.get('http://localhost:8000/product.php').then((res)=>{
              setPRoducts(res.data);
              console.log("Products fetched successfully:", res.data);
          }).catch((err)=>{
              console.error("Error fetching products:", err);
          })
      },[]);
  return (
    <>
      <HomeSlider />
      <CatSlider />
      <div className="Product-Container ">
        {products.map((productdetail,index)=>(
<ProductCard key={index} product={productdetail}/>
        ))}
        

      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
