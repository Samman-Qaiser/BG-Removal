import React, { useState } from 'react';
import img_with from '/image_w_bg.png';
import img_without from '/image_wo_bg.png';

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSlider = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <>
    <div className="relative py-16 px-4 bg-gray-50">
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0  w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div> */}
           <div className="absolute top-0 right-0 w-122 h-122 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000"></div>
      <h1 className="text-[#404040] text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto leading-tight mb-12">
        Remove Background With High Quality and Accuracy
      </h1>

      <div className="relative h-[80vh] max-w-2xl mx-auto w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
        {/* Original Image with Background */}
        <img
          src={img_with}
          alt="With Background"
          className="absolute top-0 left-0 w-full h-full object-fit"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        />

        {/* Image without Background */}
        <img
          src={img_without}
          alt="Without Background"
          className="absolute top-0 left-0 w-full h-full object-fit"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          }}
        />

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSlider}
          id='slider'
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 z-10 cursor-pointer accent-blue-600"
        />
      </div>
    </div>

    </>
  );
};

export default BgSlider;
