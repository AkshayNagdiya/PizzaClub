import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../feature/cart/cartSlice";
import { toast } from "react-toastify";

const MainSection = ({ product }) => {
  const { desc, name, img, rating, id, price } = product;

  const [addon, setAddon] = useState(0);

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(add({ id, name, img, price: price + parseInt(addon), qty: 1 }));
    toast.success(`Add ${name}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div className="flex justify-around hover:bg-red-400 hover:text-white rounded-lg transition delay-160 duration-300 ease-in-out">
        <div className="w-full max-w-sm border-gray-300 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,.3)]  dark:border-gray-700">
          <a href="#">
            <img
              className="p-2 h-[200px] w-full"
              src={img}
              alt="product image"
            />
          </a>
          <div className="px-4 pb-5">
            <div href="#">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {name}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {desc.slice(0, 130)}...
              </p>
            </div>
            <hr className="border-gray-400 mt-3" />
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  className={
                    rating >= 1
                      ? "w-4 h-4 text-yellow-200 dark:text-gray-600"
                      : "w-4 h-4 text-gray-300 dark:text-gray-600"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className={
                    rating >= 2
                      ? "w-4 h-4 text-yellow-200 dark:text-gray-600"
                      : "w-4 h-4 text-gray-300 dark:text-gray-600"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className={
                    rating >= 3
                      ? "w-4 h-4 text-yellow-200 dark:text-gray-600"
                      : "w-4 h-4 text-gray-300 dark:text-gray-600"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className={
                    rating >= 4
                      ? "w-4 h-4 text-yellow-200 dark:text-gray-600"
                      : "w-4 h-4 text-gray-300 dark:text-gray-600"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className={
                    rating >= 5
                      ? "w-4 h-4 text-yellow-200 dark:text-gray-600"
                      : "w-4 h-4 text-gray-300 dark:text-gray-600"
                  }
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                {product.rating}
              </span>
            </div>

            <div className="flex gap-2">
              <div className="w-[50%]">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Size
                </label>
                <select
                  onChange={(e) => setAmount(e.target.value)}
                  id="countries"
                  className="bg-gray-50  border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select Size</option>
                  <option value={price}>Regular ₹{price}</option>
                  <option value={price + 50}>Medium ₹{price + 50}</option>
                  <option value={[price + 80]}>Large ₹{price + 80}</option>
                </select>
              </div>
              <div className="w-[50%]">
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Crust
                </label>
                <select
                  onChange={(e) => setAddon(e.target.value)}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Addon</option>
                  <option value={5}> Extra Sauce ₹5</option>
                  <option value={20}> Extra Sauce, Yogurt, Cheese ₹20</option>
                  <option value={25}>
                    {" "}
                    Extra Sauce, Yogurt, Cheese,Corn ₹25
                  </option>
                  <option value={30}> Extra Sauce, Yogurt, Cabbage ₹30 </option>
                  <option value={35}>
                    {" "}
                    Extra Sauce, Yogurt, fenugreek ₹35{" "}
                  </option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <p>Price :{price} Rs</p>
              <button
                className="text-white bg-red-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleAdd}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
