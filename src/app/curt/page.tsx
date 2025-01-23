import { FaCircle } from "react-icons/fa";

export default function Curt () {
    return (
        <>
         <section className=" py-8 mt-4">
              <div className="container">
               <div className="bg-[#F6F5FF] lg:w-[1330px]">
               <div className="relative top-24 h-[250px] mb-6 mx-16 lg:mx-36 px-4">
                  <h2 className="w-[200px] text-xl lg:text-2xl font-bold text-[#101750] font-josefin">Shopping Curt</h2>
                  <p className="flex  flex-col md:flex-row lg:flex-row mt-4 text-sm text-gray-500 font-lato text-center gap-2">
                    Home <FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2 ml-1 mr-1 hidden sm:flex" /><span>Pages</span><FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2  lg:ml-1 mr-1 hidden sm:flex" /> <span className="text-pink-700">shopping curt</span>
                  </p>
                </div>
                </div>
                <div className="container p-6 mx-36">
                    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 w-[1000px] text-blue-900">
                        <div className="md:col-span-2">
                       <div className="flex font-bold gap-6 ml-4 text-2xl font-lato">
                        <h3>Product</h3>
                        <h3 className="ml-44">Price</h3>
                        <h3 className="ml-10">Quantity</h3>
                        <h3 className="ml-10">Total</h3>
                        <h3 className="ml-20">CartTotals</h3>
                         </div>
                       
                        <div className="bg-white shadow-md rounded-lg p-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center border-b py-4"
                >
                  <div className="flex items-center">
                    <img
                      src="/handBag.png"
                      alt="product"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="ml-4">
                      <p className="font-semibold">Product Name</p>
                      <p className="text-sm text-gray-500">Color: Brown</p>
                      <p className="text-sm text-gray-500">Size: XL</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-lg">$32.00</p>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="w-16 p-2 border rounded-md text-center"
                      defaultValue={1}
                    />
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-lg">$219.00</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                Update Cart
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-md">
                Clear Cart
              </button>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-gray-200 shadow-md rounded-lg p-6 mb-6">
              
              <div className="flex justify-between mb-2 ">
                <span>Subtotal:</span>
                <span className="font-semibold">$219.00</span>
              </div>
              <br/>
              <div className="flex justify-between mb-4">
                <span>Total:</span>
                <span className="font-semibold">$325.00</span>
              </div>
              <p className="text-gray-300 text-sm mb-2">Shipping & taxes calculated at checkout</p>
              <button className="w-full bg-green-500 text-white py-2 rounded-md">
                Proceed To Checkout
              </button>
            </div>
            <div className="bg-gray-100 shadow-md rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Calculate Shipping</h2>
              <input
                type="text"
                placeholder="Bangladesh"
                className="w-full p-2 border rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="Mirpur Dhaka - 1200"
                className="w-full p-2 border rounded-md mb-4"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full p-2 border rounded-md mb-6"
              />
              <button className="w-full bg-pink-500 text-white py-2 rounded-md">
                Calculate Shipping
              </button>
            </div>
                        </div>
                    </div>
                </div>
                </div>
                </section>
        </>
    )
}