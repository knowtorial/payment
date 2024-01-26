"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = () => {

  const [selectedGateway, setSelectedGateway] = useState('');

  const handleGatewaySelection = (selectedGateway) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("gateway", selectedGateway);
      setSelectedGateway(selectedGateway)
    }
  };


  useEffect(() => {

    const storedGateway = localStorage.getItem('gateway');

    if (storedGateway) {
      setSelectedGateway(storedGateway);
    }
  }, [handleGatewaySelection]);

  return (

    <>
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
        {/* ========== HEADER ========== */}
        <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm py-4">
          <nav
            className="w-full px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              <a
                className="flex-none text-xl font-semibold focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="#"
                aria-label="Brand"
              >
                Admin
              </a>
            </div>
            <div
              id="navbar-collapse-with-animation"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
            >
              <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                <a
                  className="font-medium focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                  aria-current="page"
                >
                  Landing
                </a>
                <a
                  className="font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  Account
                </a>
                <a
                  className="font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  Work
                </a>
                <a
                  className="font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-600"
                  href="#"
                >
                  Blog
                </a>
              </div>
            </div>
          </nav>
        </header>


        <main id="content" role="main">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">


            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <div
                className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg text-gray-800 bg-gray-200"
              >
                Your Gateway
              </div>
            </div>
            <div className="mt-8">
              <div className="flex flex-row justify-center gap-4">
                <Link href="#">
                  <button
                    className={`${selectedGateway == 'razor' ? "bg-red-500 px-4 py-1 rounded-lg text-white" : ""} text-xl px-4 py-1 rounded-lg border-2`}
                    onClick={() => handleGatewaySelection("razor")}
                  >
                    Razor Pay
                  </button>
                </Link>
                <Link href="#">
                  <button
                    className={`${selectedGateway == 'paypal' ? "bg-red-500 px-4 py-1 rounded-lg text-white" : ""} text-xl px-4 py-1 rounded-lg border-2`}
                    onClick={() => handleGatewaySelection("paypal")}
                  >
                    PayPal
                  </button>
                </Link>
              </div>
            </div>
          </div >
        </main >

      </div >

    </>
  );
};

export default Page;
