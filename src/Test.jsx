import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Test = () => {
    const [products, setPRoducts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/product.php').then((res)=>{
            setPRoducts(res.data);
            console.log("Products fetched successfully:", res.data);
        }).catch((err)=>{
            console.error("Error fetching products:", err);
        })
    },[]);
  
}

export default Test
