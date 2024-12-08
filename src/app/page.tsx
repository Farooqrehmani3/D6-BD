import React from "react";
import Image from "next/image";


import {
  Search,
  ShoppingCart,
  Heart,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Header() {
  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#252B42] text-white flex flex-wrap justify-between items-center px-4 py-2 md:flex-nowrap">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <h6 className="text-sm">(225) 555-0118</h6>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <h6 className="text-sm">michelle.rivera@example.com</h6>
        </div>
        <h6 className="hidden md:block text-sm font-bold">
          Follow us and get a chance to win 80% off!
        </h6>
        <div className="flex items-center gap-3">
          <h6 className="text-sm font-bold">Follow Us:</h6>
          <Instagram className="w-5 h-5" />
          <Youtube className="w-5 h-5" />
          <Facebook className="w-5 h-5" />
          <Twitter className="w-5 h-5" />
        </div>
      </div>

      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
          <a href="#" className="text-xl font-bold">
            Bandage
          </a>
          <ul className="hidden md:flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pages
              </a>
            </li>
          </ul>
          <div className="md:hidden flex items-center space-x-4">
            <button className="hover:underline">Menu</button>
          </div>
          <div className="flex space-x-4 items-center">
            <a href="#" className="hover:underline text-sm">
              Login / Register
            </a>
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className="relative w-full h-[716px] bg-cover">
      <Image src="/maingirl.jpeg" alt="maingirl" height={700} width={1400}></Image>
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-blue-300 sm:items-start p-8 sm:p-12">
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
      {/* Editor's Pick */}
      <div className="text-center my-5 h=1500">
        <h1 className="font-extrabold text-3xl">EDITOR'S PICK</h1>
        <h2>Problems trying to resolve the conflict between</h2>
        <div className="flex item-center col-4 row-3 gap-9">
         <Image src="/brownjacketman.jpeg" alt="jacketman" height={1400} width={1400}></Image>
          <Image src="/greyshirtgirl.jpeg" alt="greyshirtgirl" height={1400} width={1400} ></Image>
          <Image src="/straightgirl.jpeg" alt="straightgirl" height={1400} width={1400}></Image>
          <Image src="/yellowshirtman.jpeg" alt="greyshirtgirl" height={1400} width={1400}></Image>
          </div>
          
          <div className="text-center my-5 h=1500">
            <h3 className="my-3 font-mono">Featured Products</h3>
            <h1 className="font-extrabold text-3xl">BESTSELLER PRODUCTS</h1>
            <h2 className="my-5">Problem trying to resolve the conflict between</h2>
          </div>

            <div className="flex item-center col-4 row-3 gap-9">
              <div className="justify-center">
            <Image src="/curlhairgirl.jpeg" alt="jacketman" height={1400} width={1400}></Image>
            <h2 className="flex my-200 font-bold text-2xl items-center mx-20">Graphic Design </h2>
            <h2 className="flex my-6 font-bold text-2xl items-center mx-20 text-gray-500">English Department</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-gray-500">$16.48</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-green-700">$6.48 </h2>
            </div>


            <div>
            <Image src="/whitedotshirt.jpeg" alt="jacketman" height={1400} width={1400}></Image>
            <h2 className="flex my-200 font-bold text-2xl items-center mx-20">Graphic Design </h2>
            <h2 className="flex my-6 font-bold text-2xl items-center mx-20 text-gray-500">English Department</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-gray-500">$16.48</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-green-700">$6.48 </h2>
            </div>

        
            <div>
              <Image src="/pinkshirtgirl.jpeg" alt="jacketman" height={1400} width={1400}></Image>
           < h2 className="flex my-200 font-bold text-2xl items-center mx-20">Graphic Design </h2>
            <h2 className="flex my-6 font-bold text-2xl items-center mx-20 text-gray-500">English Department</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-gray-500">$16.48</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-green-700">$6.48 </h2>
            </div>


            <div>
            <Image src="/browndressgirl.jpeg" alt="jacketman" height={1400} width={1400}></Image>
            <h2 className="flex my-200 font-bold text-2xl items-center mx-20">Graphic Design </h2>
            <h2 className="flex my-6 font-bold text-2xl items-center mx-20 text-gray-500">English Department</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-gray-500">$16.48</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-green-700">$6.48 </h2>
            </div>
                    

            
            </div>

            <div  className="flex item-center col-4 row-3 gap-9">

            <div>
            <Image src="/blacksmith.jpg" alt="blacksmith" height={400} width={450}></Image>
            <h2 className="flex my-200 font-bold text-2xl items-center mx-20">Graphic Design </h2>
            <h2 className="flex my-6 font-bold text-2xl items-center mx-20 text-gray-500">English Department</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-gray-500">$16.48</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-green-700">$6.48 </h2>
            </div>


            <div>
            <Image src="/preg.jpg" alt="preg" height={500} width={450}></Image>
            <h2 className="flex my-200 font-bold text-2xl items-center mx-20">Graphic Design </h2>
            <h2 className="flex my-6 font-bold text-2xl items-center mx-20 text-gray-500">English Department</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-gray-500">$16.48</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-green-700">$6.48 </h2>
            </div>

        
            <div>
              <Image src="/redman.jpg" alt="redman" height={500} width={450}></Image>
           < h2 className="flex my-200 font-bold text-2xl items-center mx-20">Graphic Design </h2>
            <h2 className="flex my-6 font-bold text-2xl items-center mx-20 text-gray-500">English Department</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-gray-500">$16.48</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-green-700">$6.48 </h2>
            </div>


            <div>
            <Image src="/airaman.jpg" alt="airaman" height={500} width={450}></Image>
            <h2 className="flex my-200 font-bold text-2xl items-center mx-20">Graphic Design </h2>
            <h2 className="flex my-6 font-bold text-2xl items-center mx-20 text-gray-500">English Department</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-gray-500">$16.48</h2>
            <h2 className="flex my-1 font-bold text-2xl items-center mx-20 text-green-700">$6.48 </h2>
            </div>
            </div>
            </div>
            
          <div>

            
          </div>
          <div className="w-full bg-white flex flex-col lg:flex-row justify-center items-center lg:items-start">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
          <div className="relative">
            <img
              src="/couple.jpeg"
              alt="Asian"
              className="w-[90%] max-w-[400px] sm:max-w-[500px] lg:w-[725px] lg:h-[674px] object-cover ml-18"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 px-5 lg:px-10 mt-36 lg:mt-60">
          <h5 className="text-gray-400 text-sm lg:text-base font-bold mb-3">
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


      </div>
      
    
  );
}