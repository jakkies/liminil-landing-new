"use client";

import React, { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#method", label: "Method" },
    { href: "#platform", label: "Platform" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full pt-[21px]">
      <nav
        className={`mx-auto flex w-[calc(100%-48px)] max-w-[1280px] items-center justify-between bg-[#091839] px-6 py-4 transition-all duration-300 rounded-2xl lg:h-[74px] ${isScrolled ? "shadow-xl" : "shadow-none"
          }`}
      >
        <a href="#top" className="relative z-10">
          <img
            src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/1f7f9cb99df9f71c0cb410404d3d0bbe12cf6b41?placeholderIfAbsent=true"
            alt="Liminil"
            className={`h-auto transition-all duration-300 ${isScrolled ? "w-[123px]" : "w-[164px]"
              }`}
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden h-10 items-center gap-[39px] text-sm font-medium leading-5 text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="flex h-10 w-[115px] items-center justify-center rounded-lg bg-white text-sm font-semibold text-[#0f1115] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#bc9d58] hover:text-white hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc9d58]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-10 flex size-10 items-center justify-center text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="size-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 z-0 flex flex-col items-center justify-center bg-[#091839] transition-all duration-300 md:hidden ${isMenuOpen
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col items-center gap-8 text-xl font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex h-14 w-[200px] items-center justify-center rounded-xl bg-white text-lg font-bold text-[#091839] transition-all hover:bg-[#bc9d58] hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
