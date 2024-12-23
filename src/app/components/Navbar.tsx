import Link from "next/link";
import { FaAngleDown, FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
        <nav className="bg-white mt-4 fixed w-full z-50">
            <div className="w-[885px] sm:w-[700px] md:w-[1000px] lg:w-[1330px] sm:mx-10 md:mx-20 lg:mx-32 px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="flex justify-between  items-center h-[60px]">
                    <div>
                        <h1 className="font-josefin font-bold text-2xl text-black sm:mr-3 md:mr-4">Hekto</h1>
                    </div>
                    <div>
                        <ul className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-10 font-lato text-black font-medium ml-2 sm:ml-0">
                            <li className="text-pink-500 flex"><Link href="/" className="lg:ml-16">Home </Link><span className="mt-[5px]"><FaAngleDown /></span>  </li>
                            <li><Link href="/shop-list" 
                            >Pages</Link></li>
                            <li><Link href="/product" 
                            >Product</Link></li>
                            <li><Link href="/blog" 
                            >Blog</Link></li>
                            <li><Link href="/shop-grid" 
                            >Shop</Link></li>
                            <li><Link href="/contact" 
                            >Contact</Link></li>

                        </ul>
                    </div>
                    <div className="flex items-center sm:ml-6  md:ml-4 lg:ml-24">
                        <div><input type="text" className="w-[150px] h-6 border border-gray-300 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"></input></div>
                        <button className="w-6 h-6 flex items-center justify-center bg-pink-500 rounded-r-md hover:bg-pink-600">
                            <FaSearch className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}