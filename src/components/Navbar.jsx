import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (title) => {
    setActive(title);
    setTimeout(() => setActive(""), 300); // reset font size after click
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-primary/90 backdrop-blur supports-[backdrop-filter]:bg-primary/70">
      <div className="mx-auto w-full pl-12 pr-8 sm:pl-16 sm:pr-16 lg:px-8 max-w-[1100px] xl:max-w-[1200px] 2xl:max-w-[1280px] py-5">
        <div className="flex items-center justify-between w-full">
          {/* Brand */}
          <Link
            to="/"
            className="flex items-center gap-2 ml-8 lg:ml-16"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
            <p className="text-white text-[20px] font-bold cursor-pointer">
              Dhruv Pujara
            </p>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => handleNavClick(link.title)}
                className="group cursor-pointer"
              >
                <a
                  href={`#${link.id}`}
                  className={`${
                    active === link.title
                      ? "text-white text-[20px]"
                      : "text-secondary text-[16px]"
                  } group-hover:text-white group-hover:text-[18px] font-medium transition-all duration-200`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <div className="sm:hidden relative flex items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            {/* Mobile dropdown */}
            <div
              className={`${
                !toggle ? "hidden" : "block"
              } absolute top-16 right-4 w-72 max-w-[90vw] rounded-lg shadow-lg
                 bg-zinc-900/95 backdrop-blur-md border border-white/10 z-50 p-5`}
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-zinc-400"
                    } font-medium cursor-pointer text-[18px] hover:text-white transition-colors`}
                    onClick={() => {
                      handleNavClick(link.title);
                      setToggle(false);
                    }}
                  >
                    {/* Anchor links for scrolling */}
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
