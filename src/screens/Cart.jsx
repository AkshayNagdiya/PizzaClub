import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import Modal from "./Popup";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const Total = cartItems.reduce((p, c) => p + c.qty * c.price, 0);
  const [shipping, setShipping] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const shippedCharge = parseInt(shipping);

  const GST = (Total * 18) / 100;
  const Discount = ((Total + GST) * 10) / 100;
  const Dis = parseInt(Discount);

  if (cartItems.length === 0) {
    return (
      <>
        <div className="w-100 flex justify-center items-center flex-col">
          <h1 className="text-center text-red-400 text-2xl mt-10 ">
            No Item yet..
          </h1>
          <img
            className="w-[400px]"
            src="https://assets-v2.lottiefiles.com/a/cbbb0d80-1185-11ee-bb81-1f8a0ee065ae/kGZag9os6n.gif"
            alt=""
          />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="font-[sans-serif] bg-gray-50 px-4 mt-2">
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
          <div className="xl:col-span-2 h-max rounded-md top-0">
            <h2 className="text-2xl font-bold text-gray-500 mb-3 mt-2">
              Order Summary
            </h2>
            <div className=" lg:h-screen lg:sticky lg:top-0 bg-gray-400 rounded-lg ">
              <div className="relative h-full">
                <div className="p-8 lg:overflow-auto lg:h-[calc(100vh-60px)]">
                  <div className="space-y-6  mt-2 p-5">
                    {cartItems?.map((cart) => (
                      <CartItem key={cart.id} cart={cart} />
                    ))}
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 bg-gray-600 w-full p-4">
                  <h4 className="flex flex-wrap gap-4 text-base text-white">
                    Total <span className="ml-auto">₹{Total}</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <div className="p-2 lg:overflow-auto ">
              <h2 className="text-2xl font-bold text-gray-500 mb-3">
                Order Details
              </h2>
              <div className="space-y-6">
                <div className="card bg-gray-400 text-white rounded-3">
                  <div className="card-body ">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-2">Card details</h5>
                    </div>

                    <p className="small mb-2">Card type</p>
                    <a type="submit" className="text-red-700">
                      <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                    </a>
                    <a type="submit" className="text-black">
                      <i className="fab fa-cc-visa fa-2x me-2"></i>
                    </a>
                    <a type="submit" className="text-blue-700">
                      <i className="fab fa-cc-amex fa-2x me-2"></i>
                    </a>
                    <a type="submit" className="text-yellow-700">
                      <i className="fab fa-cc-paypal fa-2x"></i>
                    </a>

                    <form className="mt-4">
                      <div className="form-white mb-4">
                        <input
                          type="text"
                          id="typeName"
                          className="form-control border-1 border-red-900"
                          siez="17"
                          placeholder="Cardholder's Name"
                        />
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input
                          type="text"
                          id="typeText"
                          className="form-control form-control-lg"
                          siez="17"
                          placeholder="1234 5678 9012 3457"
                        />
                        <label className="form-label">Card Number</label>
                      </div>

                      <div className="row mb-4">
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control form-control-lg"
                              placeholder="MM/YYYY"
                              size="7"
                            />
                            <label className="form-label">Expiration</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input
                              type="password"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;"
                              size="1"
                            />
                            <label className="form-label">Cvv</label>
                          </div>
                        </div>
                      </div>
                    </form>

                    <hr className="my-4" />

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Item</p>
                      <p className="mb-2">({cartItems.length})</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Subtotal</p>
                      <p className="mb-2">₹{Total}</p>
                    </div>

                    <div className="d-flex justify-content-between my-1">
                      <p className="mb-2">Shipping Charge</p>
                      <select
                        className="text-black"
                        onChange={(e) => setShipping(e.target.value)}
                      >
                        <option selected>Select</option>
                        <option value={5}>4KM -₹5 Charge</option>
                        <option value={15}>8KM -₹15 Charge</option>
                        <option value={20}>10KM -₹20 Charge</option>
                      </select>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">GST Tax</p>
                      <p className="mb-2">₹{GST}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p className="mb-2">Discount 10%</p>
                      <p className="mb-2">₹{Discount}</p>
                    </div>

                    <div className="d-flex justify-content-between mb-4">
                      <p className="mb-2 text-red-600">Total(Incl. taxes)</p>
                      <p className="mb-2 text-red-600">
                        ₹{Total + GST + shippedCharge - Dis}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-info btn-block btn-lg btn-white bg-white text-black"
                      onClick={() => setModalOpen(true)}
                    >
                      <div className="d-flex justify-content-between ">
                        <span className="text-red-500">
                          ₹{Total + GST + shippedCharge - Dis}
                        </span>
                        <span>
                          Checkout{" "}
                          <i className="fas fa-long-arrow-alt-right ms-2"></i>
                        </span>
                      </div>
                    </button>

                    {isModalOpen && (
                      <Modal onClose={() => setModalOpen(false)}>
                        <form className="w-full bg-red-400 p-4 rounded-lg">
                          <div className="grid sm:gap-6 mb-3 sm:mb-6 md:grid-cols-2">
                            <div>
                              <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                First name
                              </label>
                              <input
                                type="text"
                                id="first_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Your Name"
                                required
                              />
                            </div>

                            <div>
                              <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Last name
                              </label>
                              <input
                                type="text"
                                id="last_name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter Your Surname"
                                required
                              />
                            </div>

                            <div>
                              <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Phone number
                              </label>
                              <input
                                id="phone"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="91+"
                              />
                            </div>

                            <div>
                              <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                State
                              </label>
                              <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Place Name"
                                required
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <label className="block sm:mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Shipping address
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Place Name"
                              required
                            />
                            <select
                              type="tel"
                              id="phone"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                              <option value="india">India</option>
                              <option value="usa">United States</option>
                              <option value="south">South Africa</option>
                              <option value="dubai">Dubai</option>
                            </select>
                          </div>

                          <div className="sm:mb-6 mt-3">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                              Email address
                            </label>
                            <input
                              type="email"
                              id="email"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="john.doe@.com"
                              required
                            />
                          </div>

                          <div className="flex items-start my-2">
                            <div className="flex items-center sm:h-5">
                              <input
                                id="remember"
                                type="checkbox"
                                className="w-4 sm:h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                                required
                              />
                            </div>
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              I agree with the{" "}
                              <a
                                href="#"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                              >
                                terms and conditions
                              </a>
                              .
                            </label>
                          </div>
                          <button
                            href="https://www.phonepe.com/business-solutions/payment-gateway/"
                            type="submit"
                            className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Payment
                          </button>
                        </form>
                      </Modal>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
