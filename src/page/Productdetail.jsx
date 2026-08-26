import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Productdetail() {
  const { id } = useParams();

  const [Products, setProduct] = useState([]);
  useEffect(() => {
    fetch("/Data/Shose.json")

      .then((res) => res.json())
      .then((data) => {   
        const foundProduct = data.find((item) => String(item.id) === String(id))

        setProduct(foundProduct)
      })



  }, [id])


  return (
    <div className='min-w-2xl bg-white mt-4 '>
      <div className='max-w-4xl bg-white shadow-lg m-auto'>
        <div className='grid shadow-sm md:grid-cols-2 '>
          <div>
            <img className='w-full h-full' src={Products.image} alt="" />
          </div>
          <div className='ml-2'>
            <h2 className='font-bold'>{Products.name}</h2>
            <p className='text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem molestiae omnis animi eveniet, aspernatur, ex neque necessitatibus sit aut minima dolor exercitationem magni vel deleniti tempore porro nesciunt? Doloribus, libero?</p>
            <p className='text-red-400'>${Products.price}</p>
            <div className='mt-2'>
              <Link className="bg-sky-800 text-white w-25 rounded- p-1 hover:bg-sky-900 mt-2">
                Add to cart
              </Link>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Productdetail
