import { BsCart3 } from "react-icons/bs";
import { FaRegEnvelope, FaAngleDown, FaRegHeart } from "react-icons/fa"
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

export default function Header() {
    return (
        <>
        <header className="w-[1920px] h-11 bg-[#7E33E0]">
            <div className="leading-4 flex text-[#fff]">
                {/* left div */}
                <div className="flex gap-10 text-center items-center ml-24 mt-2">
                    <div className="flex gap-3">
                        <div><FaRegEnvelope/></div>
                        <div>
                            <h4 className="w-[171px] h-4">mhhasanul@gmail.com</h4>
                        </div>
                    </div>
                    <div className="flex gap-3">
                    <div><FaPhoneVolume/></div>
                    <div>
                        <h4 className="w-[97px h-4">(12345)67890</h4>
                    </div>
                    </div>
                </div>
                {/* Right div */}
                <div className="flex gap-10 ml-24 mt-2">
                    <div className="flex w-[54px] h-4"><h4 className="flex gap-1">English <FaAngleDown/></h4></div>
                    <div className="flex w-[43px] h-4"><h4 className="flex gap-1">USD <FaAngleDown/></h4></div>
                    <div className="flex w-[32px] h-4"><h4 className="flex gap-1">Login <IoPerson /></h4></div>
                    <div className="flex w-[58px] h-4"><h4 className="flex gap-1">Wishlist <FaRegHeart /></h4></div>
                    <div className="flex w-[px] h-4"> <BsCart3/> </div>
                </div>
            </div>
        </header>
        </>
    )
}