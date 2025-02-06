/** @type {import('next').NextConfig} */
"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // 
import {  CSSProperties } from "react";


import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Search, ShoppingCart, Heart } from "lucide-react";

 const submitButtonStyle: CSSProperties = {
    padding: "10px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
const sanity = createClient({
  projectId: "ltpsgvbk", // Your Sanity project ID
  dataset: "production", // Your dataset name
  apiVersion: "2023-01-01", // Use a valid API version
  useCdn: true, // Set to true for faster read operations
});

interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  discountPercentage: number;
  imageUrl: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
      *[_type == "product"] {
        _id,
        title,
        price,
        description,
        discountPercentage,
        "imageUrl": productImage.asset->url,
        tags
      }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart.`);
  };

  const truncateDescription = (description: string): string => {
    return description.length > 100 ? `${description.slice(0, 100)}...` : description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      

      {/* Breadcrumb */}
      <div className="">
        <div className="flex flex-justify-end text-xl font-bold my-5">
          
          <ul>
            <li  className="flex flex-justify-end  text-gray-500">Home <ArrowRight className="mt-2 gap-4" size={14} color="black" /> Shop</li>
          </ul>
          
        </div>
      </div>

      {/* Product Display */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="mt-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-slate-800 mt-2 text-sm">
                  {truncateDescription(product.description)}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-green-600">{product.discountPercentage}% OFF</p>
                  )}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-slate-400 text-black rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
    
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
      
      <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">Your cart is empty, please add products.</p>
          
        )}
        <Link href="/checkout">
        <button type="submit" style={submitButtonStyle}>Proceed to checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCards;
