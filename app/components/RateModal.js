
import React from "react";

const RateModal = ({ onClose }) => {
  return (
    // The backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-600 bg-opacity-75">
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
          <div className="relative p-2 rounded-full bg-green-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-xl font-bold text-gray-800 mb-6">
          Payment Successful
        </h2>

        {/* Action buttons */}
        <div className="space-y-4">
          <button className="w-full py-3 px-4 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50 transition-colors">
            Rate the Product
          </button>
          <button className="w-full py-3 px-4 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors">
            Purchase Invoice
          </button>
        </div>
      </div>
    </div>
  );
};

export default RateModal;
