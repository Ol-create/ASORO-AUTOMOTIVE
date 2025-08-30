// src/components/RateModal.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const RateModal = ({ onClose }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Comment:", comment);
    onClose(); // Close modal after submit
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold text-gray-800">
          Rate our services
        </h2>
        <p className="text-center text-sm text-gray-500 mb-4">
          Your feedback will help improve our services
        </p>

        {/* Stars */}
        <div className="flex justify-center space-x-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={(hover || rating) >= star ? "#facc15" : "none"}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.401c.502.036.705.664.322.988l-4.19 3.602a.563.563 0 00-.182.557l1.29 5.385c.114.476-.398.849-.81.592l-4.726-2.885a.563.563 0 00-.586 0l-4.726 2.885c-.412.257-.924-.116-.81-.592l1.29-5.385a.563.563 0 00-.182-.557l-4.19-3.602a.563.563 0 01.322-.988l5.518-.401a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </button>
          ))}
        </div>

        {/* Comment box */}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Additional comments"
          className="w-full border rounded-lg p-2 text-sm mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          rows={3}
        />

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="w-full py-2 rounded-lg bg-[#15337D] text-white font-semibold cursor-pointer transition-colors"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default RateModal;
