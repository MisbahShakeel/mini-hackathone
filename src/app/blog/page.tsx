import { FaCircle } from "react-icons/fa";
import Image from "next/image";
import Images from "../components/Images";

export default function Contact() {
  return (
    <section className=" py-8 mt-4">
      <div className="container mx-32">
       <div className="bg-[#F6F5FF] lg:w-[1330px]">
        <div className="relative top-24 h-[250px] mb-6 mx-4 px-4">
          <h2 className="w-[200px] text-xl lg:text-2xl font-bold text-[#101750] font-josefin">Blog Page</h2>
          <p className="flex  flex-col md:flex-row lg:flex-row mt-4 text-sm text-gray-500 font-lato text-center gap-2">
            Home <FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2 ml-1 mr-1 hidden sm:flex" /><span>Pages</span><FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2  lg:ml-1 mr-1 hidden sm:flex" /> <span className="text-pink-700">Blog page</span>
          </p>
        </div>
        </div>
        {/* main content */}
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[60%]">
                <div className="bg-white rounded-lg overflow-hidden mb-8">
                    <Image src="/blog1.png" alt="" width={800} height={400} className="w-full"/>
                    <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-[#151875]">
                            <span className="bg-pink-400  px-3 py-1 rounded">Surf Auxion</span>
                            <span className="mr-56 bg-pink-400  px-3 py-1 rounded">Aug 09 2020</span>
                        </div>
                        <h2 className="text-3xl font-lato font-semibold mt-6 text-[#151875]">
                        Mauris at orci non vulputate diam tincidunt nec.
                        </h2>
                        <p className="text-gray-600 w-[860px] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                        </p>
                        <a href="#" className="text-[#151875] font-serif text-lg hover:underline mt-4 inline-block">Read More</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden">
                    <Image src="/blog2.png" alt="" width={800} height={400} className="w-full"/>
                    <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-[#151875]">
                            <span className="bg-pink-400  px-3 py-1 rounded">Surf Auxion</span>
                            <span className="mr-56 bg-pink-400  px-3 py-1 rounded">Aug 09 2020</span>
                        </div>
                        <h2 className="text-3xl font-lato font-semibold mt-6 text-[#151875]">
                        Mauris at orci non vulputate diam tincidunt nec.
                        </h2>
                        <p className="text-gray-600 w-[860px] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                        </p>
                        <a href="#" className="text-[#151875] font-serif text-lg hover:underline mt-4 inline-block">Read More</a>
                    </div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden">
                    <Image src="/blog3.png" alt="" width={800} height={400} className="w-full"/>
                    <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-[#151875]">
                            <span className="bg-pink-400  px-3 py-1 rounded">Surf Auxion</span>
                            <span className="mr-56 bg-pink-400  px-3 py-1 rounded">Aug 09 2020</span>
                        </div>
                        <h2 className="text-3xl font-lato font-semibold mt-6 text-[#151875]">
                        Mauris at orci non vulputate diam tincidunt nec.
                        </h2>
                        <p className="text-gray-600 w-[860px] mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.
                        </p>
                        <a href="#" className="text-[#151875] font-serif text-lg hover:underline mt-4 inline-block">Read More</a>
                    </div>
                </div>
            </div>
        
        {/* sidebar */}
        <aside className="w-full md:w-[25%] ml-20">
            <div className="mb-8">
                <h3 className=" text-xl font-semibold mb-4">Search</h3>
                <input type="text" placeholder="Search for posts" className="w-full px-4 py-2 rounded-lg"/>
            </div>
            <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#151875]">Categories</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 space-y-2 text-gray-700">
                    <li className="px-4 py-2 w-32 text-white bg-pink-500 font-lato font-medium">Hobbies (14)</li>
                    <li>Women (21)</li>
                    <li>Women (21)</li>
                    <li>Women (21)</li>
                    <li>Women (21)</li>
                    <li>Women (21)</li>
                </ul>
            </div>
            <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-[#151875]">Recent Post</h3>
          <ul className="space-y-4">
            {[1, 2, 3, 4].map((post) => (
              <li key={post} className="flex space-x-4 items-center">
                <Image
                  src="/post1.png"
                  alt="Thumbnail"
                  width={80}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <p className="text-[#151875]">It is a long established fact</p>
                  <span className="text-[#151875] text-sm">Aug 09 2020</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#151875]">Sale Product</h3>
          {[1, 2, 3].map((product) => (
            <div key={product} className="flex space-x-4 items-center mb-4">
              <Image
                src="/post2.jpg"
                alt="Product"
                width={80}
                height={60}
                className="rounded-lg"
              />
              <div>
                <p className="text-[#151875]">Elle omore in enim mauris.</p>
                <span className="text-[#151875] text-sm">Aug 09 2020</span>
              </div>
            </div>
          ))}
        </div>
        <div>
        <h3 className="text-xl font-semibold mt-10 text-[#151875]">Offer Product</h3>
        <div className="grid grid-cols-2  ml-5 mt-5 mb-5 items-center md:items-start gap-4">
                      <div>
                        <Image src="/us.png" alt="" width={130} height={100} />
                        <p className="text-[#151875]">Elle omore in enim mauris.</p>
                      </div>
                      <div>
                        <Image src="/light2.png" alt="" width={130} height={100} />
                        <p className="text-[#151875]">Elle omore in enim mauris.</p>
                      </div>
                      <div>
                        <Image src="/clush.png" alt="" width={130} height={100} />
                        <p className="text-[#151875]">Elle omore in enim mauris.</p>
                      </div>
                      <div className="w-[120px]">
                        <Image src="/handBag.png" alt="" width={120} height={100} className="w-full overflow-hidden object-cover"/>
                        <p className="text-[#151875]">Elle omore in enim mauris.</p>
                      </div>
                    </div>
        </div>
        </aside>
        </div>

        <div className="mt-20 -ml-14 mr-40">
            <Images/>
        </div>
        </div>
    </section>
  );
}