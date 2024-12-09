import Image from "next/image";



export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="w-full h-[700px] bg-[#F2F0FF] flex sm:flex-col lg:flex-row mt-4 lg:px-0">
          {/* Left Side */}
          <div className="relative flex-shrink-0 ">
            <div className="flex justify-center lg:justify-start mt-[75px] ">
              <Image alt="" src="/light.png" width={200} height={200} className="lg:w-[387px] lg:h-[387px]" />
            </div>
            <div className="relative top-10 left-[50%] lg:top-40 lg:left-[130px]">
              <Image src="/Ellipse 62.png" alt="" width={15} height={15} />
            </div>
          </div>
          {/* Middle Side */}
          <div className="relative lg:top-52 lg:mx-4 text-center lg:text-left lg:-left-14">
            <div className="font-lato font-[300] lg:w-[644px] size-4 lg:leading-7">
              <h4 className="w-[230px] h-[28px] text-[#FB2E86]">Best Furniture For Your Castle....</h4>
              <h1 className="w-[500px] h-[78px] text-2xl lg:text-4xl font-josefin font-[700] text-black leadimg-{81.98px] mt-4">New Furniture Collection Trends in 2020</h1>
              <p className="w-[450px] h-[56px] text-[#8A8FB9] mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
            </div>
            <div>
              <button className="w-full lg:w-[163px] h-[50px] bg-[#FB2E86] border-[2px] font-josefin size-[17px] leading-[19.92px] text-white mt-[250px]">Shop Now</button>
            </div>
          </div>
          <div className="flex absolute top-[750px] left-[660px]">
            <div className="rotate-45">
              <Image src="/Rectangle 96.png" alt="" width={10} height={10} />
            </div>
            <div className="rotate-45">
              <Image src="/Rectangle 98.png" alt="" width={10} height={10} />
            </div>
            <div className="rotate-45">
              <Image src="/Rectangle 98.png" alt="" width={10} height={10} />
            </div>
          </div>
          {/* Right Side */}
          <div className="mr-20">
            <div className="relative mt-32 flex-shrink-0 ">
              <div className="relative lg:w-[450px] lg:h-[450px] right-56 top-10">
                <Image src="/sofa.png" alt="" width={450} height={450} />
              </div>
              <div className="absolute top-3 lg:top-16 right-24">
                <h3 className="absolute font-josefin font-bold text-lg lg:text-2xl -top-10 mx-auto text-white ml-6">50% <br />off</h3>
                <Image src="/Vector 14.png" alt="" width={100} height={100} className="mt-4 lg:-mt-16 lg:mr-32" />
              </div>
              <div className="w-[766px] h-[569px] absolute -top-1 -right-28">
                <Image src="/Ellipse 61.png" alt="" width={450} height={450} />
              </div>
              <div className="w-[684px] h-[684px] absolute top-10 right-0">
                <Image src="/Ellipse 61.png" alt="" width={450} height={450} />
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Featured Products */}
      <div className="px-4 md:px-8 lg:px-16">
        {/* Featured Product Section */}
        <section className="text-center my-8">
          <h2 className="text-2xl font-bold text-black mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Products Cards */}
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair 1.png" alt="" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Product</h3>
              <p className="text-gray-500 text-sm mt-2">$120.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Add to card</button>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair 2.png" alt="" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Product</h3>
              <p className="text-gray-500 text-sm mt-2">$120.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Add to card</button>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair 3.png" alt="" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-4">Product</h3>
              <p className="text-gray-500 text-sm mt-2">$120.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Add to card</button>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair 4.png" alt="" width={300} height={300} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-8">Product</h3>
              <p className="text-gray-500 text-sm mt-2">$120.00</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Add to card</button>
            </div>
          </div>
          <div className="w-[100px] flex mt-[20px] lg:mt-[50px] ml-[250px] lg:ml-[600px] gap-2 bg-yellow-200 border border-yellow-500">
            <div><Image src="/Rectangle 1.png" alt="" width={24} height={4} /></div>
            <div><Image src="/Rectangle 2.png" alt="" width={16} height={4} /> </div>
            <div><Image src="/Rectangle 3.png" alt="" width={16} height={4} /> </div>
            <div><Image src="/Rectangle 4.png" alt="" width={16} height={4} /></div>
          </div>
        </section>
        {/*Latest Products Section  */}
        <section className="text-center my-8">
          <h2 className="text-2xl font-bold text-black mb-6">Latest Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Products Card */}
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
              <Image src="/sofa1.png" alt="" width={200} height={200} className="mx-auto" />

              <div className="flex mt-4">              
                 <p className="text-lg font-semibold mt-4 text-blue-800">Comfort Handy Craft</p>
                <div className="flex relative left-20 ">
                  <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
               </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
              <Image src="/chair1.png" alt="" width={200} height={200} className="mx-auto" />

              <div className="flex mt-4">                
                <p className="text-lg font-semibold mt-4 text-blue-800">Comfort Handy Craft</p>
                <div className="flex relative left-20 ">
                  <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
               </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
              <Image src="/chair 1.png" alt="" width={200} height={200} className="mx-auto" />
              <div className="flex mt-4">
                <p className="text-lg font-semibold mt-4 text-blue-800">Comfort Handy Craft</p>
                <div className="flex relative left-20 ">
                  <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
               </div>
            </div>

            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
              <Image src="/chair2.png" alt="" width={200} height={200} className="mx-auto" />

              <div className="flex mt-4">                
                <p className="text-lg font-semibold mt-4 text-blue-800">Comfort Handy Craft</p>
                <div className="flex relative left-20 ">
                  <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
               </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
              <Image src="/chair3.png" alt="" width={200} height={200} className="mx-auto" />

              <div className="flex mt-4">                
                <p className="text-lg font-semibold mt-4 text-blue-800">Comfort Handy Craft</p>
                <div className="flex relative left-20 ">
                  <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
               </div>
            </div>
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white" >
              <Image src="/chair 4.png" alt="" width={200} height={200} className="mx-auto" />
              <div className="flex mt-4">
                <p className="text-lg font-semibold mt-4 text-blue-800">Comfort Handy Craft</p>
                <div className="flex relative left-20 ">
                  <p className="text-blue-900 text-sm mt-6">$42.00</p>
                <p className="text-pink-500 py-2 px-4 rounded mt-4 line-through">$65.00</p>
              </div>
               </div>
            </div>

          </div>
        </section>
        {/* Shopex Offers */}
        <section className="text-center my-8">
          <h2 className="text-2xl font-bold text-black mb-6">What Shopex Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/free-delivery.png" alt="" width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-5">24/7 Support</h3>
              <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/cashback.png" alt="" width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-5">24/7 Support</h3>
              <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/quality.png" alt="" width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-4">24/7 Support</h3>
              <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
            <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/24hours.png" alt="" width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-5">24/7 Support</h3>
              <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
        </section>
        {/* Unique Features Section */}
        <section className="text-center my-8 ">
          <div className="flex flex-col lg:flex-row items-center ml-40">
            <Image src="/sofa2.png" alt="" width={400} height={400} className="mb-4 lg:mb-0 lg:mr-6" />
            <div className="text-left">
              <h2 className="w-[400px] h-[92px] text-2xl font-josefin font-bold text-[#151875] size-[35px] leading-[46.2px] mb-6">
                Unique Features Of Latest & Trending Products
              </h2>
              <div className="flex gap-3 ">
                <Image src="/Ellipse 62.png" alt="" width={11} height={11} className="h-[11px] mt-7" />
                <p className="w-[427px] h-[21px] mt-6 font-lato font-[500] size-4 leading-[21.12px] text-[#ACABC3]">All frames constructed with hardwood solids and laminates</p>
              </div>
              <div className="flex gap-3">
                <Image src="/Ellipse 66.png" alt="" width={11} height={11} className="h-[11px] mt-7" />
                <p className="w-[461px] h-[56px] mt-4 font-lato font-[500] size-4 leading-[28px] text-[#ACABC3]">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
              </div>
              <div className="flex gap-3">
                <Image src="/Ellipse 67.png" alt="" width={11} height={11} className="h-[11px] mt-6" />
                <p className="w-[352px] h-[21px] mt-4 font-lato font-[500] size-4 leading-[21.12px] text-[#ACABC3]">Arms, backs and seats are structurally reinforced</p>
              </div>
              <div className="flex">
                <button className="bg-[#FB2e86] mt-10 text-white py-2 px-6">Add To Cart</button>
                <div className="mt-10 mx-6">
                  <h3 className="w-[150px] h-[14px] font-josefin size-4 leading-[16.41px] text-[#151875]">B&B Italian Sofa</h3>
                  <h3 className="w-[44px] h-[17px] font-lato font-[400] size-4 leading-[16.8px] text-[#151875] mt-3">$32.00</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Trending Products */}
        <section className="text-center my-8">
          <h2 className="text-2xl font-bold text-[#151875] mb-6">Trending Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair5.png" alt="" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-5">Cantilever chair</h3>
              <div className="flex items-center ml-4 mt-4">
                <p className="w-[43px] h-[14px] font-josefin size-[14px] leading-[14px] items-center  text-[#151875] ml-5">$26.00</p>
                <p className="w-[37px] h-[12px] font-josefin font-[400] size-[12px] leading-[12px] items-center text-[#1518754D] ml-4 line-through">$42.00</p>
              </div>

            </div>
            <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair6.png" alt="" width={200} height={200} className="mx-auto" />
              <h3 className="text-lg font-semibold mt-5">Cantilever chair</h3>
              <div className="flex items-center ml-4 mt-4">
                <p className="w-[43px] h-[14px] font-josefin size-[14px] leading-[14px] items-center  text-[#151875] ml-5">$26.00</p>
                <p className="w-[37px] h-[12px] font-josefin font-[400] size-[12px] leading-[12px] items-center text-[#1518754D] ml-4 line-through">$42.00</p>
              </div>

            </div>
            <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair7.png" alt="" width={250} height={250} className="mx-auto  w-[300px] h-[200px]" />
              <h3 className="text-lg font-semibold mt-5">Cantilever chair</h3>
              <div className="flex items-center ml-4 mt-4">
                <p className="w-[43px] h-[14px] font-josefin size-[14px] leading-[14px] items-center text-[#151875] ml-5">$26.00</p>
                <p className="w-[37px] h-[12px] font-josefin font-[400] size-[12px] leading-[12px] items-center text-[#1518754D] ml-4 line-through">$42.00</p>
              </div>

            </div>
            <div className="p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
              <Image src="/chair3.png" alt="" width={200} height={200} className="mx-auto  w-[300px] h-[200px]" />
              <h3 className="text-lg font-semibold mt-5">Cantilever chair</h3>
              <div className="flex items-center ml-4 mt-4">
                <p className="w-[43px] h-[14px] font-josefin size-[14px] leading-[14px] items-center  text-[#151875] ml-5">$26.00</p>
                <p className="w-[37px] h-[12px] font-josefin font-[400] size-[12px] leading-[12px] items-center text-[#1518754D] ml-4 line-through">$42.00</p>
              </div>

            </div>
          </div>
        </section>

        <div className="px-2 md:px-4 lg:px-8 ">
          {/* Discount Section */}
          <section className="my-8 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Side */}
              <div className="w-[500px] p-6 bg-pink-100 rounded-lg shadow  flex flex-col -ml-10">
                <h3 className="w-[269px] h-[26px] text-2xl  mt-6 text-[#151875] font-josefin font-[600] leading-[26px] text-center">23% off on all products</h3>
                <p className="w-[74px] h-[19px] text-pink-500  mt-2 font-lato font-[600] leading-[19.2px] text-center">Shop Now</p>
                <div className="mt-4">
                  <Image src="/clock.png" alt="Discount Product" width={300} height={200} className="mx-auto" />
                </div>
              </div>

              {/* Right Side */}
              <div className="w-[700px] grid grid-cols-1 md:grid-cols-2 gap-4 mr-[96px] -ml-24">
                <div className="p-6 bg-purple-100 rounded-lg shadow flex flex-col">
                  <h3 className="w-[269px] h-[26px] mt-10 text-2xl text-[#151875] font-josefin font-[600] size-[26px] leading-[26px] text-center">23% off in all products</h3>
                  <p className="w-[150px] h-[19px] text-pink-500  mt-2 font-lato font-[600] leading-[19.2px] text-center">View Collection</p>
                  <div>
                    <Image src="/table.png" alt="Discount Product" width={300} height={200} />
                  </div>
                </div>
                <div className="rounded-lg shadow flex">
                  <div className="w-[700px] grid grid-cols-1 gap-6">
                    <div className="bg-[#F5F6F8] p-4 rounded-md flex items-center justify-center">
                      <Image src="/chair10.png" alt="" width={100} height={71} />
                    </div>
                    <div className="bg-[#F5F6F8] p-4 rounded-md flex items-center justify-center">
                      <Image src="/chair9.png" alt="" width={100} height={71} />
                    </div>
                    <div className="bg-[#F5F6F8] p-4 rounded-md flex items-center justify-center">
                      <Image src="/chair8.png" alt="" width={100} height={71} />
                    </div>
                  </div>
                  <div className="w-[700px] ml-3 grid grid-row-1 md:grid-rows-2 gap-6">
                    <div className="mt-8">
                      <p className="w-[200px] h-[16px] font-josefin size-4 leading-[18.75px] items-center text-[#151875] text-xl ">Executive Seat chair</p>
                      <p className="w-[37px] h-[12px] font-josefin font-[400] size-3 leading-3 items-center text-[#151875] mt-4 line-through">$32.00</p>

                    </div>
                    <div className="mt-4">
                      <p className="w-[200px] h-[16px] font-josefin size-4 leading-[18.75px] items-center text-[#151875] text-xl ">Executive Seat chair</p>
                      <p className="w-[37px] h-[12px] font-josefin font-[400] size-3 leading-3 items-center text-[#151875] mt-4 line-through">$32.00</p>

                    </div>
                    <div className="mb-4">
                      <p className="w-[200px] h-[16px] font-josefin size-4 leading-[18.75px] items-center text-[#151875] text-xl ">Executive Seat chair</p>
                      <p className="w-[37px] h-[12px] font-josefin font-[400] size-3 leading-3 items-center text-[#151875] mt-4 line-through">$32.00</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Discount Item Section */}
          <section className="my-8 text-center">
            <h2 className="w-[277px] h-[42px] font-josefin size-[42px] leading-[49.22px] text-3xl font-bold text-[#151875] mb-4 mx-auto">Discount Item</h2>
            <div className="flex justify-center space-x-4 mb-6 ">
              <button className="text-pink-500 underline underline-offset-2">Wood Chair</button>
              <Image src="/Ellipse 62.png" alt="" width={10} height={10} className="w-[10px] h-[10px] mt-[6px]" />
              <button className="text-gray-500">Plastic Chair</button>
              <button className="text-gray-500">Sofa Collection</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Side */}
              <div className="-ml-36">
                <h3 className="text-2xl font-bold text-blue-950">
                  20% Discount Of All Products
                </h3>
                <p className="text-sm text-pink-500 mt-4 mr-52">
                  Eames Sofa Compact.
                </p>
                <p className="w-[350px] text-center text-sm text-gray-500 mt-4 ml-44">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Eu eget feugiat habitasse nec, bibendum
                  condimentum.</p>
                <div className="text-gray-500 text-sm mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="ml-44 w-[200px]">✓ Material expose like metals</div>
                  <div className="ml-44 w-[200px]">✓ Simple neutral colours.</div>
                  <div className="ml-44 w-[230px]">✓ Clear lines and geomatric figures</div>
                  <div className="ml-48 w-[200px]">✓ Material expose like metals</div>
                </div>
                <button className="mt-10 px-10 py-3 bg-pink-600 text-white rounded font-josefin mr-48">
                  Shop Now
                </button>
              </div>
              {/* Right Side */}
              <div className="flex justify-center relative">
                <Image src="/Ellipse 61.png" alt="" width={350} height={350} className="absolute bottom-[60px]" />
                <Image src="/turtuga.png" alt="Discount Chair" width={550} height={300} className="relative" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
