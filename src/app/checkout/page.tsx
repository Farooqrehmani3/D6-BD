
"use client";  

import { useRouter } from "next/navigation"; // 
import { useState, CSSProperties } from "react";

export default function CheckoutPage() {
  const router = useRouter(); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Checkout successful!");
    
    // ✅ Redirect to checkout confirmation page after form submission
    router.push("/checkout");
  };

  const containerStyle: CSSProperties = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const formStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const formGroupStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const submitButtonStyle: CSSProperties = {
    padding: "10px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 className="flex justify-center text-green-600">Checkout</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label>Full Name</label>
          <input className="bg-gray-100" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div style={formGroupStyle}>
          <label>Email</label>
          <input className="bg-gray-100" type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div style={formGroupStyle}>
          <label>Address</label>
          <input className="bg-gray-100" type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div style={formGroupStyle}>
          <label>Card Number</label>
          <input className="bg-gray-100" type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
        </div>
        <div style={formGroupStyle}>
          <label>Expiry Date</label>
          <input className="bg-gray-100" type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} placeholder="MM/YY" required />
        </div>
        <div style={formGroupStyle}>
          <label>CVV</label>
          <input className="bg-gray-100" type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
        </div>
        <button type="submit" style={submitButtonStyle}>Place Order</button>
      </form>
    </div>
  );
}

