import React from "react";

const JourneyCard: React.FC<{ title: string; body: string }> = ({ title, body }) => {
  return (
    <article className="relative z-10 flex h-[150px] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-12 text-center shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#bc9d58]/35 hover:shadow-[0_18px_38px_-30px_rgba(9,24,57,0.42)]">
      <h3 className="text-2xl font-bold leading-8 text-[#091839]">{title}</h3>
      <p className="mt-2 text-sm leading-5 text-slate-500">{body}</p>
    </article>
  );
};

export const InBetweenSection: React.FC = () => {
  return (
    <section id="method" className="relative overflow-hidden border-y border-slate-200 bg-slate-50 px-6 py-24 lg:h-[638px] lg:px-0 lg:py-0">
      <div className="mx-auto flex max-w-[1093px] flex-col items-center">
        <h2 className="text-center text-[36px] font-bold leading-tight tracking-[-1px] lg:pt-[105.5px] lg:text-5xl lg:leading-[48px] lg:tracking-[-1.2px]">
          The magic happens in the{" "}
          <span className="text-[#bc9d58]">space in-between</span>
        </h2>
        <p className="mt-8 max-w-[1093px] text-center text-base leading-[26px] text-slate-400 lg:mt-[37px]">
          That&apos;s where transformation happens. That&apos;s where most organizations
          struggle. We don&apos;t just plan for the future—we navigate the journey
          with you, managing risks, maintaining momentum, and ensuring adoption
          at every stage.
        </p>

        <div className="relative mt-16 h-auto w-full max-w-[1024px] lg:mt-[78px] lg:h-[190px]">
          <div className="absolute left-0 right-0 top-[93px] hidden h-0.5 bg-slate-200 lg:block" />
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[329px_346px_332px] lg:gap-[15px]">
            <JourneyCard
              title="Legacy Position"
              body="Where you are today—systems, processes, culture etc."
            />
            <div className="relative z-10 flex h-[189.2px] flex-col items-center justify-center rounded-2xl bg-[#091839] text-center text-white shadow-2xl transition-all duration-200 hover:-translate-y-1 hover:bg-[#10234d] hover:shadow-[0_24px_50px_-28px_rgba(9,24,57,0.8)]">
              <h3 className="text-4xl font-bold leading-[39.6px]">
                The In-Between
              </h3>
              <p className="mt-2.5 text-base font-medium leading-[22px]">
                Where the magic happens
              </p>
            </div>
            <JourneyCard
              title="Future State"
              body="Where you need to be—vision, capabilities, growth and beyond."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
