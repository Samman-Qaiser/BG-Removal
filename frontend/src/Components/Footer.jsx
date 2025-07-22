import React from 'react';
import logo from '/logo.svg';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
         <div className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="Logo" className=" w-[200px] h-auto mb-4" />
                
              </div>
          <p className="text-sm">
            Effortlessly remove image backgrounds using powerful AI.
            Fast, accurate, and free to use.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">Upload</li>
            <li className="hover:text-white cursor-pointer transition">How it Works</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <p className="text-sm">Email: support@aibgremover.com</p>
          <p className="text-sm mt-2">Location: Remote • Worldwide</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} AIBGRemover. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
