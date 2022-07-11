import React, { useState } from "react";
export const Header = () => {
  const [isExpanded, setisExpanded] = useState<boolean>(false);

  return (
    <nav className="bg-white dark:bg-slate-800 dark:text-zinc-50 ">
      <div
        id="main-cointainer"
        className="flex container items-center p-2 sm:justify-between"
      >
        <div className="w-1/12 sm:hidden">
          <a onClick={() => setisExpanded(!isExpanded)}>
            <svg className="h-8 w-8 dark:fill-white" viewBox="0 0 20 20">
              <path d="M17.5 6h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
              <path d="M17.5 11h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
              <path d="M17.5 16h-15c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h15c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"></path>
            </svg>
          </a>
        </div>
        <div className="w-1/12 sm:hidden"></div>
        <div className="w-screen sm:w-auto text-center min-w-fit">
          <a href="#" className="font-semibold">
            Shoping Cart
          </a>
        </div>
        <div className="hidden sm:block ml-auto mr-2">
          <a href="#" className="min-w-fit mr-2">
            Home
          </a>
          <a href="#" className="min-w-fit mr-2">
            Shop
          </a>
          <a href="#" className="min-w-fit mr-2">
            About
          </a>
        </div>
        <div className="flex min-w-fit w-2/12 sm:w-auto">
          <div id="cart-icon" className="ml-auto min-w-fit sm:w-auto pr-2">
            <svg className="h-8 w-8 dark:fill-white" viewBox="0 0 20 20">
              <path d="M8 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM8 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"></path>
              <path d="M15 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM15 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"></path>
              <path d="M17.539 4.467c-0.251-0.297-0.63-0.467-1.039-0.467h-12.243l-0.099-0.596c-0.131-0.787-0.859-1.404-1.658-1.404h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c0.307 0 0.621 0.266 0.671 0.569l1.671 10.027c0.131 0.787 0.859 1.404 1.658 1.404h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-10c-0.307 0-0.621-0.266-0.671-0.569l-0.247-1.48 9.965-0.867c0.775-0.067 1.483-0.721 1.611-1.489l0.671-4.027c0.067-0.404-0.038-0.806-0.289-1.102zM16.842 5.404l-0.671 4.027c-0.053 0.316-0.391 0.629-0.711 0.657l-10.043 0.873-0.994-5.962h12.076c0.117 0 0.215 0.040 0.276 0.113s0.085 0.176 0.066 0.291z"></path>
            </svg>
          </div>
          <div id="user-avatar" className="min-w-fit sm:w-auto">
            <img
              className="ml-auto rounded-full h-8 w-8 "
              src="https://avatars.githubusercontent.com/u/20482805?v=4"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={`${isExpanded ? "" : "hidden"} sm:hidden overflow-hidden`}
      >
        <a href="#" className="block text-center py-2 hover:bg-slate-600">
          Home
        </a>
        <a href="#" className="block text-center py-2 hover:bg-slate-600">
          Shop
        </a>
        <a href="#" className="block text-center pt-2 pb-2 hover:bg-slate-600">
          About
        </a>
      </div>
    </nav>
  );
};
