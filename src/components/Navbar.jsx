import React from "react";

import PizzaLogo from "../assets/pizzaclub.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <header className="relative z-10 mb-8 flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm  dark:bg-gray-800 ">
        <nav
          className="fixed bg-white  max-w-[95rem] w-full mx-auto px-4 py-[5px] flex flex-wrap basis-full items-center justify-between"
          aria-label="Global"
        >
          <Link to={"/"}>
            <div
              className="sm:order-1 d-flex items-center  font-semibold dark:text-white"
              href="#"
            >
              <img src={PizzaLogo} style={{ width: "60px" }} alt="" />
              <span className="d-flex items-center">
                <h1 className="text-bold text-2xl fs-3 mx-2 text-yellow-300">
                  Pizza
                </h1>
                <h1 className="text-bold text-2xl fs-3 text-red-400">Club</h1>
              </span>
            </div>
          </Link>

          <div className="sm:order-3 flex items-center gap-x-2">
            <button
              type="button"
              className="sm:hidden hs-collapse-toggle p-2.5 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-alignment"
              aria-controls="navbar-alignment"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <Link to={"/cart"}>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                CART({cartItems.length})
              </button>
            </Link>
          </div>
          <div
            id="navbar-alignment"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
          >
            <div className="flex flex-col gap-4 mt-3 sm:gap-5 sm:flex-row sm:items-center sm:mb-3 sm:ps-5">
              <Link to={"/"}>
                <h4 className="sm:font-bold text-red-400 text-[18px] sm:text-[18px] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  HOME
                </h4>
              </Link>

              <Link to={"/SpecialM"}>
                <h4 className="sm:font-bold text-red-400 text-[18px] sm:text-[18px] hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  SPECIAL MENU
                </h4>
              </Link>

              <Link>
                <h4 className="sm:font-bold text-red-400 text-[18px] sm:text-[18px] hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                  CONTANCT
                </h4>
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
