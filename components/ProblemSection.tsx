import React from "react";

export const ProblemSection: React.FC = () => {
  const features = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/8f888e806e252bd008cc717796906bc983f52a02?placeholderIfAbsent=true",
      title: "Strategic Alignment",
      description:
        "Ensure every transformation initiative aligns with business objectives and stakeholder expectations.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/2e157a8f7a7c8030a98512d63e900e6734476f36?placeholderIfAbsent=true",
      title: "Change Management",
      description:
        "Guide your organization through the transition with proven frameworks and stakeholder engagement strategies.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/3015c890b04aa7a84a1fbbce467f6edacade8851?placeholderIfAbsent=true",
      title: "Rapid Execution",
      description:
        "Accelerate implementation timelines with our agile methodology and proven delivery accelerators.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/91906fc843b18f57a7d83596dc68bca88d404d2b?placeholderIfAbsent=true",
      title: "Innovation Integration",
      description:
        "Embed cutting-edge technologies and best practices into your transformation roadmap.",
    },
  ];

  return (
    <section className="relative w-full bg-white px-6 py-24 lg:h-[913px] lg:px-0 lg:py-0">
      <div className="mx-auto flex max-w-[976px] flex-col items-center">
        <h2 className="max-w-[890px] text-center text-[42px] font-bold leading-[1.05] tracking-[-1px] lg:pt-[122px] lg:text-[60px] lg:leading-[60px] lg:tracking-[-1.5px]">
          <span>Most digital transformations fail</span>
          <br />
          <span className="text-[#bc9d58]">before they even begin.</span>
        </h2>
        <p className="mt-8 max-w-[673px] text-center text-lg leading-8 text-slate-500 lg:mt-[43px] lg:text-xl lg:leading-[32.5px]">
          The gap between strategy and execution is where most projects fail. We
          specialize in closing that gap.
        </p>

        <div className="mt-16 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:mt-[107px]">
          {features.map((card) => (
            <article
              key={card.title}
              className="group flex min-h-[155px] gap-6 rounded-2xl border border-slate-100 bg-slate-50 px-8 py-8 transition-all duration-200 hover:-translate-y-1 hover:border-[#bc9d58]/35 hover:bg-white hover:shadow-[0_18px_40px_-28px_rgba(9,24,57,0.45)]"
            >
              <img src={card.icon} alt="" className="size-9 shrink-0" />
              <div className="flex flex-col">
                <h3 className="text-lg font-bold leading-7 text-[#091839]">
                  {card.title}
                </h3>
                <p className="mt-[14px] text-sm leading-[22.75px] text-slate-600">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
