import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="flex w-full items-center justify-center bg-[#bc9d58] px-6 py-24 text-center lg:h-[597px] lg:items-start lg:px-0 lg:py-0">
      <div className="max-w-[646px] lg:mt-[122px]">
        <h2 className="text-[42px] font-bold leading-[1.05] tracking-[-1px] text-white lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
          Ready to bridge your
          <br />
          transformation gap?
        </h2>
        <p className="mt-[30px] text-lg leading-7 text-blue-100 lg:mt-[42px] lg:text-xl">
          Let&apos;s start with a conversation. We&apos;ll assess your current
          operational challenges and show you what&apos;s possible in the
          in-between.
        </p>
        <a
          href="mailto:info@liminil.net"
          className="mx-auto mt-12 flex h-[76px] w-[310px] items-center justify-center rounded-2xl bg-white text-lg font-black leading-7 text-[#bc9d58] shadow-[0_20px_25px_-5px_rgba(137,101,19,0.2)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#091839] hover:text-white hover:shadow-[0_24px_36px_-20px_rgba(9,24,57,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:mt-[52px]"
        >
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
};
