import React from 'react'
import Herosection from './Herosection'
import Steps from '../Components/Steps'
import img from '/bg_layer.png'
import arrow from '/upload_btn_icon.svg'
import Testimonials from '../Components/Testimonial'
import BgSlider from '../Components/BgSlider'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export const Home = () => {
    const {removeBg}=useContext(AppContext)
  return (
    <div>
    <Herosection />
    <Steps />
    <BgSlider />

  
    <Testimonials />
     <div className='flex flex-col items-center justify-center'>
     <h2 className="lg:text-4xl  font-bold text-gray-700 mb-4 sm:text-xl md:text-xl">
       See the magic. Try now
        </h2>
          <label
            htmlFor="uploadImage"
            className="mt-6 w-[200px] bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2"
          >
            <img src={arrow} className="w-4" alt="Arrow" />
            Upload Image
          </label>
   </div>
    
    </div>
  )
}
