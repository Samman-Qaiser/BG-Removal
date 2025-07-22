import React from 'react';
import img from '/header_img.png';
import arrow from '/upload_btn_icon.svg'
const Herosection = () => {
  return (
    <section className="relative w-full px-6 py-20 bg-white overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-0 left-0 w-92 h-92 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      {/* <div className="absolute top-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0  w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
           <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div> */}

      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl mx-auto">
        {/* Text content */}
        <div className="  w-[40%]">
          <h1 className="text-[3rem] text-[#404040]  font-bold leading-tight ">
            Remove  the <br/> <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500'>Background</span> from Images for free.
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-medium">
            Automatically remove backgrounds from images with one click. Clean. Fast. Reliable.
          </p>
          <button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2">
         <img src={arrow} className='w-4'/> Upload Image
          </button>
        </div>

        {/* Image */}
        <div className="w-[40%] mb-10 md:mb-0">
          <img src={img} alt="Hero" className="w-full max-w-md mx-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
