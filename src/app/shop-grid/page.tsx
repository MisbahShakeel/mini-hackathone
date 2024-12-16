import { FaCircle } from "react-icons/fa";
import Images from "../components/Images";

export default function Shop() {
    return (
      <section className=" bg-white py-8 mt-4">
        <div className="container mx-auto px-4">
          
          <div className="h-[150px] mb-6 mt-20 ml-[120px]">
            <h2 className="text-2xl font-bold text-black font-josefin">Shop Grid Default</h2>
            <p className="flex mt-4 text-sm text-gray-500 font-lato text-center">
              Home <FaCircle className="text-pink-700 w-[5px] h-[5px] mt-2 ml-1 mr-1"/> Pages <FaCircle className="text-pink-700 w-[5px] h-[5px] mt-2 ml-1 mr-1"/> <span className="text-pink-700">Shop Grid Default</span>
            </p>
          </div>
  
          
          <div className="flex flex-wrap items-center justify-between border-b pb-4 mb-6 ">
            <div className="mt-10 ml-[122px]">
            <h3 className="w-[398px] h-[22px] text-lg font-[700] text-black font-josefin">
              ECommerce Accessories & Fashion Items
            </h3>
            <p className="mt-2 font-lato font-[400] w-[230px] h-[14px] text-[#8A8FB9]">About 9,620 results (0.62 seconds)</p>
            </div>
            <div className="flex space-x-4 space-y-9">
              <div className="mt-9">
                <label className="w-[66px] h-[19px] font-lato font-[400] text-sm text-[#3F509E]">Per Page:</label>
                <select className="ml-2 border rounded px-2 py-1 text-sm">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-[#8A8FB9]">Sort By:</label>
                <select className="ml-2 border rounded px-2 py-1 text-sm">
                  <option>Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
              <div className="flex">
                <label className="text-sm text-[#8A8FB9] mt-1">View:</label>
                <div className="ml-2 border rounded px-12 py-1 text-sm">  
                </div>
              </div>
            </div>
          </div>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid1.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[136px] h-[18px] font-josefin font-bold mt-4 text-[#151875] ml-20">Vel elit euismod</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid2.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[250px] h-[18px] font-josefin font-bold mt-4 text-[#151875]">Ultricies condimentum imperdiet</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid3.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[180px] h-[18px] ml-9 font-josefin font-bold mt-4 text-[#151875]">Vitae suspendisse sed</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid4.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[170px] h-[18px] ml-9 font-josefin font-bold mt-4 text-[#151875]">Fusce pellentesque at</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid5.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[200px] h-[18px] ml-8 font-josefin font-bold mt-4 text-[#151875]">Vestibulum magna laoreet</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid6.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[180px] h-[18px]  ml-12 font-josefin font-bold mt-4 text-[#151875]">Sollicitudin amet orci</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid7.png" className="w-[150] h-48 ml-8 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[170px] h-[18px] ml-16 font-josefin font-bold mt-4 text-[#151875]">Ultrices mauris sit</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid8.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[240px] h-[18px] ml-4 font-josefin font-bold mt-4 text-[#151875]">Pellentesque condimentum ac</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid9.png" className="h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[196px] h-[18px] ml-12 font-josefin font-bold mt-4 text-[#151875]">Cras scelerisque velit</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid10.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[206px] h-[18px] ml-8 font-josefin font-bold mt-4 text-[#151875]">Lectus vulputate faucibus</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid11.png" className="w-[200] h-[200] ml-8 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[136px] h-[18px] ml-16 font-josefin font-bold mt-4 text-[#151875]">Purus risus, ut</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
              <div className="bg-[#F6F7FB] p-4 rounded shadow-md hover:shadow-lg"
              >
                <img src="/grid-12.png" className="w-full h-48 object-cover rounded-lg" />
                <h4 className="mt-4 text-md font-semibold text-gray-800">
                
                </h4>
                <div className="items-center space-x-2 mt-2">
                  <h1 className="w-[136px] h-[18px] ml-16 font-josefin font-bold mt-4 text-[#151875]">Vel elit euismod</h1>
                  <div className="flex mt-4 mb-0 gap-2 ml-4 justify-center">
                  <p className="text-pink-500 font-bold">$42.00</p>
                  <p className="text-gray-500 line-through">$26.00</p>
                </div>
                </div>
              </div>
          </div>
        </div>
        <div className="mt-20 mb-10">
        <Images/>
        </div>
      </section>
    );
  }