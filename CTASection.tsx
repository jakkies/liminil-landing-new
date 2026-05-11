import React from "react";

export const CTASection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-28 w-full text-center bg-orange-400 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col items-center max-w-full w-[638px]">
        <h2 className="text-6xl font-bold tracking-tighter text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Ready to bridge your
          <br />
          transformation gap?
        </h2>

        <p className="self-stretch mt-10 text-xl leading-7 text-blue-100 max-md:max-w-full">
          Let&apos;s start with a conversation. We&apos;ll assess your current operational
          challenges and show you what&apos;s possible in the in-between.
        </p>

        <button className="px-5 pb-10 mt-14 max-w-full text-lg font-black leading-loose text-orange-400 bg-white rounded-2xl w-[350px] max-md:mt-10">
          <div className="flex flex-col justify-center px-9 py-8 rounded-2xl shadow-xl bg-white bg-opacity-0 max-md:px-5">
            Schedule a Consultation
          </div>
        </button>
      </div>
    </section>
  );
};
