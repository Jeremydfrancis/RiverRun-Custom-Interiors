import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "About Us", path: "/about" },
    { id: 3, title: "Services", path: "/services" },
    { id: 4, title: "Contact", path: "/contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo(0, 0)
}
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header>
    <nav className="bg-backgroundSecondary text-backgroundMain w-[100vw] ">
      <div className="max-w-auto mx-4 px-4 items-center">
        <div className="flex justify-between md:justify-evenly lg-justify-evenly h-18 items-center">
          <div className="flex flex-row gap-x-8">
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" onClick={() => { closeNavbar(); scrollToTop(); }} className="text-backgroundMain pb-5 cursor-pointer"><img src="/smallLogo.png" /></NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline  space-x-5 ">
                {links.map(link => (
                  <NavLink key={link.id} to={link.path} className="text-backgroundMain hover:bg-backgroundAccent  px-3 py-7 rounded-md text-2xl font-medium w-auto " onClick={() => { closeNavbar(); scrollToTop(); }}>
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-backgroundMain hover:text-backgroundMain">
              <svg className={isOpen ? 'hidden' : 'block h-7 w-7'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={isOpen ? 'block h-7 w-7' : 'hidden'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`transition-all ${isOpen ? 'w-[100%] max-h-screen overflow-hidden duration-500 md:hidden': ' max-h-0 overflow-hidden duration-500'}`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-screen">
          {links.map(link => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="text-backgroundMain hover:bg-backgroundAccent hover:text-white block px-3 py-2 
                rounded-md text-lg font-medium "
                onClick={() => { closeNavbar(); scrollToTop(); }}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
