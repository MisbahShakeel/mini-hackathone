import { BsCart3 } from "react-icons/bs";
import { FaRegEnvelope, FaAngleDown, FaRegHeart } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function Header() {
    return (
        <>
        <header className="bg-[#7E33E0] text-white w-full">
            <div className="mx-auto flex items-center justify-between py-2 px-4 lg:px-20">
                {/* Left Section */}
                <div className="flex flex-wrap gap-6 font-josefin text-sm">
                    <div className="flex items-center gap-2">
                        <FaRegEnvelope/>
                        <span>mhhasanul@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaPhoneVolume/>
                        <span>(12345) 67890</span>
                    </div>
                </div>
                {/* Right Section */}
                <div className="flex gap-6 font-josefin">
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span>English</span>
                        <FaAngleDown/>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span>USD</span>
                        <FaAngleDown/>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span>Login</span>
                        <IoPerson/>
                    </div>
                    <div className="flex items-center gap-1 cursor-pointer">
                        <span>Wishlist</span>
                        <FaRegHeart/>
                    </div>
                    <div className="cursor-pointer">
                        <BsCart3/>
                    </div>
                </div>
            </div>
        </header>

        </>
    )
}

