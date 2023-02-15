"use client";
import "../output.css";
import { Image } from "@shopify/hydrogen";
import logo from "../assets/logo.webp";
import { useState, useEffect } from "react";
function navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
      active: false,
    },
    {
      name: "About",
      href: "/about",
      active: false,
    },
    {
      name: "Blogs",
      href: "/blogs",
      active: false,
    },
    {
      name: "Projects",
      href: "/projects",
      active: false,
    },
    {
      name: "Contact",
      href: "/contact",
      active: false,
    },
  ];
  const [location, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.pathname);
  }, []);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-dark">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <Image
                src={"https://frederickpeal.s3.amazonaws.com/web/logo.webp"}
                alt="Frederick Peñalo Logo"
                className="h-20 mr-3"
                width={256}
                height={70}
              />{" "}
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={"lg:flex flex-grow items-center"}
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {navLinks.map((link) => {
                return (
                  <li className="nav-item">
                    <a
                      className={
                       location === link.href 
                          ? "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 text-[#FEED73]"
                          : "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      }
                      href={link.href}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default navbar;
