import React from "react";

export const LogosSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white px-6 py-12 lg:h-[192px] lg:px-0 lg:py-0">
      <div className="mx-auto flex max-w-[1261px] flex-col items-center">
        <p className="text-center text-xs font-bold uppercase leading-4 tracking-[3px] text-slate-400 lg:pt-[44px]">
          BUILDING FUTURE READY OPERATIONS WITH GLOBAL INFRASTRUCTURE LEADERS.
        </p>
        <img
          src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/2e7147e3d930b4b167cb325dd7b5698ef139773f?placeholderIfAbsent=true"
          alt="Partners"
          className="mt-8 h-auto w-full lg:mt-2"
        />
      </div>
    </section>
  );
};
