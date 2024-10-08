import React from "react";
import { Menu, X, Home, Info, Mail, Sun, Moon, File } from "lucide-react";
import { useTour } from "../TourContext";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { setIsTourActive,setIsDarkMode,isDarkMode } = useTour();


  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
   
  }
  return (
    <>
      <header className="container mx-auto text-center  px-4 py-3">
        <nav className="flex flex-row items-center justify-between">
          <div className="flex items-center text-center ">
            <svg
              className="h-10 w-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="ml-2 text-2xl sm:text-4xl font-bold text-white">
              WE<span className="text-[#147af7]">2</span>CODE
            </span>
          </div>
          <div className="hidden sm:flex sm: items-center space-x-6">
            <NavLink href="/" icon={<Home className="mr-1" />}>
              Home
            </NavLink>
            <NavLink href="/about" icon={<Info className="mr-1" />}>
              About
            </NavLink>
            <NavLink href="/contact" icon={<Mail className="mr-1" />}>
              Contact
            </NavLink>
            <NavLink href="#" icon={<File className="mr-1" />}>
              <button onClick={() => setIsTourActive(true)}>Intro</button>
            </NavLink>
          </div>
          <div className="flex items-center ">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white text-purple-600 hover:bg-purple-100 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="ml-4 p-2 rounded-lg bg-white text-purple-600 hover:bg-purple-100 sm:hidden dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="mt-4 bg-white rounded-lg shadow-lg p-4 md:hidden dark:bg-gray-800">
            <NavLink href="/" icon={<Home className="mr-2" />} mobile>
              Home
            </NavLink>
            <NavLink href="/about" icon={<Info className="mr-2" />} mobile>
              About
            </NavLink>
            <NavLink href="/contact" icon={<Mail className="mr-2" />} mobile>
              Contact
            </NavLink>
            <NavLink href="#" icon={<File className="mr-2" />}  mobile>
              <button onClick={() => setIsTourActive(true)}>Intro</button>
            </NavLink>
          </div>
        )}
      </header>
    </>
  );
}

function NavLink({ href, children, icon, mobile = false }) {
  const baseClasses =
    "flex items-center font-medium transition duration-150 ease-in-out";
  const desktopClasses = "text-white hover:text-purple-200";
  const mobileClasses =
    "text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200 py-2";

  return (
    <a
      href={href}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}
