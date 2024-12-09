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
              className="w-[90%] max-w-[400px] sm:max-w-[500px] lg:w-[725px] lg:h-[574px] object-cover ml-18"
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
      <div className="w-[1440px] rounded-[5px] absolute bg-[#23856D] mt-[-130px] top-[3200px] border">
            <div className="w-[1440px] h-[709px]">
             <div className="w-[1440px] h-[709px]">
                <div className="w-[1036px] h-[711px] absolute left-[209px] py-[112px] flex  gap-[80px]">
                    <div className="w-[1049px] h-[599px] flex  gap-[30px]">
                        <div className="w-[509px] h-[432px] pt-[60px] flex flex-col gap-[30px]">
                            <h4 className="w-[154px] h-[30px] font-Montserrat font-normal text-[20px] leading-[30px] text-white">SUMMER 2020</h4>
                            <h1 className="w-[509px] h-[160px] font-Montserrat font-bold text-[58px] leading-[80px] text-white">Vita Classic Product</h1>
                            <p className="w-[341px] h-[40px] font-Montserrat font-medium text-[14px] leading-[20px] text-white">We know how large objects will act, We know how are objects will act, We know</p>
                            <div className="w-[295px] h-[52px] flex gap-[34px]">
                                <h3 className="w-[77px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] text-white">$16.48</h3>
                                <button className="w-[184px] h-[52px] rounded-[5px] px-[40px] bg-[#2DC071] py-[15px] flex gap-[10px]">
                                    <h1 className="w-[104px] h-[22px] font-Montserrat text-[14px] leading-[22px] flex text-white justify-center ">ADD TO CART</h1>
                                </button>
                            </div>
                        </div>
                        <div className="w-[610px] item-center ">
                          <Image src="/greenman.jpeg" alt="greenman" height={500} width={350}/>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        </div>

        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
                    </div>
                    <div className="flex gap-6">
                        <Image src="/fb.jpg" alt="fb" height={6} width={6} />
                        <Image src={"/instagram.jpg"} alt="fb"  height={6} width={6} />
                        <Image src={"/twitter.png"} alt="fb"  height={6} width={6} />
                    </div>
                </div>
            
  
            {/* Divider */}
            <div className="border-t border-[#e6e6e6]" />
  
            {/* Main Footer Content */}
            <section className="bg-white py-12">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
                    {/* Company Info */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">About Us</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
                        </nav>
                    </div>
  
                    {/* Legal */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
                        </nav>
                    </div>
  
                    {/* Features */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Features</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">Business Marketing</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">User Analytics</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Live Chat</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</a>
                        </nav>
                    </div>
  
                    {/* Resources */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">iOS & Android</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Customers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">API</a>
                        </nav>
                    </div>
  
                    {/* Get in Touch */}
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
                        <div className="mt-3">
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    className="w-[221px] h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                                    placeholder="Your Email"
                                />
                                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
  
            {/* Bottom Section */}
            <section className="bg-[#f9f9f9] py-4">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <p className="text-[#727272] text-sm font-bold">Made with love by Finland. All rights reserved.</p>
                    <div className="flex gap-4">
                       
                    </div>
                </div>
                </section>



      </div>
    
  );
}