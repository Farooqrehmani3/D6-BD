import React from "react";
// import Image from "next/image";
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

export default function Header() {
  return (
    <div>
      {/* Top Info Bar */}
      <div className="bg-black text-white flex flex-wrap justify-between items-center px-4 py-2 md:flex-nowrap">
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

      {/* Navigation Bar */}
      <div>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Bandage
          </Link>

          {/* Navigation Links */}
          <ul className=" md:flex flex flex-justify-center space-x-4">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "About", path: "/about" },
              { name: "Blog", path: "/pages" },
              { name: "Shop", path: "/desktop" },
              { name: "Pricing", path: "/pricing" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link href={item.path} className="hover:underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

     

          {/* Right Icons & Login/Register */}
          <div className="flex space-x-4 items-center">
            <Link href="/login" className="hover:underline text-sm">
              Login / Register
            </Link>
            
            <Search className="w-5 h-5" />
            <ShoppingCart className="w-5 h-5" />
            <Heart className="w-5 h-5" />
          </div>
          
        </div>
      </nav>
      </div>
    </div>
  );
}
