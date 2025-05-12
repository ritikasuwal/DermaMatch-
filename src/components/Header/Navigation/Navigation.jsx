import React, { useState } from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaShippingFast } from "react-icons/fa";
import CategoryPanel from './CategoryPanel';
import '../../../index.css';
import { Home } from '@mui/icons-material';



const Navigation = () => {

const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

const openCategoryPanel=()=>{
    setIsOpenCatPanel(true);
}


  return (
    <>
    <nav className='py-2'>
        <div className="container flex items-center justify-end gap-8">
            <div className="col1 w-[20%]">
                <Button className='!text-black  gap-2 w-full font-bold' onClick={openCategoryPanel} ><RiMenu2Fill className='text-[18px] !font-bold' />  <span className="font-bold">SHOP BY CATEGORIES</span>
                <FaAngleDown className='text-[18px] ml-auto font-bold' />
                </Button>
            </div>
            <div className="col2 w-[70%] flex items-center gap-1 justify-evenly ">
                <ul className='flex items-center gap-3'>
                    <li className='list-none'>
                        <Link to="/" className=' text-[18px] font-[500]'>
                        <Button className='!link transition !font-[500]   '><span className="font-bold ">Home</span></Button>
                        </Link>
                    </li>
                </ul>
                <ul className='flex items-center gap-3'>
                    <li className='list-none'>
                        <Link to="/" className=' text-[18px] font-[500]'>
                        <Button className='!link transition !font-[500]   '>
                        <span className="font-bold">New Arrivals</span></Button></Link>
                    </li>
                </ul>
                <ul className='flex items-center gap-3'>
                    <li className='list-none'>
                    <Link to="/" className=' text-[18px] font-[00]'>
                        <Button className='!link transition !font-[500]   '>
                        <span className="font-bold">Best Sellers</span></Button></Link>
                    </li>
                </ul>
                <ul className='flex items-center gap-3'>
                    <li className='list-none'>
                    <Link to="/" className=' text-[16px] font-[500]'>
                        <Button className='!link transition !font-[500]   '>
                        <span className="font-bold">Offers</span></Button></Link>
                    </li>
                </ul>
            </div>
            <div className="col2 w-[20%] flex items-center ">
                <p className='text-[16px] font-[500] flex items-center gap-3 mb-0 mt-0'> 
                    <FaShippingFast className='text-[20px]'/>Free Delivery Inside Valley</p>
                
            </div>
          
        </div>
    </nav>
   {/*Drawer */}
    <CategoryPanel setIsOpenCatPanel={setIsOpenCatPanel} isOpenCatPanel={isOpenCatPanel}></CategoryPanel>
   
    </>
  )
}

export default Navigation
