import '../Search/style.css';
import Button from '@mui/material/Button';
import {  BsSearchHeartFill } from "react-icons/bs";
const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2'  >
      <input type="text" placeholder='Search for Products...' className='w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]'/>
      <Button className='!absolute top-[7px] right-[5px] z-50 w-[35px] !min-w-[39px] h-[39px] !rounded-full !text-black '><BsSearchHeartFill
       className='text-black text-[20px]' ></BsSearchHeartFill></Button>
    </div>
  )
}

export default Search
