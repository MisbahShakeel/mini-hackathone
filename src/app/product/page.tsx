'use client'

import { FaCircle, FaHeart, FaInstagram, FaFacebookF, FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";
import { IoLogoTwitter } from "react-icons/io5";
import Images from "../components/Logo";
import { useEffect, useState } from "react";
import Product from "@/types/product";
import { client } from "@/sanity/lib/client";
import { allProducts, four } from "@/sanity/lib/quires";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default function Shop() {

const [product, setProduct] = useState<Product[]>([])

useEffect(() => {
  async function fetchProduct() {
    const fetchedProduct : Product[] = await client.fetch(allProducts)
    setProduct(fetchedProduct)
  }
  fetchProduct()
},[])

  return (
    <section className=" bg-white py-8">
      <div className="container">
      <div className="bg-[#F6F5FF] w-[1330px]">
        <div className="h-[250px] mb-6 relative top-24 mx-44 px-4">
          <h2 className="text-lg w-[200px] lg:text-2xl font-bold text-black font-josefin">Product Details</h2>
          <p className="flex  flex-col md:flex-row lg:flex-row mt-4 text-sm text-gray-500 font-lato text-center">
            Home <FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2 ml-1 mr-1" /> Pages <FaCircle className="text-pink-700 w-[5px] h-[5px] lg:mt-2  lg:ml-1 mr-1" /> <span className="text-pink-700">Product Details</span>
          </p>
        </div>
        </div>
        {/* Playwood */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white mx-44">
            {/* left side */}
            <div className="flex flex-col  ml-5 mt-5 mb-5 items-center md:items-start gap-4">
              <div>
                <Image src="/us.png" alt="" width={140} height={155} />
              </div>
              <div>
                <Image src="/light2.png" alt="" width={140} height={155} />
              </div>
              <div>
                <Image src="/clush.png" alt="" width={140} height={155} />
              </div>
            </div>
            {/* middle side */}
            <div className="relative lg:right-32">
              <Image src="/handBag.png" alt="" width={350} height={300} className="w-[250px] lg:w-[400px] h-[150px] lg:h-[470px] mt-5 mb-5" />
            </div>
            {/* right side */}
            <div className="relative lg:right-[100px] lg:top-20">
              <h1 className="w-[265px] font-josefin size-8 text-3xl leading-[42.19px] text-[#0D134E]">Playwood arm chair</h1>
              <div className="flex flex-row gap-2 mt-10">
                <div className="flex flex-row gap-1">
                  <Image src="/star.png" alt="" width={10} height={14} />
                  <Image src="/star.png" alt="" width={10} height={14} />
                  <Image src="/star.png" alt="" width={10} height={14} />
                  <Image src="/star.png" alt="" width={10} height={14} />
                  <h4 className="text-[#151875] font-josefin size-[14px] leading-[29px] relative bottom-2">(22)</h4>
                </div>
                <div className="absolute mt-10 font-josefin font-bold">
                  <p className="text-[#151875] font-bold">$32.00 <span className="text-pink-500 line-through">$39.00</span></p>
                  <h5 className="text-[#0D134E] mt-2">Color</h5>
                  <p className="w-[370px] h-[45px] mt-2 font-medium size-4 leading-[29px] text-[#A9ACC6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                  <button className="flex mt-8 ml-20 text-[#151875] px-4 py-2 gap-4">Add To Cart<FaHeart className="mt-1" /></button>
                  <h5 className="text-[#151875] mt-2">Categories:</h5>
                  <h5 className="text-[#151875] mt-2">Tag</h5>
                  <div className="felx flex-col lg:flex-row">
                    <h5 className="text-[#151875] mt-2">Share</h5>
                    <div className="absolute bottom-1 right-56 flex space-x-2">
                      <span className="w-6 h-6 bg-blue-900 rounded-full text-white"><FaFacebookF className="mt-1 ml-1" /></span>
                      <span className="w-6 h-6 bg-pink-600 rounded-full text-white"><FaInstagram className="mt-1 ml-1" /></span>
                      <span className="w-6 h-6 bg-blue-900 rounded-full text-white"><IoLogoTwitter className="mt-1 ml-1" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Description */}
        <div>
          <div className="bg-[#F9F8FE] h-[550px] w-[1335px]">
            <div className="mx-44">
              <ul className="text-blue-900 flex font-josefin text-lg font-bold">
                <li className="mt-10">Description</li>
                <li className="mt-10 ml-24">Additional Info</li>
                <li className="mt-10 ml-24">Reviews</li>
                <li className="mt-10 ml-24">Video</li>
              </ul>

              <h3 className="text-[#151875] font-josefin pt-10 font-bold">Varius tempor</h3>
              <p className="text-[#A9ACC6] font-josefin pt-4 w-[980px] h-[87px] size-4 leading-[29px] text-sm">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
                ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus
                ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt.
                Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis.
                Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              <h3 className="text-[#151875] font-josefin pt-10 font-bold">More details</h3>
                <FaArrowRight className="mt-5" />
                <p className="text-[#A9ACC6] font-josefin  w-[980px] h-[87px] size-4 leading-[29px] text-sm ml-10 relative bottom-[22px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <FaArrowRight className="-mt-16" />
                <p className="text-[#A9ACC6] font-josefin  w-[980px] h-[87px] size-4 leading-[29px] text-sm ml-10 relative bottom-[22px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <FaArrowRight className="-mt-16" />
                <p className="text-[#A9ACC6] font-josefin  w-[980px] h-[87px] size-4 leading-[29px] text-sm ml-10 relative bottom-[22px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                <FaArrowRight className="-mt-16" />
                <p className="text-[#A9ACC6] font-josefin  w-[980px] h-[87px] size-4 leading-[29px] text-sm ml-10 relative bottom-[22px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
              
            </div>
          </div>
        </div>
        {/* Related Products */}
        <div className="h-full">
          <div className=" mb-6 mt-20 lg:mx-44 px-2 lg:px-4">
            <h1 className="w-[293px] font-josefin size-[36px] leading-[42.19px] text-[#101750] font-bold text-lg">Related Products</h1>
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mt-8 w-[1000px]">
              {product.map((product) => (
                <div key={product._id}
                className=" border p-4 rounded-lg shadow hover:shadow-lg transition-all bg-white">
                 <Link href={`/components/product/${product.slug.current}`}>
                  {product.image && (
                    <Image
                    src={urlFor(product.image).url()}
                    alt="image"
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover"
                    />
                  )}
                  <h2 className="text-blue-800 font-lato font-bold">{product.productName}</h2>
                  <p className="text-gray-500 mt-2">
                    {product.price ? `$${product.price}` : "Price not available"}
                  </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4 mb-10">
          <Images/>
        </div>
      </div>
    </section>
  );
}