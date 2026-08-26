import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Slide from '../components/Slide'
import { useCart } from '../context/Cartcontext'
//fetch stor API
function Homepage() {
    const [shose, setShoes] = useState([])

    const {addTocart}=useCart();

    useEffect(() => {
        fetch("../public/Data/Shose.json")
            .then((res) => res.json())
            .then((Data) => {
                setShoes(Data)
            }) 

    },[])


    return (
    //   
        <div className='ml-5 '>
             
            <Slide></Slide>
          
            <div className='grid grid-cols-4 py-10 gap-5 '>    

                {shose.map((sh) => (

                    <div className='max-w-xs border  'key={sh.id}>
                        <img  className=' h-90 object-cover w-full' src={sh.image} alt="" />
                        <h4 className='font-bold ml-20 line-clamp-1'>{sh.name}</h4>
                        <p className='ml-30 text-red-800'>${sh.price}</p>
                        <Link to={`/Products/${sh.id}`} className='bg-sky-800 text-white w-25 rounded-xl p-1 hover:bg-sky-900 ml-3' >View</Link>
                        <button onClick={()=>addTocart(sh)} className='bg-sky-800 text-white w-25 rounded-xl p-1 hover:bg-sky-900 ml-3'>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage 
