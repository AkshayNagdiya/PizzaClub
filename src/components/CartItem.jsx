import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  decrementQty,
  incrementQty,
  remove,
} from "../feature/cart/cartSlice";
import { toast } from "react-toastify";
import Cart from "../screens/Cart";

const CartItem = ({ cart }) => {
  const { cartItems } = useSelector((state) => state.cart);
  let { name, img, id, price, qty } = cart;

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove(id));
    toast(` 😞 ${name} Remove your Item`, {
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

  const handleAdd = (cart) => {
    dispatch(add(cart));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQty({ id }));
  };

  const handleDecrement = (id) => {
    qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 items-start gap-6 bg-gray-700 p-2 py-4 rounded-lg">
        <div className="px-4 py-6 shrink-0 bg-gray-50 rounded-md">
          <img src={img} className="w-full object-contain" />
        </div>
        <div>
          <h3 className="text-base text-white px-3">{name}</h3>
          <ul className="text-xs text-white space-y-3 mt-4 px-3">
            <li className="flex flex-wrap gap-4 sm:text-lg">
              <span className="flex justify-between w-full">
                <p>Size</p>
                <p>Medium</p>
              </span>
            </li>
            <li className="flex flex-wrap gap-4 sm:text-lg d-flex justify-between ">
              <p>Quantity</p>
              <span>
                <div
                  className="sm:p-1 inline-block border border-gray-200 rounded-lg dark:bg--900 dark:border-gray-700"
                  data-hs-input-number
                >
                  <div className="flex items-center gap-x-1.5">
                    <button
                      type="button"
                      className=" size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      data-hs-input-number-decrement
                      onClick={() => handleDecrement(id)}
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                    <p className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white">
                      {qty}
                    </p>
                    <button
                      type="button"
                      className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      data-hs-input-number-increment
                      onClick={() => handleIncrement(id)}
                    >
                      <svg
                        className="flex-shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    </button>
                  </div>
                </div>
              </span>
            </li>
            <li className="flex flex-wrap gap-4 sm:text-lg">
              Total Price <span className="ml-auto">{price*qty}</span>
            </li>
            <button
              className="btn btn-sm btn-white bg-red-400 text-light hover:bg-gray-400"
              onClick={() => handleDelete(cart.id)}
            >
              Remove
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CartItem;
