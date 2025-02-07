import React from 'react';
import Image from "next/image";
// import Header from '../../../components/Header';
// import Link from 'next/link';

// import Footer from '../../../components/Footer';

export default function about() {
    return (
        <div className='min-h-screen'>
            <div className="w-full max-w-screen-lg mx-auto py-16 px-4">
                {/* ABOUT US SECTION */}
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="flex flex-col w-full lg:w-1/2 space-y-6">
                        <h4 className="font-mono font-bold text-2xl text-black">ABOUT COMPANY</h4>
                        <h1 className="font-Montserrat font-bold text-4xl lg:text-6xl text-black">ABOUT US</h1>
                        <p className="font-sans text-sm text-gray-400 max-w-md">
                            We know how large objects will act, We know how our objects will act, We know.
                        </p>
                        <button className="w-full sm:w-auto bg-blue-400 py-3 px-6 rounded-md text-white text-lg font-Montserrat">
                            Get Quote Now
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <Image src="/yellowgirl1.png" alt="Yellow Girl" height={700} width={700} />
                    </div>
                </div>

                {/* STATS SECTION */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 my-16 text-center">
                    <div>
                        <h1 className='text-3xl font-bold'>15K</h1>
                        <p className='font-sans text-sm text-gray-400'>Happy Customers</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>150K</h1>
                        <p className='font-sans text-sm text-gray-400'>Monthly Visitors</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>15</h1>
                        <p className='font-sans text-sm text-gray-400'>Countries Worldwide</p>
                    </div>
                    <div>
                        <h1 className='text-3xl font-bold'>100+</h1>
                        <p className='font-sans text-sm text-gray-400'>Top Partners</p>
                    </div>
                </div>

                {/* VIDEO SECTION */}
                <div className='flex justify-center'>
                    <Image src="/video.png" alt="Video" height={700} width={700} />
                </div>

                {/* MEET OUR TEAM */}
                <div className="text-center my-16">
                    <h1 className="text-2xl font-bold text-gray-800">Meet Our Team</h1>
                    <p className="text-gray-400 mt-4">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                    </p>
                </div>

                {/* TEAM MEMBER IMAGES */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-xl mx-auto'>
                    <Image src="/orange.png" alt="Team Member 1" height={300} width={300} />
                    <Image src="/red.png" alt="Team Member 2" height={300} width={300} />
                    <Image src="/umer.png" alt="Team Member 3" height={300} width={300} />
                </div>

                {/* BIG COMPANIES AREA */}
                <div className='bg-gray-50 py-16'>
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">Big Companies Area Here</h1>
                        <p className="text-gray-400 mt-4">
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Image src="/logo.png" alt="Big Companies" height={400} width={1600} />
                    </div>
                </div>

                {/* WORK WITH US SECTION */}
                <div className="bg-blue-500 py-16  text-white">
                    <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                        {/* Left Column - Text */}
                        <div className="flex flex-col w-full lg:w-1/2 space-y-6">
                            <h4 className="font-sans font-bold text-lg">WORK WITH US</h4>
                            <h1 className="font-Montserrat font-bold text-4xl lg:text-6xl">Now Let&apos;s Grow Yours</h1>
                            <p className="font-sans text-sm max-w-md">
                                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
                            </p>
                            <button className="bg-blue-400 py-3 px-12 rounded-md text-white text-lg">
                                Button
                            </button>
                        </div>

                        {/* Right Column - Image */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <Image
                                src="/pink.png"
                                alt="Pink Dress Girl"
                                height={636}
                                width={470}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
