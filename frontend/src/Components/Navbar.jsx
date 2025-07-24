import React, { useContext, useEffect, useState } from 'react';
import logo from '/logo.svg';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { AppContext } from '../context/AppContext';
import { CoinsIcon, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();
  const navigate = useNavigate();
  const { credits, getCredit, fname } = useContext(AppContext);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      getCredit();
    }
  }, [isSignedIn]);

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md relative">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logo} alt="Logo" className="w-auto h-8" />
      </div>

      {/* Desktop View */}
      {isSignedIn ? (
        <div className="hidden lg:flex items-center gap-4">
          <div
            onClick={() => navigate('/pricing')}
            className="px-3 py-1 rounded-full hover:shadow-lg cursor-pointer bg-zinc-100 text-sm items-center gap-2 flex shadow-inner"
          >
            <CoinsIcon className="text-yellow-400" /> {credits ?? 0} Credits
          </div>
          <div className="px-3 py-1 rounded-full bg-zinc-100 text-sm items-center gap-2 flex shadow-inner">
            Hi, {fname}
          </div>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300 ease-in-out"
        >
          Get Started
        </button>
      )}

      {/* Mobile Menu Toggle */}
      {isSignedIn && (
        <div className="lg:hidden">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="p-2 rounded-md border"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute right-4 top-16 w-60 bg-white rounded-md shadow-lg z-50 p-4 space-y-3">
              <div
                onClick={() => {
                  navigate('/pricing');
                  setShowDropdown(false);
                }}
                className="flex items-center gap-2 text-sm text-gray-800 cursor-pointer"
              >
                <CoinsIcon className="text-yellow-400" /> {credits ?? 0} Credits
              </div>
              <div className="text-sm text-gray-800">Hi, {fname}</div>
              <UserButton />
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
