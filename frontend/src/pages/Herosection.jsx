import React from 'react';
import img from '/header_img.png';
import arrow from '/upload_btn_icon.svg'
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Herosection = () => {
  const {removeBg}=useContext(AppContext)
  return (
    <section className="relative w-full px-6 py-20 bg-white overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-92 h-92 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto">
    
        <div className="  lg:w-[40%] sm:w-[100%]">
          <h1 className="text-[3rem] text-[#404040]  font-bold leading-tight ">
            Remove  the <br/> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500'>Background</span> from Images for free.
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Automatically remove backgrounds from images with one click. Clean. Fast. Reliable.
          </p>
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
    className="mt-6 w-[200px] bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2"
  >
    <img src={arrow} className="w-4" alt="Arrow" />
    Upload Image
  </label>
</div>

        
        </div>

        {/* Image */}
        <div className="lg:w-[40%] sm:w-[70%] mb-10 md:mb-0">
          <img src={img} alt="Hero" className="w-full max-w-md mx-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
