import React from 'react'
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";
import { useCart } from '../context/Cartcontext';

function Cartpage() {
    const { cart,increment,decrement,removecart } = useCart();

    const subtotal=cart.reduce((total,item)=>total+(item.price)*(item.quantity),0)

    return (
        <div className='min-h-screen bg-white'>
            <h1 className='text-2xl font-bold ml-3'>Shopping Cart</h1>
            <div className='grid-cols-1 lg:grid-cols-3 flex gap-2'>

                <div className='lg:col-span-2 space-y-3 '>
                    {cart.map((item) => (

                        <div key={item.id} className='bg-white shadow-lg rounded-xl ml-3  flex w-3xl'>
                            <img className=' rounded-xl w-30 h-30 mt-3' src={item.image} alt="" />
                            <div className='mt-3 ml-3'>
                                <h2 className='text-xl font-bold'>{item.name}</h2>
                                <p className='text-red-400 font-bold mt-3'>${(Number(item.price)*item.quantity).toFixed(2)}</p>
                                <div className='flex mt-3'> 
                                    <button onClick={()=>decrement(item.id)} className=' hover:bg-red-700  text-white rounded- bg-red-600 p-1'><TiMinus /></button>
                                    <p>{ item.quantity}</p>
                                    <button onClick={()=>increment(item.id)} className='hover:bg-blue-700 text-white rounded- bg-blue-600 p-1'><FaPlus /></button>
                                </div>
                            </div>
                            <button onClick={()=>removecart(item.id)} className=' bg-red-500 hover:bg-red-600 rounded-xl w-20 text-white ml-96 mt-25'>Remove</button>
                        </div>
                    ))}

                </div>


                <div className='lg:col-span-2 ml-10'>
                    <div className='bg-white shadow-lg rounded-lg  w-xl'>
                        <h1 className='font-bold text-center'>Order Summary </h1>
                        <div className='flex justify-around mt-2'>
                            <span className='font-medium'>Subtotal</span>
                            <span className='text-red-600 font-bold'>${subtotal}</span>
                        </div>
                        <div className='flex justify-around mt-2'>
                            <span className='font-medium'>Delivery</span>
                            <span className='text-red-300 font-bold'>$ 1.00</span>
                        </div>
                        <button className='bg-blue-500 font-medium mt-2 hover:bg-blue-600 text-white w-25 rounded-full text-center mb-2 ml-2 '>Check Out</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Cartpage
