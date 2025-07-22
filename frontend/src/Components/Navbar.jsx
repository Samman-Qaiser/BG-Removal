import React from 'react';
import logo from '/logo.svg'; // Make sure the path is correct
import { useClerk, UserButton,useUser } from '@clerk/clerk-react';
import { useUserContext } from '@clerk/shared/react/index';

const Navbar = () => {
  const {openSignIn}=useClerk()
  const {isSignedIn,user}=useUser()
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="Logo" className=" w-full h-auto" />
        
      </div>
      {isSignedIn ? (<div>
        <UserButton/>
      </div>):(  <button onClick={()=>openSignIn({})} className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out cursor-pointer flex items-center gap-2">
        Get Started
      </button>

      )
    
    }

   
    </nav>
  );
};

export default Navbar;
