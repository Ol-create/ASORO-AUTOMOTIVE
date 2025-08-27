// src/components/PaymentSuccessModal.jsx
import Image from "next/image";
import React, { useState } from "react";

import RateModal from "./RateModal";


const PaymentSuccessModal = ({ onClose }) => {
  const [isRateVisible, setIsRateVisible] = useState(false);

  const handleRateModal = () => {
    setIsRateVisible(true)
  }
  return (
    // The backdrop
    <div>
      <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4">
        {/* The modal container */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto transform transition-all">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Success icon */}
          <div className="flex justify-center my-4">
            <Image
              src="/images/pay-check.png"
              width={50}
              height={50}
              alt="pay check"
            />
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-bold text-gray-800 mb-6">
            Payment Successful
          </h2>

          {/* Action buttons */}
          <div className="space-y-4">
            <button
              className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors"
              onClick={handleRateModal}
            >
              Rate the Product
            </button>
            <button className="w-full py-3 px-4 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">
              Purchase Invoice
            </button>
          </div>
        </div>
      </div>
      {isRateVisible ? <RateModal onClose={() => setIsRateVisible(false)} /> : null}
    </div>
  );
};

export default PaymentSuccessModal;
