import React from "react";
import Image from "next/image";
// import styles from './YourComponent.module.css';
// import ReactStars from 'react-stars';
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";

// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react";

import {
    ShoppingCart,
    Heart,
   } from "lucide-react";

// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"
// import Link from "next/link";


export default function Header() {
    return (
        <div>
            {/* Top Bar */}

           

            <div className="bg-gray-100">
                <div className="flex justify-between mx-60 text-xl font-bold my-5">
                    <ul><li> Home / Shop </li></ul>
                </div>
            </div>

            {/* Product Image */}
            <div className="my-2 mx-40 w-[1440px] h-[598px]">

                <div className='lg: my-col-2'>

                    <div className="flex items-center border p-4 w-[1440px] h-[598px] rounded-lg shadow-md">
                        {/* Left Side - Image */}
                        <div className="w-1/3 mr-4">
                            <Image src="/sofa.png" alt="Floating Phone" width={506} height={546} />
                        </div>

                        {/* Right Side - Text Content */}
                        <div className="w-2/4">
                            <h2 className="text-2xl font-bold mb-2">Floating Phone</h2>

                            {/* Rating Stars */}
                            <div className="flex items-center mb-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                <Star className="w-5 h-5 text-yellow-500" />
                                <Star className="w-5 h-5 text-yellow-500" />
                                <Star className="w-5 h-5 text-yellow-500" />
                                <Star className="w-5 h-5 text-gray-300" />
                            </div>
                            <br />
                            <br />
                            {/* Price */}
                            <p className="text-xl font-semibold text-black-600 mb-2">$1,139.33</p>

                            {/* Availability */}
                            <p className="text-sm text-gray-700">Availability: In Stock</p>
                            <br />
                            <p> Met minimum mobilenon desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mobile. Excitation veniel consequent sent nostrum met</p>
                            <hr className="border-t-2 border-gray-300 my-4" />
                            <br />
                            {/* Blue Circle */}
                            <div className="flex flex-item-center gap-4">
                                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>

                                {/* Green Circle */}
                                <div className="w-8 h-8 bg-green-500 rounded-full"></div>

                                {/* Orange Circle */}
                                <div className="w-8 h-8 bg-orange-500 rounded-full"></div>

                                {/* Black Circle */}
                                <div className="w-8 h-8 bg-black rounded-full"></div>
                            </div>
                            <br />

                            <div className="flex flex-item-center gap-6">
                                <Button className="outline bg-blue-400" >Select option</Button>
                                <Heart className="w-6 h-6 text-red-500" />
                                <ShoppingCart className="w-6 h-6 text-blue-500" />
                                <Eye className="w-6 h-6 text-green-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div className="flex justify-center gap-12 flex-item-center font-semibold text-gray-500 ">
                <ul><li>Description </li></ul>
                <ul> <li> Additional information</li></ul>
                <ul> <li> Review (0)</li></ul>
            </div>
            <br />
            <br />

            <div className="w-[1440px] h-[499px] flex mx-40">

                {/* Left Column (Image) */}
                <div className="w-[337px] h-[392px]">
                <Image
    src="/pinkchair.png"
    alt="Example Image"
    className="w-full h-full object-cover"
    width={500} // Set an appropriate width
    height={500} // Set an appropriate height
/>
                </div>

                {/* Middle Column (Heading + Paragraphs) */}
                <div className="flex-1 p-4">
                    <h2 className="text-2xl font-semibold mb-4">The quick fox jumps over</h2>

                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <p className="mb-4">Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.</p>

                    <p className="mb-4">Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Integer congue, lectus sit amet cursus lacinia, arcu nisl ultricies orci, quis porta quam justo eget arcu.</p>
                </div>

                {/* Right Column (Headings + Bullet Points) */}
                <div className="w-[400px] p-4">
                    <h2 className="text-2xl font-semibold mb-4">The quick fox jumps over</h2>

                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">➔</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">➔</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">➔</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">➔</span> The quick fox jumps over the lazy dog
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">The quick fox jump over</h2>

                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">➔</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">➔</span> The quick fox jumps over the lazy dog
                        </li>
                        <li className="flex items-center">
                            <span className="mr-2 text-green-500">➔</span> The quick fox jumps over the lazy dog
                        </li>
                    </ul>
                </div>
            </div>

            {/* Best Seller Product */}
            <div className=" text-2xl text-pretty font-bold mx-11">BEEST SELLER PRODUCTS</div>
            <br />
            <hr className="border-t-2 border-gray-300 my-4 w-full" />
            
            
            <div className="flex justify-items-center gap-8   justify-center">
                {/* Top Row */}

                <div className="w-[239px] h-[280px] mb-4">
                    <Image src="/pinkspoon.png" alt="English Department" width={239} height={280} className="object-cover" />
                    <div className="text-center mt-2">
                        <p className="font-semibold">English Department</p>
                        <p className="text-gray-500 text-sm mt-1">$16.48</p>
                        <p className="text-green-500 text-sm mt-1">$6.48</p>
                    </div>
                </div>
                <div className="w-[239px] h-[280px] mb-4">
                    <Image src="/whiteglass.png" alt="English Department" width={239} height={280} className="object-cover" />
                    <div className="text-center mt-2">
                        <p className="font-semibold">English Department</p>
                        <p className="text-gray-500 text-sm mt-1">$16.48</p>
                        <p className="text-green-500 text-sm mt-1">$6.48</p>
                    </div>
                </div>
                <div className="w-[239px] h-[280px] mb-4">
                    <Image src="/silverspoon.png" alt="English Department" width={239} height={280} className="object-cover" />
                    <div className="text-center mt-2">
                        <p className="font-semibold">English Department</p>
                        <p className="text-gray-500 text-sm mt-1">$16.48</p>
                        <p className="text-green-500 text-sm mt-1">$6.48</p>
                    </div>
                </div>
                <div className="w-[239px] h-[280px] mb-4">
                    <Image src="/cups.png" alt="English Department" width={239} height={280} className="object-cover" />
                    <div className="text-center mt-2">
                        <p className="font-semibold">English Department</p>
                        <p className="text-gray-500 text-sm mt-1">$16.48</p>
                        <p className="text-green-500 text-sm mt-1">$6.48</p>
                    </div>
                </div>
            

 {/* Bottom Row */}
            <div className="w-[239px] h-[280px] mb-4">
                <Image src="/bowl.png" alt="English Department" width={239} height={280} className="object-cover" />
                <div className="text-center mt-2">
                    <p className="font-semibold">English Department</p>
                    <p className="text-gray-500 text-sm mt-1">$16.48</p>
                    <p className="text-green-500 text-sm mt-1">$6.48</p>
                </div>
            </div>
            <div className="w-[239px] h-[280px] mb-4">
                <Image src="/woodchair.png" alt="English Department" width={239} height={280} className="object-cover" />
                <div className="text-center mt-2">
                    <p className="font-semibold">English Department</p>
                    <p className="text-gray-500 text-sm mt-1">$16.48</p>
                    <p className="text-green-500 text-sm mt-1">$6.48</p>
                </div>
            </div>
            <div className="w-[239px] h-[280px] mb-4">
                <Image src="/pinkspoon.png" alt="English Department" width={239} height={280} className="object-cover" />
                <div className="text-center mt-2">
                    <p className="font-semibold">English Department</p>
                    <p className="text-gray-500 text-sm mt-1">$16.48</p>
                    <p className="text-green-500 text-sm mt-1">$6.48</p>
                </div>
            </div>
            <div className="w-[239px] h-[280px] mb-4">
                <Image src="/whiteglass.png" alt="English Department" width={239} height={280} className="object-cover" />
                <div className="text-center mt-2">
                    <p className="font-semibold">English Department</p>
                    <p className="text-gray-500 text-sm mt-1">$16.48</p>
                    <p className="text-green-500 text-sm mt-1">$6.48</p>
                </div>
            </div>
            </div>

            <br/>
            <br/>

            {/* Client logo bar */}
            <div>
                <Image src="/logo.png" alt="client logo" height={90} width={2000} />
            </div>

           

            {/* Product images */}




        </div>
    );
}