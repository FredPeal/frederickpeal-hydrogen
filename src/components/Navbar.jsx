import "../output.css";
import { Image } from "@shopify/hydrogen";
import logo from "../assets/logo.webp";
function navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
      active: false,
    },
    {
      name: "About",
      href: "/",
      active: false,
    },
    {
      name: "Blog",
      href: "/",
      active: false,
    },
    {
      name: "Projects",
      href: "/",
      active: false,
    },
    {
      name: "Contact",
      href: "/",
      active: false,
    },
  ];
  return (
    <nav className="px-2 sm:px-4 py-2.5 bg-black">
      <div className="container-fluid flex flex-wrap items-center justify-between mx-auto">
        <div className="lg:ml-[90px] md:ml-[90px]">
          <a href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Frederick Peñalo Logo"
              className="h-20 mr-3"
              width={256}
              height={70}
            />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden w-full md:block md:w-auto lg:mr-[90px] md:mr-[90px]" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 md:flex-row  md:mt-0 md:text-sm md:font-medium md:border-0">
            {navLinks.map((link) => (
              <li className="ml-[27px]">
                <a
                  href="{link.href}"
                  className="block py-2 pl-3 pr-4 text-white text-[18px]"
                  aria-current="page"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default navbar;
