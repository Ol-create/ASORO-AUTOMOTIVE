"use client";

import React, { useState } from "react";
import SignUpPage from "./pages/signUp";
import PaymentSuccessModal from "./components/PaymentSuccessModal";
import RateModal from "./components/RateModal";
import PaymentMethods from "./pages/PaymentMethod";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* <button
        onClick={handleOpenModal}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Show Payment Modal
      </button> */}

      {/* {isModalOpen && <PaymentSuccessModal onClose={handleCloseModal} />} */}
      {/* {isModalOpen && <RateModal onClose={handleCloseModal} />} */}
      <PaymentMethods  />
    </div>
  );
}

export default App;
