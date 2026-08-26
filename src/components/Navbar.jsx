import React from 'react'
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import Slide from './Slide';
import { useCart } from '../context/Cartcontext';

function Navbar() {
  const { cart } = useCart();
//count qty
  const Countcart = cart.reduce((total, item) => total + item.quantity,0);
  return (

    <nav className='bg-blue-700 w-full h-19 sticky top-0'>
      <h2 className='ml-10 text-black text-2xl font-bold'>ShopNow</h2>
      <div className='flex justify-center  gap-30'>
        <Link to={"/"} className='text-white font-bold text-lg hover:text-blue-900'>Home</Link>
        <Link to={"/Products"} className='text-white font-bold text-lg hover:text-blue-900'>Product</Link>
        <Link to={"/About"} className='text-white font-bold text-lg hover:text-blue-900'>About</Link>
        <Link to={"/Contacts"} className='text-white font-bold text-lg hover:text-blue-900'>Contact</Link>

        <Link to={"/cart"} className=' relative  bg-blue-600    p-2 rounded-xl w-16  text-center text-white hover:bg-blue-600   '>
          {Countcart > 0 && (
            <span className='bg-red-600 absolute w-5 h-5 rounded-full flex justify-center items-center -top-2  -right-1 text-x   font-medium'>
              {Countcart}
            </span>


          )}
          Cart
        </Link>
        <Link className='bg-blue-500 p-2 rounded-xl  w-20 text-center text-white hover:bg-blue-600  '>Loign</Link>



      </div>

    </nav>

  )
}

export default Navbar
