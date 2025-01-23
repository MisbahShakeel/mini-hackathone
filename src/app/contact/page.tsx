import { FaCircle } from "react-icons/fa";
import Images from "../components/Logo";
import Image from "next/image";

export default function Contact() {
  return (
    <section className=" py-8">
      <div className="container">
       <div className="bg-[#F6F5FF] lg:w-[1330px]">
        <div className="relative top-24 h-[250px] mb-6 mx-16 lg:mx-44 px-4">
          <h2 className="w-[200px] text-xl lg:text-2xl font-bold text-[#101750] font-josefin">Contact Us</h2>
          <p className="flex  flex-col md:flex-row lg:flex-row mt-4 text-sm text-gray-500 font-lato text-center gap-2">
            Home <FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2 ml-1 mr-1 hidden" /><span>Pages</span><FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2  lg:ml-1 mr-1 hidden" /> <span className="text-pink-700">Contact us</span>
          </p>
        </div>
        </div>
        {/* Information section */}
        <div className="flex flex-col md:flex-row lg:flex-row mx-16 lg:mx-44 w-[1191px] h-[490px]">
            {/* left side */}
            <div>
                <div>
                    <h1 className="text-2xl font-bold mt-20 font-josefin size-9 leading-[48px] text-[#151875] w-[522px] h-[44px]">Information About us</h1>
                    <p className="font-lato font-[600] size-4 leading-[25.6px] text-[#8A8FB9] text-sm w-[300px] h-[120px] lg:w-[550px] lg:h-[49px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <div className="flex flex-row gap-4 mt-10">
                        <FaCircle className="w-[20px] h-[20px] text-[#1c21a1] "/>
                        <FaCircle className="w-[20px] h-[20px] text-[#dd3a9f] "/>
                        <FaCircle className="w-[20px] h-[20px] text-[#3ac1d3] "/>
                    </div>
                </div>
                <div className="mt-4 lg:mt-28">
                    <h1 className="text-2xl font-bold  font-josefin size-9 leading-[48px] text-[#151875] w-[522px] h-[44px]">Get In Touch</h1>
                    <p className="font-lato font-[600] size-4 leading-[25.6px] text-[#8A8FB9] text-sm w-[300px] h-[100] lg:w-[550px] lg:h-[49px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                </div>
            </div>
            {/* right side */}
            <div>
            <h1 className="text-2xl font-bold lg:ml-16 lg:mt-20 font-josefin size-9 leading-[48px] text-[#151875] w-[522px] h-[44px]">Contact Way</h1>
            <div className="lg:ml-16 lg:gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
             <div className="mt-6">
             <FaCircle className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] text-[#1c21a1] "/>
             <p className="font-sans text-sm lg:text-lg lg:font-lato lg:font-[600] size-4 leading-[25.6px] text-[#8A8FB9] w-[200px] h-[26px] relative  bottom-10 lg:bottom-12 left-14">Tel: 877-67-88-99</p>
             <p className="font-sans text-sm lg:font-lato lg:font-[600] size-4 leading-[25.6px] text-[#8A8FB9] w-[272px] h-[26px] relative bottom-12 lg:bottom-14 left-14">E-Mail: shop@store.com</p>
             </div>
             <div className="lg:mt-6">
             <FaCircle className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] text-[#e9409d] "/>
             <p className="font-sans text-sm lg:font-lato lg:font-[600] size-4 leading-[25.6px] text-[#8A8FB9] w-[150px] h-[26px] relative  bottom-10 lg:bottom-12 left-14">Support Forum</p>
             <p className="font-sans text-sm lg:font-lato lg:font-[600] size-4 leading-[25.6px] text-[#8A8FB9] w-[96px] h-[26px] relative bottom-12 lg:bottom-14 left-14">For over 24hr</p>
             </div>
             <div>
             <FaCircle className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] text-[#f8a647] "/>
             <p className="font-sans text-sm lg:font-lato lg:font-[600] size-4 leading-[25.6px] text-[#8A8FB9] w-[165px] h-[26px] relative bottom-10 lg:bottom-12 left-14">20 Margaret st, London</p>
             <p className="font-sans text-sm lg:font-lato lg:font-[600] size-4 leading-[25.6px] text-[#8A8FB9] w-[187px] h-[26px] relative bottom-12 lg:bottom-14 left-14">Great britain, 3NM98-LK</p>
             </div>
             <div>
             <FaCircle className="w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] text-[#3ee63e] "/>
             <p className="font-sans text-sm lg:font-lato lg:font-[600] size-4 leading-[25.6px] text-[#8A8FB9] w-[260px] h-[26px] relative bottom-10 lg:bottom-12 left-14">Free standard shipping</p>
             <p className="font-sans text-sm lg:font-lato lg:font-[600] size-4 leading-[25.6px] text-[#8A8FB9] w-[91px] h-[26px] relative bottom-12 lg:bottom-14 left-14">on all orders.</p>
             </div>
            </div>
            </div>
           
        </div>
        <div className="flex flex-col md:flex-row1 lg:flex-row mx-14 lg:mx-44 mt-96 md:mt-10 lg:mt-10">
              <div>
                <form className="w-[500px] h-[400px]">
                  <div className="w-[200px] h-[40px] border-2 border-gray-100">
                  <input type="text" placeholder="Your Name" required  className="ml-2 mt-2 focus:outline-none"/>
                  </div>
                  <div  className="w-[200px] h-[40px] border-2 border-gray-100 mt-2 md:relative lg:relative bottom-10 left-[250px]">
                  <input type="text" placeholder="Your Email" required className="ml-2 mt-2 focus:outline-none"/>
                  </div>
                  <div  className="w-[250px] h-[60px] md:w-[450px] md:h-[40px] lg:w-[450px] lg:h-[40px] border-2 border-gray-100 mt-2 lg:mt-0">
                  <input type="text" placeholder="Subject" required className="ml-4 mt-4 md:ml-2 md:mt-2 lg:ml-2 lg:mt-2 focus:outline-none"/>
                  </div>
                  <div  className="w-[250px] h-[170px] md:w-[450px] md:h-[130px] lg:w-[450px] lg:h-[130px] mt-7 border-2 border-gray-100">
                  <input type="text" placeholder="Type Your Message" required className="ml-2 mt-4 focus:outline-none"/>
                  </div>
                <button className="text-white bg-pink-700 px-6 py-2 mt-4 md:mt-7 lg:mt-7"> Send Mail</button> 
                </form>
              </div>
              <div className="w-[500px] relative -bottom-16 lg:bottom-28 lg:left-20">
                <Image src="/bgImg.png" alt="" width={450} height={200} className="w-[300px] h-[300px] lg:w-[450px] lg:h-[500px]"/>
              </div>
            </div>
            <div className="mt-20 lg:mt-10 lg:mb-14">
              <Images />
            </div>
        </div>
    </section>
  );
}