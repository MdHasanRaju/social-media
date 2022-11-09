import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showBar, setShowBar] = useState(true);

  const toggleBar = () => {
    setShowBar(!showBar);
  };

  return (
    <div className="p-4 pb-0  border-b shadow-lg sm:w-screen bg-[#ffffff] md:flex md:items-center md:justify-between md:pb-2 fixed top-0 z-[100]">
      {/* <!--logo--> */}
      <div className="mb-4 flex items-center justify-between md:mb-0">
        <h1 className="leading-none text-2xl text-blue-500">
          <Link to='/' 
            className="font-bold no-underline text-blue-500 hover:to-blue-600"
          >
            MetaViral Pro
          </Link>
        </h1>
        {/* <!--bar for mobile menu--> */}
        <a
          onClick={toggleBar}
          href="#"
          className="text-black md:hidden hover:text-orange"
        >
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>
      {/* <!--search--> */}
      <form className={`${showBar ? "block " : "hidden"} lg:w-1/3 md:w-1/4 md:block lg:block`}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="Search People..."
            required=""
          />
        </div>
      </form>

      {/* <!--nav--> */}
      <nav className={`${showBar  ? "block " : "hidden"} md:block lg:block`}>
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4 sm:mt-4 md:mt-0">
          <div  className="indicator"> 
          <i class="fa-solid fa-user text-xl"></i> 
             <span class="badge  bg-[#cc1016] border-[#cc1016] p-0 badge-sm indicator-item">+3</span> 
             </div>
          </li>

          <li className="md:ml-8 sm:mt-4 md:mt-0">
             <div  className="indicator"> 
             <i class="fas fa-comment-dots text-xl"></i>
             <span class="badge bg-[#cc1016] border-[#cc1016] badge-sm p-0 indicator-item">+9</span> 
             </div>
          </li>
         
          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <div class="indicator">
            <i class="fa-sharp fa-solid fa-bell text-xl"></i>
              <span class="badge bg-[#cc1016] border-[#cc1016] badge-sm p-0 indicator-item">+9</span>
            </div>
          </li>
          <li className="md:ml-8 sm:mt-4 md:mt-0"> 
             <p className="font-medium">Mathews</p>  
          </li>

          <li className="md:ml-8 sm:mt-4 md:mt-0">
            <label tabIndex="0" class="btn btn-ghost btn-circle avatar online placeholder">
              <div class="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
