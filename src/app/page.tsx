import React from "react";
import Image from "next/image";


// import {
//   Search,
//   ShoppingCart,
//   Heart,
//   Phone,
//   Mail,
//   Instagram,
//   Youtube,
//   Facebook,
//   Twitter,
// } from "lucide-react";
// import Header from "../../components/Header";
// import Link from "next/link"
import ProductCards from "./products/page";
// import Footer from "../../components/Footer";

export default function mainpage() {
  return (

    <div>

      {/* Hero Section */}
      <div className="relative w-full h-[716px] bg-cover">
        <div className='absolute w-full h-[700px]'>
          <Image src="/maingirl.JPEG" alt="maingirl" height={648} width={1290} className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
            <div className="w-full sm:w-[599px] text-center sm:text-left">
              <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] text-white">
                SUMMER 2020
              </h5>
              <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] text-white">
                NEW COLLECTION
              </h1>
              <h4 className="font-montserrat text-[16px] sm:text-[20px] text-white">
                We know how large objects will act, but things on a small scale.
              </h4>
              <button className="bg-[#2DC071] py-[12px] sm:px-[40px] rounded-[5px] text-white font-montserrat">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Editor's Pick */}
      <div className="text-center my-5 h=1500">
        <h1 className="font-extrabold text-3xl">EDITOR&apos;S PICK</h1>
        <h2>Problems trying to resolve the conflict between</h2>
        <div className="flex item-center col-4 row-3 gap-9">

          <div className="hover:scale-105 transition-transform duration-300">
            <Image src="/blacksmith.jpg" alt="blacksmith" height={400} width={450}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <Image src="/preg.jpg" alt="preg" height={500} width={450}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <Image src="/redman.jpg" alt="redman" height={500} width={450}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <Image src="/airaman.jpg" alt="airaman" height={500} width={450}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

        </div>


        <div className="text-center my-5 h=1500">
          <h3 className="my-3 font-mono">Featured Products</h3>
          <h1 className="font-extrabold text-3xl">BESTSELLER PRODUCTS</h1>
          <h2 className="my-5">Problem trying to resolve the conflict between</h2>
        </div>

        <div className="flex item-center col-4 row-3 gap-9">
          <div className="flex flex-col justify-center item-center gap-2 hover:scale-105 transition-transform duration-300">
            <Image src="/curlhairgirl.jpeg" alt="curlhairgirl" height={1400} width={1400}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="flex flex-col justify-center item-center gap-2 hover:scale-105 transition-transform duration-300">
            <Image src="/whitedotshirt.jpeg" alt="whitedotshirt" height={1400} width={1400}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="flex flex-col justify-center item-center gap-2 hover:scale-105 transition-transform duration-300">
            <Image src="/pinkshirtgirl.jpeg" alt="pinkshirtgirl" height={1400} width={1400}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="flex flex-col justify-center item-center gap-2 hover:scale-105 transition-transform duration-300">
            <Image src="/browndressgirl.jpeg" alt="browndressgirl" height={1400} width={1400}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>
        </div>


        <div className="flex item-center col-4 row-3 gap-9">

          <div className="hover:scale-105 transition-transform duration-300">
            <Image src="/blacksmith.jpg" alt="blacksmith" height={400} width={450}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <Image src="/preg.jpg" alt="preg" height={500} width={450}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <Image src="/redman.jpg" alt="redman" height={500} width={450}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <Image src="/airaman.jpg" alt="airaman" height={500} width={450}></Image>
            <h2 className="font-bold text-2xl">Graphic Design</h2>
            <h2 className="font-bold text-2xl text-gray-500">English Department</h2>
            <h2 className="font-bold text-2xl text-gray-500">$16.48</h2>
            <h2 className="font-bold text-2xl text-green-700">$6.48</h2>
          </div>

        </div>

      </div>

      <div>
      </div>

      {/* Green Banner */}
      <div className="relative w-full h-[500px] bg-[#006666] flex flex-col lg:flex-row justify-between items-center p-8">
        <div className="text-white text-center lg:text-left">
          <h5 className="text-sm sm:text-lg font-bold">SUMMER 2020</h5>
          <h1 className="text-3xl sm:text-5xl font-bold">Vita Classic Product</h1>
          <p className="mt-2">We know how large objects will act, We know how our objects will act.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <h3 className="text-lg font-bold">$16.48</h3>
            <button className="bg-[#2DC071] py-2 px-4 rounded-md text-white font-bold transition-transform transform hover:scale-105">
              ADD TO CART
            </button>
          </div>
        </div>
        <Image src="/greenman2.png" alt="greenman" width={1000} height={1240} className=" mt-11 rounded-md" />
      </div>
      {/* Couple banner */}

      <div className="w-full bg-white flex flex-col lg:flex-row justify-center items-center lg:items-start">
        {/* Left Side: Image */}
        <div className="w-full flex flex-col lg:flex-row justify-between lg:justify-start">
          <div className="relative sm:object-right mx-2 flex justify-between">
            <Image
              src="/couple.jpeg"
              alt="Couple"
              className="max-w-[500px] sm:max-w-[800px] lg:w-[725px] lg:h-[474px] object-cover lg:ml-18"
              width={725}
              height={474}
              priority
            />
          </div>

          <div className="flex flex-col justify-center lg:pl-8 mt-4 lg:mt-0">

          </div>
        </div>


        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 px-2 lg:px-10  ">
          <h5 className="text-gray-400 text-sm lg:text-base mt-40 font-bold mb-4">
            SUMMER 2020
          </h5>
          <h2 className="text-[#252B42] text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[#737373] text-sm sm:text-base lg:text-lg leading-6 mb-6">
            We know how large objects will act, <br />
            but things on a small scale.
          </h4>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              BUY NOW
            </button>
            <button className="bg-[#2DC071] text-white px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#e6e6e6]" />

      <div className="bg-white py-10 mt-28">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Featured Posts</h2>
          <p className="text-gray-500">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-5xl mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            {/* Post Image */}
            <div className="relative">
              <Image
                src="/road.jpg"
                alt="Sample Post"
                className="w-full h-40 object-cover"
                width={800}
                height={160}
                priority
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                New
              </span>
            </div>

            {/* Post Content */}
            <div className="p-3">
              <h3 className="text-md font-semibold text-gray-800">Sample Post Title</h3>
              <p className="text-gray-600 text-sm mt-2">
                This is a sample description for the post.
              </p>
              <div className="flex justify-between items-center text-gray-500 text-xs mt-4">
                <span>April 22, 2021</span>
                <span>5 comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-xs font-medium mt-4 inline-block hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            {/* Post Image */}
            <div className="relative">
              <Image
                src="/foxy.jpg"
                alt="Another Sample Post"
                className="w-full h-40 object-cover"
                width={800}
                height={160}
                priority
              />
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                New
              </span>
            </div>

            {/* Post Content */}
            <div className="p-3">
              <h3 className="text-md font-semibold text-gray-800">Another Post Title</h3>
              <p className="text-gray-600 text-sm mt-2">
                Another description for a different post.
              </p>
              <div className="flex justify-between items-center text-gray-500 text-xs mt-4">
                <span>April 22, 2021</span>
                <span>12 comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-xs font-medium mt-4 inline-block hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="relative bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
            {/* Post Image */}

            <Image
              src="/umbrella.jpg"
              alt="Sample Post"
              className="w-full h-40 object-cover"
              width={800}
              height={160}
              priority
            />

            <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
              NEW
            </span>
            <div className="p-3">
              <h3 className="text-md font-semibold text-gray-800">Sample Post Title</h3>
              <p className="text-gray-600 text-sm mt-2">
                This is a sample description for the post.
              </p>
              <div className="flex justify-between items-center text-gray-500 text-xs mt-4">
                <span>April 22, 2021</span>
                <span>5 comments</span>
              </div>
              <a
                href="#"
                className="text-blue-500 text-xs font-medium mt-4 inline-block hover:underline"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* Add more posts manually as needed */}
        <div>
          <ProductCards />
        </div>

      </div>

    </div>







  );
}