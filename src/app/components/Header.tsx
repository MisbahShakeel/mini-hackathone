import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
import { FaRegEnvelope, FaAngleDown, FaHeart } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";


export default function Header() {
    return (
        <>
        <header className="bg-[#7E33E0] text-white w-[815px] sm:w-[815px] md:w-[1000px] lg:w-[1350px] fixed top-0 z-50 shadow-md">
            <div className="sm:mx-20 md:mx-32 lg:mx-32 flex flex-wrap items-center justify-between py-2 px-4 lg:px-20">
                {/* Left Section */}
                <div className="flex flex-wrap gap-6 font-josefin text-sm relative right-12">
                    <div className="flex sm:flex md:flex lg:flex ml-10 sm:ml-0 items-center gap-2">
                        <FaRegEnvelope/>
                        <span>mhhasanul@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneVolume/>
                        <span>(12345) 67890</span>
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex gap-6 font-josefin items-center relative  sm:bottom-5 sm:left-72 md:bottom-0 md:left-0">
                    <div className="flex w-[54px] h-4 items-center gap-1 cursor-pointer">
                        <span>English</span>
                        <FaAngleDown/>
                    </div>
                    <div className="flex w-[49px] h-4 items-center gap-1 cursor-pointer">
                        <span>USD</span>
                        <FaAngleDown/>
                    </div>
                    <div className="flex w-[59px] h-4 items-center gap-1 cursor-pointer">
                       <Link href="/login"> <span>Login</span></Link>
                        <IoPerson/>
                    </div>
                    <div className="flex w-[75px] h-4 items-center gap-1 cursor-pointer">
                        <span>Wishlist</span>
                        <FaHeart/>
                    </div>
                    <div className="flex w-4 h-4 cursor-pointer">
                       <Link href="/"> <BsCart3/> </Link>
                    </div>
                </div>
            </div>
        </header>

        </>
    )
}

