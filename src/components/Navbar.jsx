import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full sticky top-1 z-20 bg-primary">
      <div className="max-w-7xl w-full mx-auto pl-4 lg:pl-8 pr-8 lg:pr-16 py-5">
        <div className="flex items-center justify-center gap-70 w-full">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer">
              Dhruv Pujara
            </p>
          </Link>

          <ul className="hidden sm:flex flex-row gap-10 ml-auto">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setActive(link.title)}
                className="group cursor-pointer"
              >
                <a
                  href={`#${link.id}`}
                  className={`${
                    active === link.title
                      ? "text-white text-[18px]"
                      : "text-secondary text-[14px]"
                  } group-hover:text-white group-hover:text-[18px] font-medium transition-all duration-200`}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <div className="sm:hidden relative flex items-center ml-auto">
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
              } absolute top-16 right-0 w-64 max-w-[85vw] p-4 rounded-xl shadow-lg
                 bg-primary/95 backdrop-blur border border-white/10 z-30`}
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(false);
                    }}
                  >
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
