import React, { useContext } from 'react'
import imgWithBg from '/image_w_bg.png'
import imgWithoutBg from '/bg_layer.png'
import arrow from '/upload_btn_icon.svg'
import { Download } from 'lucide-react';
import { AppContext } from '../context/AppContext';
const ResultPage = () => {
  const {img,removeBg,resultimg}= useContext(AppContext)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-white to-gray-100">
      {/* Heading */}
      <h2 className="text-lg text-gray-600 mb-4 font-semibold">Here’s your processed image:</h2>

      {/* Image Display */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-white shadow-xl rounded-xl p-6 md:p-10 w-full max-w-5xl">
        {/* Left: With background */}
        <div className="flex-1 flex flex-col items-center ">
          <h3 className="text-sm text-gray-500 mb-2">Original Image</h3>
   <img
  src={typeof img === 'string' ? img : (img instanceof File ? URL.createObjectURL(img) : '')}
  alt="With Background"
  className="rounded-md w-full h-auto object-fit border"
/>

        </div>

        {/* Right: Without background */}
<div
  className="flex-1 flex flex-col items-center  bg-fit bg-center "

>          <h3 className="text-sm text-gray-500 mb-2">Background Removed</h3>
          <img   src={resultimg || imgWithoutBg} alt="Without Background" className="rounded-md  w-full h-auto  object-contain border checkerboard" />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
      
         <div>
          {/* Hidden File Input */}
          <input
            id="uploadImage"
            type="file"
            accept="image/*"
            onChange={(e) => removeBg(e.target.files[0])}
            hidden
          />
        
          {/* Label acts as the visible button */}
          <label
            htmlFor="uploadImage"
            className="px-6 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2 duration-200"
          >
            <img src={arrow} className="w-4" alt="Arrow" />
            Upload Another Image
          </label>
        </div>
        <a
  href={resultimg}
  download="background_removed.png"
  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 cursor-pointer flex items-center hover:to-pink-600 text-white font-medium rounded-lg transition gap-2 duration-200"
>
  <Download /> Download Image
</a>

      </div>
    </div>
  )
}

export default ResultPage
