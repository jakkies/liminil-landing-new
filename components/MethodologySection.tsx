import React from "react";

export const MethodologySection: React.FC = () => {
  const methodologies = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/2e697b09baf55ddf09d74d9450a45412a574ca0a?placeholderIfAbsent=true",
      title: "Methodology",
      description:
        "Deep mindset transformation for leadership teams to prepare for structural change. We align vision before code.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/180cd9569b40a0ae6e4250cfbf17639c40bfe5a8?placeholderIfAbsent=true",
      title: "The Magic Wand",
      description:
        "A structured sensing journey: Perceiving current dynamics, Presencing future states, and Realizing concrete outcomes.",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/d20398b529676b05ec2f81b5538c60f82c1ec6c4?placeholderIfAbsent=true",
      title: "PowerIntegrator",
      description:
        "Our state of the art technology accelleration platfom execution layer bridges legacy systems with future capabilities via secure API orchestration.",
    },
  ];

  return (
    <section
      id="method"
      className="relative w-full bg-white px-6 py-24 lg:h-[830px] lg:px-0 lg:py-0"
    >
      <div className="mx-auto max-w-[1232px]">
        <h2 className="max-w-[969px] text-[36px] font-bold leading-tight tracking-[-1px] lg:pt-[162.5px] lg:text-5xl lg:leading-[48px] lg:tracking-[-1.2px]">
          Platform first integration unlocks{" "}
          <span className="text-[#bc9d58]">predictable value</span>
        </h2>
        <p className="mt-7 max-w-[997px] text-lg leading-7 text-slate-500 lg:mt-[43px] lg:text-xl">
          We combine mindset transformation with industrial-strength technology
          to bridge the gap.
        </p>
        <div className="mt-[38px] grid grid-cols-1 gap-8 md:grid-cols-3 lg:mt-[50px]">
          {methodologies.map((card) => (
            <article
              key={card.title}
              className="group flex h-[366px] flex-col rounded-3xl border border-slate-100 bg-white p-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all duration-200 hover:-translate-y-1 hover:border-[#bc9d58]/35 hover:shadow-[0_24px_50px_-32px_rgba(9,24,57,0.38)]"
            >
              <img src={card.icon} alt="" className="size-10 shrink-0" />
              <h3 className="mt-10 text-2xl font-bold leading-8 text-[#091839]">
                {card.title}
              </h3>
              <p className="mt-6 min-h-[98px] text-base leading-[26px] text-slate-600">
                {card.description}
              </p>
              {/* <a
                href="#"
                className="mt-auto flex items-center gap-2.5 text-sm font-bold leading-5 text-[#bc9d58] transition-colors duration-200 hover:text-[#091839] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bc9d58]"
              >
                Learn More{" "}
                <img
                  src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/6db6acd0978f37f6494ee226eda7d34b1513d941?placeholderIfAbsent=true"
                  alt=""
                  className="size-4"
                />
              </a> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
