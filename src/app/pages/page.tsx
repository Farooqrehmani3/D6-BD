import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
// import Link from "next/link";
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


export default function Home() {
  return (
    <div>
      {/* Innovation tailored for you */}
      <div className="container mx-11 px-4 w-full h-full">
        <h6 className="text-center mt-10 font-montserrat font-bold text-gray-400">
          WHAT WE DO
        </h6>
        <h1 className="font-bold text-5xl text-center font-montserrat mt-10">
          Innovation tailored for you
        </h1>
        <h5 className="wrap flex justify-center mt-8 gap-6">
          Home <FaArrowRight /> Team
        </h5>
      </div>

      {/* Picture collage */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Four equal-width columns
          gridTemplateRows: "repeat(2, auto)", // Two rows
          gap: "10px", // Space between grid items
          maxWidth: "1200px", // Max width for the container
          margin: "0 auto", // Center the container horizontally
          padding: "20px", // Padding around the container
        }}
      >
        {/* Large Image: Spans 2 rows and 2 columns */}
        <div
          style={{
            gridColumn: "1 / span 2", // Spans 2 columns
            gridRow: "1 / span 2", // Spans 2 rows
          }}
        >
          <Image
            src="/redstyle.png"
            alt="Large Image"
            layout="responsive"
            width={500}
            height={500}
            style={{ borderRadius: "8px" }}
          />
        </div>

        {/* Four Smaller Images */}
        {["/coat.png", "/lightblue.png", "/blackshirt.png", "/darkblue.png"].map(
          (src, index) => (
            <div key={index}>
              <Image
                src={src}
                alt={`Small Image ${index + 1}`}
                layout="responsive"
                width={200}
                height={200}
                style={{ borderRadius: "8px" }}
              />
            </div>
          )
        )}
      </div>

      {/* Meet our team */}
      <div className="text-center mb-8 mt-6">
        <h1 className="text-2xl font-bold text-gray-800">Meet Our Team</h1>
      </div>

      {/* Team Images */}
      {[
        ["/p1.png", "/p2.png", "/p3.png"],
        ["/umer.png", "/p5.png", "/orange.png"],
        ["/red.png", "/p8.png", "/p9.png"],
      ].map((row, rowIndex) => (
        <div key={rowIndex} className="mt-8 flex justify-center gap-4">
          {row.map((src, colIndex) => (
            <Image
              key={colIndex}
              src={src}
              alt={`Team Member ${colIndex + 1}`}
              width={300}
              height={300}
            />
          ))}
        </div>
      ))}

      {/* Start your 14 days trial free */}
      <div>
        <h1 className="font-sans font-bold text-3xl mt-20 flex justify-center">
          Start your 14 days free trial
        </h1>
        <p className="text-gray-400 flex justify-center mt-6 text-sm">
          Met minim Mollie non desert Alamo est sit clique dolor do met sent.
          RELIT official consequent
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-blue-500 py-3 px-6 rounded text-white font-montserrat">
          Try it free now
        </button>
      </div>
    </div>
  );
}
