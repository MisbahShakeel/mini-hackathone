import { BsCart3 } from "react-icons/bs";
import { FaRegEnvelope, FaAngleDown, FaRegHeart } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function Header() {
    return (
        <>
        <header className="bg-[#7E33E0] text-white w-full fixed top-0 z-50 shadow-md">
            <div className="mx-auto flex flex-wrap items-center justify-between py-2 px-4 lg:px-20">
                {/* Left Section */}
                <div className="flex flex-wrap gap-6 font-josefin text-sm">
                    <div className="hidden sm:flex items-center gap-2">
                        <FaRegEnvelope/>
                        <span>mhhasanul@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneVolume/>
                        <span>(12345) 67890</span>
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex gap-6 font-josefin items-center">
                    <div className="flex w-[54px] h-4 items-center gap-1 cursor-pointer">
                        <span>English</span>
                        <FaAngleDown/>
                    </div>
                    <div className="flex w-[43px] h-4 items-center gap-1 cursor-pointer">
                        <span>USD</span>
                        <FaAngleDown/>
                    </div>
                    <div className="flex w-[32px] h-4 items-center gap-1 cursor-pointer">
                        <span>Login</span>
                        <IoPerson/>
                    </div>
                    <div className="flex w-[58px] h-4 items-center gap-1 cursor-pointer">
                        <span>Wishlist</span>
                        <FaRegHeart/>
                    </div>
                    <div className="flex h-4 cursor-pointer">
                        <BsCart3/>
                    </div>
                </div>
            </div>
        </header>

        </>
    )
}

