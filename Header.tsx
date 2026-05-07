import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-stretch w-full text-sm font-medium leading-none text-slate-300 max-md:max-w-full">
      <img
        src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/1f7f9cb99df9f71c0cb410404d3d0bbe12cf6b41?placeholderIfAbsent=true"
        alt="Company Logo"
        className="object-contain shrink-0 max-w-full aspect-[2.22] w-[164px]"
      />
      <nav className="flex gap-10 items-center my-auto max-md:max-w-full">
        <a href="#method" className="self-stretch my-auto">
          Method
        </a>
        <a href="#platform" className="self-stretch my-auto">
          Platform
        </a>
        <a href="#case-studies" className="self-stretch my-auto">
          Case Studies
        </a>
        <button className="flex flex-col justify-center self-stretch px-5 py-4 font-semibold text-center bg-white rounded-lg text-neutral-900 max-md:pl-5">
          Contact Us
        </button>
      </nav>
    </header>
  );
};
