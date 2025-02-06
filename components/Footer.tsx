import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center py-6 px-4">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-[#252b42] text-2xl font-bold">Bandage</h1>
          <div className="flex gap-6">
            <a href="https://facebook.com">
              <Image src="/fb.jpg" alt="Facebook" height={24} width={24} />
            </a>
            <a href="https://instagram.com">
              <Image src="/instagram.jpg" alt="Instagram" height={24} width={24} />
            </a>
            <a href="https://twitter.com">
              <Image src="/twitter.png" alt="Twitter" height={24} width={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e6e6e6] my-6" />

      {/* Main Footer Content */}
      <section className="py-12 ">
        <div className="max-w-screen-xl bg-gray-800 mx-auto grid grid-cols-1 mt-4 md:grid-cols-3 gap-12 px-4">
          {/** Footer Links Section **/}
          {[
            { title: "Company Info", links: ["About Us", "Careers", "We Are Hiring", "Blog"] },
            { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Cookies", "Refund Policy"] },
            { title: "Features", links: ["Business Marketing", "User Analytics", "Live Chat", "Unlimited Support"] },
            { title: "Resources", links: ["iOS & Android", "Watch a Demo", "Customers", "API"] },
          ].map((section, idx) => (
            <div key={idx}>
              <h2 className="text-[#252b42] text-base font-bold">{section.title}</h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                {section.links.map((link, index) => (
                  <a key={index} href="#" className="text-[#727272] text-sm font-bold">
                    {link}
                  </a>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Get in Touch Section */}
        <div className="max-w-screen-xl mx-auto mt-12 px-4 flex flex-col items-center text-center">
          <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
          <div className="relative mt-3 w-full max-w-md">
            <input
              type="email"
              className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm"
              placeholder="Your Email"
            />
            <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
              Subscribe
            </button>
          </div>
          <p className="text-[#727272] text-xs mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#f9f9f9] py-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-[#727272] text-sm font-bold">Made with love by Finland. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://facebook.com">
              <Facebook size={24} color="#3b5998" />
            </a>
            <a href="https://instagram.com">
              <Instagram size={24} color="#E4405F" />
            </a>
            <a href="https://twitter.com">
              <Twitter size={24} color="#1DA1F2" />
            </a>
            <a href="https://youtube.com">
              <Youtube size={24} color="#FF0000" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
