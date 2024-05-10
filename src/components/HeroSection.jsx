import React from 'react'
import HeroImage from '../assets/pizzacover.jpg'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${HeroImage})` }} className="HeroContainer bg-cover  h-[80vh] bg-no-repeat mb-4 flex-col text-center justify-center items-center ">
        <h1 className="mb-4 pt-28 font-extrabold leading-none tracking-tight text-white md:text-5xl text-[20px] lg:text-[50px] dark:text-white">Let's Go the <span id='italian' className="text-yellow-400 dark:text-blue-500">#1 Italian Delight </span> Hot & Tasty!</h1>
        <p id='para' className="mb-6 md:text-[20px] text-[18px] bg-normal  text-gray-100 sm:px-16 xl:px-48 dark:text-gray-400" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        <Link to={"/menu"}>
          <a  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border-2 text-white bg-red-500 rounded-lg hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Order Now
          </a>
        </Link>
      </div>

    </>
  )
}

export default HeroSection