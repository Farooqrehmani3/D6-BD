import React from "react"
import { FaArrowRight } from 'react-icons/fa';
import { Switch } from "@/components/ui/switch"
import Image from "next/image";
import Link from "next/link";
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





export default function () {
    return (
        
        // Mian div
        <div className="h-full w-full ">

            {/* // Simple pricing div */}
            <div className="container mx-11 px-4  w-full h-full   ">
                <h6 className="text-center mt-10 font-montserrat font-bold text-gray-400">PRICING</h6>
                <h1 className="font-bold text-5xl text-center font-montserrat mt-10">Simple Pricing</h1>
                <h5 className="wrap flex justify-center mt-8 gap-6"> Home <FaArrowRight /> Pricing</h5>
            </div>

            {/* // Pricing */}
            <div className="mt-20">
                <h5 className="text-3xl font-sans font-bold flex justify-center">Pricing</h5>
                <p className="text-gray-400 y-2 flex justify-center text-0.25xl font-sans">Problems trying to resolve the conficts between </p>
                <p className="text-gray-400 y-2 flex justify-center font-sanstext-0.25xl">the two major realms of classical physics. Newtonian mechanic</p>
            </div>

            {/* monthly yearly switch */}

            <div className="wrap flex justify-center mt-10 gap-4">
                Monthly <Switch />
                Yearly <button className="bg-blue-200 py-[12px] flex flex-item-center sm:px-[20px] rounded-[40px] text-blue-800 font-montserrat">
                    Save 25%
                </button>

            </div>
            {/* Image pricing div */}
            <div className="wrap flex justify-center mt-8">
                <Image src="/row.png" alt="row" height={704} width={985}></Image>
            </div>

            {/* Logo with text */}
            <div className="wrap flex justify-center mt-8">
                <Image src="/logotext.png" alt="row" height={704} width={985}></Image>
            </div>


            {/* Pricing FAQ */}
            <div className="mt-40">
                <h5 className="text-2xl font-sans font-bold flex justify-center">Pricing FAQS</h5>
                <p className="text-gray-400 y-2 flex justify-center text-0.25xl font-sans">Problems trying to resolve the conflicts between </p>
                <p className="text-gray-400 y-2 flex justify-center text-0.25xl font-sans">the two major realms of classical physics</p>            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
                gap: '20px', // Space between items
                padding: '20px'
            }}>
                {Array(6).fill(3).map((_, index) => (
                    <div key={index} style={{
                        backgroundColor: '#f9f9f9',
                        padding: '15px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
                    }}>
                        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
                            → <strong>The quick fox jumps over the lazy dog</strong>
                        </h2>
                        <p style={{ fontSize: '14px', color: 'gray', lineHeight: '1.6' }}>
                            Met minim Mollie non desert Alamo est sit clique dolor do met sent. RELIT official consequent door ENIM RELIT Mobile. Excitation veniel consequent sent nostrum met.
                        </p>
                    </div>
                ))}
                <h5 className="text-gray-400 flex justify-center font-sans">Haven't got your answer? Contact out support</h5>
            </div>

            {/* Start your 14 days trial free */}

            <div>
                <h1 className="font-sans font-bold text-3xl mt-20 flex justify-center"> Start your 14 days free trial</h1>
                <p className="text-gray-400 flex justify-center mt-10 text-size:150x">Met minim Mollie non desert Alamo est sit clique dolor do met sent. RELIT official consequent</p>  </div>
            <div className="flex justify-center mt-10">
                <button className="bg-blue-500 py-[12px] flex justify-center sm:px-[20px] rounded-[5px] text-white font-montserrat">
                    Try it free now
                </button></div>
        </div>
    );
}