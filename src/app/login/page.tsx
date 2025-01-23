import { FaCircle } from "react-icons/fa";

export default function LoginPage() {
    return (
        <div>
            <section className=" py-8">
                <div className="container">
                    <div className="bg-[#F6F5FF] lg:w-[1330px]">
                        <div className="relative top-24 h-[250px] mb-6 mx-16 lg:mx-36 px-4">
                            <h2 className="w-[250px] text-xl lg:text-4xl font-bold text-[#101750] font-josefin">My Account</h2>
                            <p className="flex  flex-col md:flex-row lg:flex-row mt-4 text-sm text-gray-500 font-lato text-center gap-2 ml-2">
                                Home <FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2 ml-1 mr-1 hidden sm:flex" /><span>Pages</span><FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2  lg:ml-1 mr-1 hidden sm:flex" /> <span className="text-pink-700">my account</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto mt-20  mb-20 flex justify-center items-center">
                <div className="bg-white shadow-md rounded-lg p-6 ">
                    <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
                    <p className="text-gray-400 text-sm text-center">Please login using account detail below.</p>
                    <input
                        type="text"
                        placeholder="Email Adress"
                        className="w-full p-2 border rounded-md mb-4 mt-4"
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        className="w-full p-2 border rounded-md mb-4"
                    />
                    <p className="text-gray-400 text-sm">Forgot your password</p>
                    <button className="w-full bg-pink-600 text-white py-2 rounded-md mt-4">
                        Sign In
                    </button>
                    <p className="text-gray-400 text-sm text-center mt-4">Don't have an Account?Create account</p>
                </div>
                </div>
            </section>
        </div>
    );
}