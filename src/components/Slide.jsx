import React, { useEffect, useState } from 'react'
const slides = [
    { image: "https://i.pinimg.com/736x/79/a3/ee/79a3ee7a2116d50a16d84eef280a5399.jpg" },
    { image: "https://i.pinimg.com/736x/5f/21/24/5f2124ee766032d850899008ada7a85c.jpg" },
    { image: "https://i.pinimg.com/736x/9a/4d/d4/9a4dd42feb643cd41aca0d1d053edf65.jpg" },


  ];
function Slide() {
const [current,setCurrent]=useState(0)
useEffect(()=>{
  const time=setInterval(()=>{
    setCurrent((pre)=>{
      if(pre===slides.length-1){
        return 0;
      }
      return pre+1;
    })
  },9000)
  return ()=>clearInterval(time)
})
  
  return (
    <div className='w-full h-full rounded-xl mt-10 flex justify-center align-items-center'>
      <img className=' '   src={slides[current].image} alt="" />

    </div>
  )
}

export default Slide
