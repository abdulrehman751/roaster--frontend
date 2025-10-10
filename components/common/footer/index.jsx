import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
       
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-bold text-white mr-2">ROASTAR</h2>
              <div className="w-6 h-6 text-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-white mb-6">THE WHOLE PACKAGE</p>
            
            <div className="flex space-x-4 mb-6">
              <div className="w-8 h-8 border border-white rounded flex items-center justify-center">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-8 h-8 border border-white rounded flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="w-8 h-8 border border-white rounded flex items-center justify-center">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span className="text-sm">866-516-7247</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span className="text-sm">info@roastar.com</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm">chat with us</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">NEWSLETTER SIGN UP</h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter Email Address*"
                className="w-full px-3 py-2 rounded-md bg-transparent border border-white text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="w-[60%] px-3 py-2 rounded-md border border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Sign up
              </button>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">QUICK LINKS</h3>
            <div className="space-y-4 font-bold ">
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Contact Us
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Careers
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Trade Show Calendar
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Credit Application Request
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">BORING STUFF</h3>
            <div className="space-y-4 font-bold ">
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Terms & Conditions
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Shipping Policy
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Refund & Return Policy
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Cookie Consent
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                US State Sales Tax
              </a>
              <a href="#" className="block text-sm text-white underline hover:text-gray-300 transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>

         
        </div>
        <div className="mt-8 pt-6  ">
          <div className="flex items-center mb-4 md:mb-0 justify-center text-center">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-xs font-bold">CO</span>
            </div>
            <span className="text-sm text-white ">Copyright 2025 Roastar, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;