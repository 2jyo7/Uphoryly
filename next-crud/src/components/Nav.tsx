import Link from 'next/link';
import React from 'react'
import { MdAddBox } from 'react-icons/md';

const Nav = () => {
  return (
    <div>
<nav className="w-screen bg-black h-fit overflow-hidden">
  <div className="py-4 lg:px-8 px-4 max-w-[1280px] h-16 m-auto text-white flex items-center justify-between">
    <div>
      <h1 className="lg:text-2xl text-xl uppercase tracking-wider cursor-pointer font-bold">
      Uphoryly
      </h1>
    </div>
    <div
      className="flex lg:gap-8 gap-6 uppercase tracking-wider cursor-pointer text-lg items-center"
      id="navItems"
    >
      <span className="group">
      <Link href={"/"}>
        Services
        </Link>
        <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500" />
      </span>
      <span className="group">
      <Link href={"/"}>
        About
        </Link>
        <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500" />
      </span>
      <span className="group">
        <Link href={"/"}>
        Contact
        </Link>
        <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500" />
      </span>
      <span className="group flex flex-col">
        <Link href={'/addMusic'} >
        <button><MdAddBox /></button>
        <button > Music</button> 
        </Link>
        <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500 " />
      </span>
    </div>
    <div
      id="hamburger"
      className="fa fa-bars flex items-center text-xl"
      style={{ display: "none" }}
    />
    <div
      id="mobileNav"
      className="fixed flex flex-col gap-8 pt-16 px-4 text-xl uppercase bg-teal-500 h-full inset-0 top-16 w-[70%] left-[-70%] ease-in-out duration-500 cursor-pointer"
    >
      <span>Services</span>
      <span>About</span>
      <span>Contact</span>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Nav;