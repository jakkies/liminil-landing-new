import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-5 pb-40 w-full font-bold bg-slate-900 max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <div className="flex flex-col items-center -mb-8 ml-3 max-w-full w-[1259px] max-md:mb-2.5">
        <div className="flex flex-col justify-center px-4 py-2.5 mt-10 max-w-full text-xs tracking-widest leading-none text-center text-white uppercase rounded-full border border-solid bg-white bg-opacity-95 border-white border-opacity-50 w-[293px] max-md:mt-10">
          Transform your Digital Future
        </div>

        <h1 className="mt-10 text-8xl tracking-tighter text-center text-white leading-[96px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Master the Unknown.
          <br />
          <span style={{ color: "rgba(188,157,88,1)" }}>Command the</span>{" "}
          <span style={{ color: "rgba(188,157,88,1)" }}>In-Between.</span>
        </h1>

        <p className="mt-8 pr-40 pl-40 text-xl leading-8 text-center text-slate-400 max-md:mt-10 max-md:max-w-full">
          Navigate the complexity of digital transformation with precision. We
          bridge the gap between your current state and your future vision.
        </p>

        <div className="flex flex-wrap gap-2 mt-10 max-w-full text-base text-center text-white w-[525px] max-md:mt-10">
          <button className="grow shrink-0 px-3 pt-0.5 pb-6 rounded-xl basis-0 w-fit" >
            <div className="flex gap-3 px-10 py-6 rounded-xl shadow-lg bg-white bg-opacity-0 max-md:px-5" style={{ backgroundColor: "rgba(188,157,88,1)" }}>
              <span className="grow my-auto">Start Transformation</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/a59194973d6d14a0d7c7cb38012983b770c3cd3c?placeholderIfAbsent=true"
                alt=""
                className="object-contain shrink-0 w-5 aspect-square"
              />
            </div>
          </button>
          <button className="flex flex-col justify-center self-start px-11 py-6 rounded-xl border border-solid border-opacity-50 max-md:px-5" style={{ border: "1px solid rgba(188,157,88,1)" }}>
            Our Methodology
          </button>
        </div>
      </div>
    </section>
  );
};
