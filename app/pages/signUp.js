"use client";

import React, { useState, useEffect} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUpPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [namePlaceholder, setNamePlaceholder] = useState("Full Name");
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email Address");

  useEffect(() => {
    const updatePlaceholders = () => {
      if (window.innerWidth >= 1024) {
        setNamePlaceholder("Enter your full name");
        setEmailPlaceholder("Enter your email address");
      } else {
        setNamePlaceholder("Full Name");
        setEmailPlaceholder("Email");
      }
    };

    updatePlaceholders();
    window.addEventListener("resize", updatePlaceholders);
    return () => window.removeEventListener("resize", updatePlaceholders);
  }, []);


  return (
    <div className="flex min-h-screen font-sans max-w-[1440px] mx-auto">
      {/* Left Panel - Form */}
      <div className="w-full md:w-1/2 bg-white p-8 xl:p-20 flex flex-col justify-center relative">
        {/* Close button */}
        <button className="absolute top-6 right-6 text-black text-2xl font-bold">
          ×
        </button>

        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <img
            src="./astro/logo.png"
            alt="Asoro Logo"
            className="h-[47px] top-[61px] left-[289px]  w-[153px]"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl [font-inter] text-center mb-6">Sign up</h2>

        {/* Phone Input */}
        <div className="mb-4">
          <label className="block text-sm font-inter">
            Enter Mobile Number
          </label>
          <PhoneInput
            country={"ng"}
            inputClass="!w-full !py-3 !pl-12 !bg-gray-200"
            containerClass="!w-full"
            placeholder="Enter Mobile Number "
            inputProps={{ name: "phone", required: true }}
            enableSearch
          />
        </div>

        {/* Full Name and Email */}
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label
              htmlFor="fullName"
              className="block text-sm font-lato text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="FullName"
              placeholder={namePlaceholder}
              className="w-full bg-gray-200 border border-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-lato  text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder={emailPlaceholder}
              className="w-full bg-gray-200 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Car Make */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Car Make
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Brand"
              className="w-1/3 bg-gray-200 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Model"
              className="w-1/3 bg-gray-200 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Year"
              className="w-1/3 bg-gray-200 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Car VIN */}
        <div className="mb-4">
          <label
            htmlFor="carVin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Car VIN
          </label>
          <input
            type="text"
            id="carVin"
            placeholder="Enter Car VIN"
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4 relative">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            className="w-full bg-gray-200 border border-gray-300 rounded-md px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <img
            src="./astro/password.png"
            alt="Toggle Password"
            onClick={() => setPasswordVisible(!passwordVisible)}
            className="absolute right-3 top-2.5 h-6 cursor-pointer"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-6">
          <input type="checkbox" id="agree" className="mr-2" defaultChecked />
          <label htmlFor="agree" className="text-sm text-gray-600">
            I agree to the terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-900 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition-colors">
          Next
        </button>
      </div>

      {/* Right Panel - Brand Section */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-300 items-center justify-center">
        <div className="text-center flex flex-col justify-center items-center">
          <img
            src="./astro/logo2.png"
            alt="Asoro Logo"
            className="max-w-[80%] h-auto mx-auto -mt-20"
          />
          <img
            src="./astro/slider.png"
            alt="Slider"
            className="w-14 h-2 mb-6"
          />
          <p className="text-white text-[36px] font- inter ">
            Asoro Automotive
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;