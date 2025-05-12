import React, { useContext } from 'react'


import { CartContext } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom';



const ProductCard = ({product}) => {
const {addToCart} = useContext(CartContext);

const HandleAddToCart = (product) => {
      addToCart(product)
      alert("jpai tei");
}
const navigate = useNavigate();
  return (
    <>
      <div className='Products '>
        <img src={product.image} alt=""  className='w-full h-90 object-contain p-4' />
        <div className="parent-product flex flex-col justify-between flex-grow p-4">
            <div className="productkolist">
            <h3 className='font-bold text-lg text-black'>{product.name}</h3>
        <p className='text-sm text-black'>{product.category}</p>
        <span className='product-price font-bold'>Rs.{product.price}</span>
        </div>
        <div className="flex gap-2 mt-auto">
<button className='AddToCart w-1/2 px-4 py-2 ' onClick={()=>HandleAddToCart(product)}>Add To Cart</button>
       <button className='BuyNow w-1/2 ' onClick={() => navigate("/esewa",{state:{amount:product.price, name:product.name}})}>Buy Now</button>
        </div>
       
        </div>
      </div>
    </>
  )
}

export default ProductCard
