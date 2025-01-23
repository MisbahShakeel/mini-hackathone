import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

export default function Footer() {
    return (
      <footer className="w-[375px] md:w-full lg:w-full bg-[#EEEFFB] py-10 border-t border-grey-500">
        <div className="container  lg:ml-24 px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Column 1: Company Info */}
            <div>
              <h2 className="text-xl font-bold text-black ml-2">Hekto</h2>
              <div className="w-[250px] lg:w-[450px] flex mt-4 ">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="px-3 py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 border border-gray-300 rounded-l-lg text-sm"
                />
                <button className="w-[60px] md:w-[80px] lg:w-[120px]  bg-pink-500 text-white text-sm">
                  Sign Up
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">Contact Info</p>
              <p className="w-[300px] md:w-[300px] lg:w-[400px] text-sm text-gray-500">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
  
            {/* Column 2: Categories */}
            <div className="md:ml-40 lg:ml-28">
              <h3 className="text-lg font-bold text-black">Categories</h3>
              <ul className="mt-4 space-y-2 md:w-[100px]">
                <li className="text-sm text-gray-500">Laptops & Computers</li>
                <li className="text-sm text-gray-500">Cameras & Photography</li>
                <li className="text-sm text-gray-500">Smart Phones & Tablets</li>
                <li className="text-sm text-gray-500">Video Games & Consoles</li>
                <li className="text-sm text-gray-500">Waterproof Headphones</li>
              </ul>
            </div>
  
            {/* Column 3: Customer Care */}
            <div className="md:ml-32 lg:ml-10">
              <h3 className="text-lg font-bold text-black ">Customer Care</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-500">My Account</li>
                <li className="text-sm text-gray-500">Discount</li>
                <li className="text-sm text-gray-500">Returns</li>
                <li className="text-sm text-gray-500">Orders History</li>
                <li className="text-sm text-gray-500">Order Tracking</li>
              </ul>
            </div>
  
            {/* Column 4: Pages */}
            <div className="md:ml-20">
              <h3 className="text-lg font-bold text-black">Pages</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-500">Blog</li>
                <li className="text-sm text-gray-500">Browse the Shop</li>
                <li className="text-sm text-gray-500">Category</li>
                <li className="text-sm text-gray-500">Pre-Built Pages</li>
                <li className="text-sm text-gray-500">Visual Composer</li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="bg-[#E7E4F8] w-[360px] sm:w-[500px] md:w-[650px] lg:w-[1350px] border-t border-grey-500 mt-12 mb-20 md:mt-10 md:mb-0 lg:mt-10 lg:mb-0 pt-4 flex justify-between items-center -ml-3 lg:-ml-32">
            <p className="text-sm text-gray-500 lg:ml-20">©Webecy - All Rights Reserved</p>
            <div className="flex space-x-2 lg:mr-56">
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white"><FaFacebookF className="mt-1 ml-1"/></span>
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white"><FaInstagram className="mt-1 ml-1"/></span>
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white"><IoLogoTwitter className="mt-1 ml-1"/></span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  