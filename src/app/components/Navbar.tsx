import Link from "next/link";
import { FaAngleDown, FaSearch } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="bg-white mt-5">
            <div className="max-w-[1030px] h-[40px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="flex justify-between w-full items-center">
                    <div>
                        <h1 className="font-josefin font-bold text-2xl text-black">Hekto</h1>
                    </div>
                    <div>
                        <ul className="hidden md:flex gap-8 font-lato text-black font-medium ">
                            <li className="text-pink-500 flex"><Link href="/" className="">Home </Link><span className="mt-[5px]"><FaAngleDown /></span>  </li>
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
                    <div className="flex items-center">
                        <div className=""><input type="text" className="w-[150px] h-6 border border-gray-300 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"></input></div>
                        <button className="w-6 h-6 flex items-center justify-center bg-pink-500 rounded-r-md hover:bg-pink-600">
                            <FaSearch className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}