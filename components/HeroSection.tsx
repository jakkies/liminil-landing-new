import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <section id="top" className="relative flex min-h-[760px] w-full overflow-hidden bg-[#091839] px-6 py-8 lg:h-[718px] lg:min-h-0 lg:px-0 lg:py-0">
      <div className="mx-auto flex w-full max-w-[1369px] flex-col items-center pt-[190px] text-center lg:pt-[148px]">
        <p className="flex mb-12 h-[26px] w-[293px] items-center justify-center rounded-full border border-white/45 bg-white/[0.07] text-xs font-bold uppercase leading-4 tracking-[1.8px] text-white/75">
          Transform your Digital Future
        </p>

        <h1 className="mt-[34px] text-[52px] font-bold leading-[1.03] tracking-[-1.2px] text-white sm:text-[72px] lg:mt-[10px] lg:text-[96px] lg:leading-[96px] lg:tracking-[-2.4px]">
          Master the Unknown.
          <br />
          <span className="text-[#bc9d58]">Navigate the In-Between.</span>
        </h1>

        <p className="mt-[26px] max-w-[841px] text-lg font-normal leading-8 text-slate-400 lg:mt-[33px] lg:text-xl lg:leading-[32.5px]">
          We guide you through your digital transformation journey. We bridge the
          gap between your current state and your future vision.
        </p>

        <div className="mt-[47px] flex flex-col gap-5 text-base font-bold sm:flex-row sm:gap-5 lg:mt-[43px]">
          <a
            href="mailto:info@liminil.net"
            className="flex h-[66px] w-[274.8px] items-center justify-center gap-[18px] rounded-xl bg-[#bc9d58] text-white shadow-[0_10px_15px_-3px_rgba(188,157,88,0.2),0_4px_6px_-4px_rgba(37,99,235,0.2)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#a9873e] hover:shadow-[0_18px_28px_-12px_rgba(188,157,88,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc9d58]"
          >
            Start your journey
            <img
              src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/a59194973d6d14a0d7c7cb38012983b770c3cd3c?placeholderIfAbsent=true"
              alt=""
              className="size-5"
            />
          </a>
          <a
            href="#method"
            className="flex h-[66px] w-[218.5px] items-center justify-center rounded-xl border border-[#bc9d58]/45 text-white transition-all duration-200 hover:-translate-y-1 hover:border-[#bc9d58] hover:bg-white/10 hover:shadow-[0_16px_24px_-16px_rgba(255,255,255,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc9d58]"
          >
            Our Methodology
          </a>
        </div>
      </div>
    </section>
  );
};
