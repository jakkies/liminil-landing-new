import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex grow gap-6 items-start px-10 py-7 w-full rounded-2xl border border-solid bg-slate-50 border-slate-100 max-md:px-5 max-md:mt-8">
      <img
        src={icon}
        alt=""
        className="object-contain shrink-0 w-12 rounded-full aspect-square"
      />
      <div className="flex flex-col grow shrink-0 mt-2 basis-0 w-fit">
        <h4 className="self-start text-lg font-bold leading-loose text-slate-900">
          {title}
        </h4>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
};

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
    <section className="flex flex-col items-center pt-32 w-full bg-white max-md:pt-24 max-md:max-w-full">
      <h2 className="text-6xl font-bold tracking-tighter text-center leading-[60px] text-slate-900 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        <span style={{ color: "rgba(9,24,57,1)" }}>
          Most digital transformations fail
        </span>
        <br />
        <span style={{ color: "rgba(188,157,88,1)" }}>
          before they even begin.
        </span>
      </h2>

      <p className="mt-14 text-xl leading-8 text-center text-slate-500 max-md:mt-10 max-md:max-w-full">
        The gap between strategy and execution is where most projects falter. We
        specialize in closing that gap.
      </p>

      <div className="mt-24 max-w-full w-[976px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <FeatureCard {...features[0]} />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <FeatureCard {...features[1]} />
          </div>
        </div>
      </div>

      <div className="mt-9 max-w-full w-[976px]">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <FeatureCard {...features[2]} />
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <FeatureCard {...features[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};
