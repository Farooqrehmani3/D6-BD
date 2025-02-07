import Image from "next/image";
// import React, { useRef } from "react";
// import ReactStars from 'react-stars';
// import { Button } from "@/components/ui/button"
// import Link from "next/link";
// // import {
//     Search,
//     ShoppingCart,
//     Heart,
//     Phone,
//     Mail,
//     Instagram,
//     Youtube,
//     Facebook,
//     Twitter,
// } from "lucide-react";



export default function Contact() {
    return (
        
        <div>
           
            <div className="w-[1440px] rounded-[5px] h-[660px] mx-[200px] top-[200px] border">
                <div className="w-[1440px] h-[709px]">
                    <div className="w-[1440px] h-[709px]">
                        <div className="w-[1036px] h-[711px] absolute left-[209px] py-[112px] flex  gap-[80px]">
                            <div className="w-[1049px] h-[599px] flex  gap-[30px]">
                                <div className="w-[509px] h-[432px] pt-[60px] flex flex-col gap-[30px]">
                                    <h4 className="w-[154px] h-[30px] font-sans font-bold text-[18px] leading-[30px] text-black">CONTACT US</h4>
                                    <h1 className="w-[509px] h-[100px] font-Montserrat font-bold text-[58px] leading-[60px] text-black">Get in touch today!</h1>
                                    <p className="w-[341px] h-[40px] font-sans font-medium text-[14px] leading-[20px] mt-6 text-gray-400">We know how large objects will act, We know how are objects will act, We know</p>
                                    <div className="w-[295px] h-[52px] flex gap-[34px]">
                                        <div>
                                            <p className="w-[184px] font-bold h-[22px] font-Montserrat text-[14px] leading-[22px] flex text-black  ">Phone: +451 215 215</p>

                                            <p className="w-[184px] mt-1 font-bold h-[22px] font-Montserrat text-[14px] leading-[22px] flex text-black  ">Fax: +451 215 215</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[610px] item-center h-[500px] ">
                                    <Image src="/family.png" alt="family" height={700} width={700} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Visit our office */}

            <div className="flex justify-center mt-24 flex-wrap">
                <h5>VISIT OUR OFFICE</h5>
            </div>
            <div>
                <h1 className="font-bold flex justify-center font-sans text-3xl">We help small businesses with big ideas</h1>
            </div>
            {/* contact image */}

            <div className="mt-28 flex justify-center">
                <Image src="/row1.png" alt="family" height={700} width={700} />
            </div>
<div className="flex justify-center  mt-11 font-bold">
<h5>WE CAN&apos;T WAIT TO MEET YOU</h5>

</div>

<div className="flex justify-center  mt-11 font-bold">
    <h1 className="text-4xl">Let&apos;s Talk</h1>
</div>
<div className="flex justify-center mb-20">
<button className="bg-blue-500 py-[12px] mt-6 flex justify-center sm:px-[20px] rounded-[5px] text-white font-montserrat">
                    Try it free now
                </button>
</div>
        </div>


    );
}
