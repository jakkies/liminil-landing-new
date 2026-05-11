import React from "react";

export const LogosSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center self-stretch px-20 pt-11 pb-7 mt-28 w-full text-xs font-bold text-center uppercase bg-white text-slate-400 tracking-[3px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1261px]">
        <p className="self-center max-md:max-w-full">
          BUILDING FUTURE READY OPERATIONS WITH GLOBAL INFRASTRUCTURE LEADERS.
        </p>
        <img
          src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/2e7147e3d930b4b167cb325dd7b5698ef139773f?placeholderIfAbsent=true"
          alt="Partner company logos"
          className="object-contain mt-2 w-full aspect-[11.63] max-md:max-w-full"
        />
      </div>
    </section>
  );
};
