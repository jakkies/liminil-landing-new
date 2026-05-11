import React from "react";

interface MetricCardProps {
  icon: string;
  value: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label }) => {
  return (
    <div className="py-8 pr-20 pl-8 bg-white rounded-3xl border border-solid border-slate-100 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[34%] max-md:ml-0 max-md:w-full">
          <img
            src={icon}
            alt=""
            className="object-contain shrink-0 w-16 rounded-2xl aspect-square max-md:mt-10"
          />
        </div>
        <div className="ml-5 w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10">
            <h4 className="self-start text-4xl font-black leading-none text-slate-900">
              {value}
            </h4>
            <p className="mt-3.5 text-xs font-bold tracking-wider leading-none uppercase text-slate-400">
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CaseStudySection: React.FC = () => {
  const metrics = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/7e88468ebbdedea3340bb75c7580e4cc2c6dcce4?placeholderIfAbsent=true",
      value: "R45M",
      label: "Annual Savings",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/5bda18946052a8fa26c1c2542f3e5842033ff811?placeholderIfAbsent=true",
      value: "8 Months",
      label: "Accelerated Time-to-Market",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/7aad970be7a7eb7c4c7307d891b5cb32bab6f742?placeholderIfAbsent=true",
      value: "Zero",
      label: "Service Disruptions",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-16 py-36 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="overflow-hidden px-20 py-16 -mb-7 max-w-full bg-slate-900 bg-opacity-10 rounded-[48px] w-[1232px] max-md:px-5 max-md:mb-2.5">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start text-xs font-black text-slate-900 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col justify-center px-4 py-2.5 text-xs text-white uppercase rounded-full bg-slate-900 tracking-[2px]">
                Featured Case Study
              </div>

              <h2 className="self-stretch mt-7 text-5xl font-bold leading-10 text-slate-900 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Modernising the South African Government Transversal Systems
              </h2>

              <h3 className="mt-8 tracking-wider leading-none uppercase">
                The Problem
              </h3>
              <p className="self-stretch mt-5 text-base leading-7 text-slate-600 max-md:max-w-full">
                30 year old legacy Government transversal systems and processes
                were slowed by manual workflows, fragmented approvals, and
                limited visibility across critical systems.
              </p>

              <h3 className="mt-6 tracking-wider leading-none uppercase">
                The Approach
              </h3>
              <p className="self-stretch mt-5 text-base leading-7 text-slate-600 max-md:mr-1.5 max-md:max-w-full">
                Liminil redesigned the operating model around DigiGov, combining
                workflow modernisation, integration, and automation into one
                governed delivery layer and operational platform.
              </p>

              <h3 className="mt-6 tracking-wider leading-none uppercase">
                The Outcome
              </h3>
              <p className="mt-5 text-base leading-7 text-slate-600">
                The DigiGov platform enabled faster digital processes, stronger
                control, and better cross-department visibility without
                disrupting core operations.
              </p>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-28 w-full max-md:mt-10 max-md:max-w-full">
              {metrics.map((metric, index) => (
                <div key={index} className={index > 0 ? "mt-6" : ""}>
                  <MetricCard {...metric} />
                </div>
              ))}

              <button className="flex gap-2.5 self-end mt-10 text-base font-black text-slate-900 max-md:mr-2.5">
                <span className="grow my-auto">VIEW FULL CASE NARRATIVE</span>
                <img
                  src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/b16387d291056a0a3d1b3f5b71f2230983da1960?placeholderIfAbsent=true"
                  alt=""
                  className="object-contain shrink-0 w-5 aspect-square"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
