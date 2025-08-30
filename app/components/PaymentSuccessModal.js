// src/components/PaymentSuccessModal.jsx
import Image from "next/image";
import React, { useState, useEffect } from "react";
import RateModal from "./RateModal";
import InvoiceModal from "./InvoicePage";

const PaymentSuccessModal = ({ onClose }) => {
  const [activeModal, setActiveModal] = useState(null);

  // Close modal on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center p-4 animate-fadeIn"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal container */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto transform transition-all scale-95 animate-scaleIn">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Close modal"
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
              alt="Payment successful"
            />
          </div>

          {/* Title */}
          <h2 className="text-center text-xl font-bold text-gray-800 mb-6">
            Payment Successful
          </h2>

          {/* Action buttons */}
          <div className="space-y-4">
            <button
              className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:text-white hover:bg-[#15337D] transition-colors cursor-pointer"
              onClick={() => setActiveModal("rate")}
            >
              Rate the Product
            </button>
            <button
              className="w-full py-3 px-4 text-gray-800 rounded-lg border border-gray-300 hover:text-white font-semibold hover:bg-[#15337D] transition-colors cursor-pointer"
              onClick={() => setActiveModal("invoice")}
            >
              Purchase Invoice
            </button>
          </div>
        </div>
      </div>

      {/* Sub-modals */}
      {activeModal === "rate" && (
        <RateModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "invoice" && (
        <InvoiceModal onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
};

export default PaymentSuccessModal;
