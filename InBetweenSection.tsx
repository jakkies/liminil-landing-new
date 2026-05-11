import React from "react";

export const InBetweenSection: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center px-20 pt-28 pb-16 w-full border-t border-b bg-slate-50 border-slate-200 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex flex-col max-w-full w-[1084px]">
        <h2 className="self-center text-5xl font-bold tracking-tighter leading-none text-center text-slate-900 max-md:max-w-full max-md:text-4xl">
          <span style={{ color: "rgba(9,24,57,1)" }}>
            The real challenge is the
          </span>{" "}
          <span style={{ color: "rgba(188,157,88,1)" }}>space in-between</span>
        </h2>

        <p className="mt-10 text-xl leading-6 text-center text-slate-400 max-md:max-w-full">
          That&apos;s where transformation happens. That&apos;s where most organizations
          struggle. We don&apos;t just plan for the future—we navigate the journey
          with you, managing risks, maintaining momentum, and ensuring adoption
          at every stage.
        </p>

        <div className="mt-16 mr-8 ml-7 max-md:pr-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[76%] max-md:ml-0 max-md:w-full">
              <div className="z-10 pt-28 mr-0 w-full max-md:pt-24 max-md:max-w-full">
                <div className="flex shrink-0 mt-28 h-0.5 bg-slate-200 max-md:mt-10 max-md:max-w-full" />
                <div className="z-10 mt-0 ml-6 max-w-full w-[699px]">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="w-[44%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col px-16 py-10 mt-8 mr-0 text-center bg-white rounded-2xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5">
                        <h3 className="self-start text-2xl font-bold leading-none text-slate-900">
                          Legacy Position
                        </h3>
                        <p className="mt-4 text-sm leading-5 text-slate-500">
                          Where you are today—systems, processes, culture etc.
                        </p>
                      </div>
                    </div>
                    <div className="ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                      <div className="grow px-10 pt-3.5 pb-16 w-full text-center text-white rounded-2xl bg-slate-900 max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col px-12 py-16 rounded-2xl shadow-2xl bg-white bg-opacity-0 max-md:px-5">
                          <h3 className="text-4xl font-bold leading-tight">
                            The In-Between
                          </h3>
                          <p className="self-center mt-3.5 text-base font-medium leading-none">
                            Liminil Execution Engine
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-5 w-[24%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col px-16 py-10 mt-8 w-full text-center bg-white rounded-2xl border border-solid border-slate-200 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5">
                <h3 className="self-center text-2xl font-bold leading-none text-slate-900">
                  Future State
                </h3>
                <p className="mt-5 text-sm leading-5 text-slate-500">
                  Where you need to be—vision, capabilities, growth and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
