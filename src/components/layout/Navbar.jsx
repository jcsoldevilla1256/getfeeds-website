"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      if (typeof document === "undefined") return;
      setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
      if (typeof document === "undefined") return;
      const root = document.documentElement;
      const nextIsDark = !root.classList.contains("dark");
      if (nextIsDark) {
        root.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
        localStorage.setItem("theme", "light");
      }
      setIsDark(nextIsDark);
    };

    return (
      <header>
        <nav className="bg-white border-b border-gray-200 dark:bg-gray-800">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            {/* Logo & Brand */}
            <a href="https://flowbite.com" className="flex items-center space-x-2">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">GetFeeds</span>
            </a>
  
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center space-x-8 font-medium">
              <li>
                <a href="#" className="text-primary-700 dark:text-white px-3 py-2 rounded-md" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 transition">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 transition">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 transition">
                  Contact
                </a>
              </li>
            </ul>
  
            {/* Right buttons */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-pressed={isDark}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                {isDark ? (
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 4.5a1 1 0 0 1-1-1V2a1 1 0 1 1 2 0v1.5a1 1 0 0 1-1 1Zm0 13a1 1 0 0 1-1 1V18a1 1 0 1 1 2 0v.5a1 1 0 0 1-1 1ZM4.5 10a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1.5a1 1 0 0 1 1 1Zm13 0a1 1 0 0 1 1-1H19a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1ZM5.636 5.636a1 1 0 0 1-1.414-1.414l1.06-1.06a1 1 0 1 1 1.415 1.414l-1.061 1.06Zm10.142 10.142a1 1 0 0 1-1.414 1.414l-1.06-1.06a1 1 0 1 1 1.414-1.415l1.06 1.061ZM5.636 14.364l-1.06 1.06a1 1 0 1 1-1.415-1.414l1.061-1.06a1 1 0 1 1 1.414 1.414Zm10.142-8.728 1.06-1.06a1 1 0 1 1 1.415 1.414l-1.061 1.06a1 1 0 1 1-1.414-1.414ZM10 6.5A3.5 3.5 0 1 1 6.5 10 3.5 3.5 0 0 1 10 6.5Z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M17.293 13.293A8 8 0 0 1 6.707 2.707 8.001 8.001 0 1 0 17.293 13.293Z" clipRule="evenodd" />
                  </svg>
                )}
                <span className="sr-only">Toggle dark mode</span>
              </button>
              <a
                href="#"
                className="hidden sm:inline-block text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2 transition"
              >
                Log in
              </a>
              <a
                href="#"
                className="hidden sm:inline-block text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-medium rounded-lg text-sm px-4 py-2 transition"
              >
                Get started
              </a>
              {/* Hamburger button for mobile */}
              <button
                type="button"
                className="inline-flex items-center p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
  
          {/* Mobile Navigation */}
          <div id="mobile-menu" className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
            <ul className="px-2 pt-2 pb-3 space-y-1 font-medium">
              <li>
                <a href="#" className="block text-primary-700 dark:text-white px-3 py-2 rounded-md" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md transition">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md transition">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white px-3 py-2 rounded-md transition">
                  Contact
                </a>
              </li>
              <li className="flex space-x-2 mt-2">
                <a
                  href="#"
                  className="flex-1 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 font-medium rounded-lg text-sm px-4 py-2 transition text-center"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="flex-1 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 font-medium rounded-lg text-sm px-4 py-2 transition text-center"
                >
                  Get started
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }