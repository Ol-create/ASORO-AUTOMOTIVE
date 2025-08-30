// components/CardDetailsModal.js
"use client";
import React from "react";
import Image from "next/image";

export default function CardDetailsModal({ isVisible, onClose, onEnter }) {
  if (!isVisible) return null;

  const handleSubmit = (e) => {
    e.preventDefault(); 
    onEnter();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg mx-auto overflow-y-auto max-h-screen py-8">
        {/* ... (modal content) ... */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Card account details
          </h2>
          <p className="text-gray-500">Fill in your card details below</p>
        </div>

        <div className="flex justify-center mb-6">
          <Image
            src="/images/card.png"
            width={600}
            height={400}
            alt="Card Preview"
            className="max-w-full h-auto"
          />
        </div>

        {/* Form Fields - Add onSubmit handler */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Card Number"
              className="px-3 bg-[#D9D9D9] py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expiry date"
                className="px-3 bg-[#D9D9D9] py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="VCC"
                className="px-3 bg-[#D9D9D9] py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>
          </div>
          <input
            type="text"
            placeholder="Card holder Name"
            className="w-full px-3 bg-[#D9D9D9] py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full px-3 bg-[#D9D9D9] py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-[#122F7B] text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
