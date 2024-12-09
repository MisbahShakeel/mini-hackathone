import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

export default function Footer() {
    return (
      <footer className="w-full bg-gray-50 py-10 border-t border-grey-500">
        <div className="container ml-24 px-4">
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Column 1: Company Info */}
            <div>
              <h2 className="text-xl font-bold text-black">Hekto</h2>
              <div className="w-[450px] flex mt-4 ">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="px-4 py-2 border border-gray-300 rounded-l-lg text-sm"
                />
                <button className="w-[120px]  bg-pink-500 text-white text-sm">
                  Sign Up
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">Contact Info</p>
              <p className="w-[400px] text-sm text-gray-500">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
  
            {/* Column 2: Categories */}
            <div className="ml-28">
              <h3 className="text-lg font-bold text-black">Categories</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-sm text-gray-500">Laptops & Computers</li>
                <li className="text-sm text-gray-500">Cameras & Photography</li>
                <li className="text-sm text-gray-500">Smart Phones & Tablets</li>
                <li className="text-sm text-gray-500">Video Games & Consoles</li>
                <li className="text-sm text-gray-500">Waterproof Headphones</li>
              </ul>
            </div>
  
            {/* Column 3: Customer Care */}
            <div className="ml-10">
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
            <div>
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
          <div className="border-t border-grey-500 mt-10 pt-4 flex justify-between items-center mr-56">
            <p className="text-sm text-gray-500 ml-20">©Webecy - All Rights Reserved</p>
            <div className="flex space-x-2">
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white"><FaFacebookF className="mt-1 ml-1"/></span>
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white"><FaInstagram className="mt-1 ml-1"/></span>
              <span className="w-6 h-6 bg-blue-900 rounded-full text-white"><IoLogoTwitter className="mt-1 ml-1"/></span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  