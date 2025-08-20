// pages/PaymentMethods.js
"use client";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import CardDetailsModal from "../components/CardDetailsModal"; // Adjust path as needed

export default function PaymentMethods() {
  const [selected, setSelected] = useState("debit");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDebitCardClick = () => {
    setSelected("debit");
    setIsModalVisible(true);
  };

  const handleCashClick = () => {
    setSelected("cash");
    setIsModalVisible(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4 w-full">
      <div className="bg-white w-full max-w-md rounded-2xl shadow p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-semibold text-gray-800">
            Payment Methods
          </h1>
        </div>
        {/* Subtext */}
        <p className="text-center text-gray-500 mb-8">
          You can choose any payment method that is convenient
        </p>

        {/* Payment Options */}
        <div className="space-y-4">
          {/* Debit Card */}
          <div
            onClick={handleDebitCardClick}
            className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition 
            ${
              selected === "debit"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/debit-card.png"
                width={50}
                height={50}
                alt="debit card"
              />
              <div>
                <p className="font-semibold text-gray-800">Debit Card</p>
                <p className="text-sm text-gray-500">
                  Pay with Mastercard, Visa, Verve
                </p>
              </div>
            </div>
            {selected === "debit" && (
              <Image
                src="/images/check.png"
                width={20}
                height={20}
                alt="check"
              />
            )}
          </div>
          {/* Cash on Delivery */}
          <div
            onClick={handleCashClick}
            className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition 
            ${
              selected === "cash"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src="/images/money.png"
                width={50}
                height={50}
                alt="cash"
              />
              <div>
                <p className="font-semibold text-gray-800">Cash On Delivery</p>
                <p className="text-sm text-gray-500">Pay Cash to our courier</p>
              </div>
            </div>
            {selected === "cash" && (
              <Image
                src="/images/check.png"
                width={20}
                height={20}
                alt="check"
              />
            )}
          </div>
        </div>
      </div>

      {/* Conditionally render the modal */}
      <CardDetailsModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
      />
    </div>
  );
}
