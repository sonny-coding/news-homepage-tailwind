import React from "react";
import { Icon, IconMenu, IconMenuClose } from "../assets";
import { navItems } from "../data";

const Navbar = ({ sideNav, setSideNav }) => {
  return (
    <header className="w-full flex justify-between items-center pb-[60px] lg:text-base">
      <a href="#">
        <Icon />
      </a>

      <button className="lg:hidden z-20" onClick={() => setSideNav(!sideNav)}>
        {sideNav ? <IconMenuClose /> : <IconMenu />}
      </button>

      {sideNav && (
        <div className="fixed left-0 top-0 min-w-full min-h-full grid grid-cols-5">
          <div
            className="col-span-2 bg-neutral-darkBlue opacity-50"
            onClick={() => setSideNav(!sideNav)}
          ></div>
          <div className="col-start-3 col-end-6 bg-neutral-offWhite pt-[144px]">
            <ul className="flex flex-col gap-5 px-3">
              {navItems.map((item, index) => {
                return (
                  <li
                    className="text-xl text-neutral-darkBlue hover:text-primary-softRed transition-all duration-75 hover:cursor-pointer"
                    key={index}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            {/* <a href="#">Home</a>
            <a href="#">New</a>
            <a href="#">Popular</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a> */}
          </div>
        </div>
      )}

      <ul className="hidden lg:flex lg:gap-5 font-normal">
        {navItems.map((item) => {
          return (
            <li className="transition-all duration-75 hover:cursor-pointer hover:text-primary-softRed">
              {item}
            </li>
          );
        })}
      </ul>
    </header>
  );
};

export default Navbar;
