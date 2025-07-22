import React from 'react'
import imgWithBg from '/image_w_bg.png'
import imgWithoutBg from '/image_wo_bg.png'
import arrow from '/upload_btn_icon.svg'
import { Download } from 'lucide-react';
const ResultPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-white to-gray-100">
      {/* Heading */}
      <h2 className="text-lg text-gray-600 mb-4 font-semibold">Here’s your processed image:</h2>

      {/* Image Display */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 bg-white shadow-xl rounded-xl p-6 md:p-10 w-full max-w-5xl">
        {/* Left: With background */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-sm text-gray-500 mb-2">Original Image</h3>
          <img src={imgWithBg} alt="With Background" className="rounded-md w-full h-auto max-h-[400px] object-contain border" />
        </div>

        {/* Right: Without background */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-sm text-gray-500 mb-2">Background Removed</h3>
          <img src={imgWithoutBg} alt="Without Background" className="rounded-md w-full h-auto max-h-[400px] object-contain border checkerboard" />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition flex items-center gap-2 duration-200">
         <img src={arrow} className='w-4'/>  Upload Another Image
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 cursor-pointer flex items-center hover:to-pink-600 text-white font-medium rounded-lg transition gap-2 duration-200">
        <Download /> Download Image
        </button>
      </div>
    </div>
  )
}

export default ResultPage
