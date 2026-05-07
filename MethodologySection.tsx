import React from "react";

interface MethodologyCardProps {
  icon: string;
  title: string;
  description: string;
  linkIcon: string;
}

const MethodologyCard: React.FC<MethodologyCardProps> = ({
  icon,
  title,
  description,
  linkIcon,
}) => {
  return (
    <div className="flex flex-col items-start px-10 py-11 mx-auto w-full font-bold bg-white rounded-3xl border border-solid border-slate-100 shadow-[0px_1px_2px_rgba(0,0,0,0.05)] max-md:px-5 max-md:mt-8">
      <img
        src={icon}
        alt=""
        className="object-contain w-14 rounded-2xl aspect-square"
      />
      <h3 className="mt-10 text-2xl leading-none text-slate-900">{title}</h3>
      <p className="mt-6 text-base leading-7 text-slate-600">{description}</p>
      <button className="flex gap-2.5 mt-8 text-sm leading-none text-orange-400">
        <span className="grow my-auto">Learn More</span>
        <img
          src={linkIcon}
          alt=""
          className="object-contain shrink-0 w-4 aspect-square"
        />
      </button>
    </div>
  );
};

export const MethodologySection: React.FC = () => {
  const methodologies = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/2e697b09baf55ddf09d74d9450a45412a574ca0a?placeholderIfAbsent=true",
      title: "Methodology",
      description:
        "Deep mindset transformation for\nleadership teams to prepare for\nstructural change. We align vision\nbefore code.",
      linkIcon:
        "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/6db6acd0978f37f6494ee226eda7d34b1513d941?placeholderIfAbsent=true",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/180cd9569b40a0ae6e4250cfbf17639c40bfe5a8?placeholderIfAbsent=true",
      title: "The Magic Wand",
      description:
        "A structured sensing journey: Perceiving\ncurrent dynamics, Presencing future\nstates, and Realizing concrete\noutcomes.",
      linkIcon:
        "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/6db6acd0978f37f6494ee226eda7d34b1513d941?placeholderIfAbsent=true",
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/d20398b529676b05ec2f81b5538c60f82c1ec6c4?placeholderIfAbsent=true",
      title: "PowerIntegrator",
      description:
        "Our state of the art technology accelleration platfom execution layer bridges legacy systems with future capabilities via secure API orchestration.",
      linkIcon:
        "https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/e96584296f57b9b3caadaef155a98434509e3eb2?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center px-20 py-36 w-full bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-col items-start mb-0 max-w-full w-[1232px] max-md:mb-2.5">
        <h2 className="text-5xl font-bold tracking-tighter leading-10 text-slate-900 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          <span style={{ color: "rgba(9,24,57,1)" }}>
            Platform first integration unlocks
          </span>{" "}
          <span style={{ color: "rgba(188,157,88,1)" }}>predictable value</span>
        </h2>

        <p className="mt-7 text-xl leading-snug text-slate-500 max-md:max-w-full">
          We combine mindset transformation with industrial-strength technology
          to bridge the gap.
        </p>

        <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {methodologies.map((methodology, index) => (
              <div key={index} className="w-[33%] max-md:ml-0 max-md:w-full">
                <MethodologyCard {...methodology} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
