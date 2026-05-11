import React from "react";

const MetricCard: React.FC<{ icon: string; value: string; label: string }> = ({
  icon,
  value,
  label,
}) => {
  return (
    <article className="group flex items-center gap-5 rounded-3xl border border-slate-100 bg-white px-8 py-8 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#bc9d58]/35 hover:shadow-[0_18px_38px_-30px_rgba(9,24,57,0.42)]">
      <img src={icon} alt="" className="size-12 shrink-0" />
      <div>
        <h4 className="text-4xl font-black leading-none text-[#091839]">
          {value}
        </h4>
        <p className="mt-3.5 text-xs font-bold uppercase tracking-[1.2px] text-slate-400">
          {label}
        </p>
      </div>
    </article>
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
    <section
      id="case-studies"
      className="relative w-full bg-white px-6 py-24 lg:h-[946px] lg:px-0 lg:py-0"
    >
      <div className="mx-auto flex max-w-[1232px] flex-col rounded-[48px] bg-slate-900/10 px-8 py-12 lg:h-[662px] lg:flex-row lg:px-20 lg:py-16">
        <div className="flex-1 lg:pt-[13.5px]">
          <p className="flex h-10 w-[202px] items-center justify-center rounded-full bg-[#091839] text-xs font-black uppercase tracking-[2px] text-white">
            Featured Case Study
          </p>
          <h2 className="mt-7 text-[42px] font-bold leading-[1.05] tracking-[-1px] text-[#091839] lg:text-5xl lg:leading-[48px] lg:tracking-[-1.2px]">
            Modernising the South African Government Transversal Systems
          </h2>
          <div className="mt-10 space-y-6 lg:mt-[43px] lg:max-w-[491px]">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[1.2px] text-[#091839]">
                The Problem
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                30 year old legacy Government transversal systems and processes
                were slowed by manual workflows, fragmented approvals, and
                limited visibility across critical systems.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[1.2px] text-[#091839]">
                The Approach
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Liminil redesigned the operating model around DigiGov, combining
                workflow modernisation, integration, and automation into one
                governed delivery layer and operational platform.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[1.2px] text-[#091839]">
                The Outcome
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                The DigiGov platform enabled faster digital processes, stronger
                control, and better cross-department visibility without
                disrupting core operations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-1 flex-col items-center lg:mt-0 lg:items-end">
          <div className="w-full space-y-6 lg:mt-[51px] lg:max-w-[491px]">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
          <a
            href="#"
            className="mt-14 inline-flex h-14 items-center justify-center rounded-xl border border-[#bc9d58]/45 px-10 text-sm font-bold text-[#091839] transition-all duration-200 hover:-translate-y-1 hover:border-[#bc9d58] hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc9d58] lg:mt-[71.5px]"
          >
            Read full case study{" "}
            <img
              src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/b16387d291056a0a3d1b3f5b71f2230983da1960?placeholderIfAbsent=true"
              alt=""
              className="ml-2.5 size-5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
