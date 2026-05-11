import React from "react";

const LayerCard: React.FC<{
  eyebrow: string;
  title: string;
  body: string;
  featured?: boolean;
  muted?: boolean;
}> = ({ eyebrow, title, body, featured, muted }) => {
  return (
    <article
      className={[
        "flex w-full max-w-[576px] flex-col items-start rounded-2xl border px-8 py-9 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_22px_44px_-30px_rgba(0,0,0,0.65)]",
        featured
          ? "h-[166px] border-white/35 bg-[#bc9d58] text-white shadow-2xl"
          : "",
        muted
          ? "h-[160px] border-slate-700 bg-slate-800/45 text-slate-500"
          : "",
      ].join(" ")}
    >
      <div className="flex w-full items-start justify-between">
        <p className="text-xs font-black uppercase leading-4 tracking-[1.2px]">
          {eyebrow}
        </p>
        {eyebrow === "Target Layer" && (
          <span className="flex gap-2 pt-1">
            <span className="size-2 rounded-full bg-[#bc9d58]" />
            <span className="size-2 rounded-full bg-[#bc9d58]" />
          </span>
        )}
      </div>
      <h3
        className={[
          "mt-2 text-2xl font-bold leading-8",
          featured ? "text-white lg:text-4xl" : "text-slate-300",
          eyebrow === "Target Layer" ? "text-[#bc9d58]" : "",
        ].join(" ")}
      >
        {title}
      </h3>
      <p
        className={[
          "mt-2 text-sm leading-5",
          featured ? "text-white" : "text-slate-500",
          eyebrow === "Target Layer" ? "text-[#bc9d58]" : "",
        ].join(" ")}
      >
        {body}
      </p>
    </article>
  );
};

export const PlatformSection: React.FC = () => {
  const features = [
    "Real-time data synchronization across hybrid environments",
    "Zero-downtime migration pathways for mission-critical core",
    "Auto-scaling microservices orchestration engine",
    "Enterprise-grade security and governance auditing",
  ];

  return (
    <section
      id="platform"
      className="relative overflow-hidden bg-[#091839] px-6 py-24 text-white lg:h-[908px] lg:px-0 lg:py-0"
    >
      <div className="mx-auto grid max-w-[1232px] grid-cols-1 gap-16 lg:grid-cols-[576px_576px] lg:gap-20">
        <div className="lg:pt-32">
          <p className="text-xs font-black uppercase leading-4 tracking-[1.2px] text-[#bc9d58]">
            Platform Architecture
          </p>
          <h2 className="mt-[18px] text-[42px] font-bold leading-[1.05] tracking-[-1.2px] lg:text-[60px] lg:leading-[64px]">
            <span className="text-[#bc9d58]">Build the Future</span>
            <br />
            Without Breaking
            <br />
            the Present.
          </h2>
          <p className="mt-[25px] max-w-[553px] text-lg leading-[26.5px] text-slate-400">
            PowerIntegrator acts as a secure, intelligent translation layer that
            wraps your legacy core, enabling new microservices to thrive without
            service disruption.
          </p>
          <ul className="mt-10 space-y-6 text-base font-medium leading-6 text-slate-300 lg:mt-[37px] lg:space-y-6">
            {features.map((feature) => (
              <li key={feature} className="flex gap-4">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#bc9d58] text-[#091839]">
                  <span className="text-xs font-black">✓</span>
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://www.powerintegrator.net/" target="_blank"
            className="mt-12 inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-[#091839] transition-all duration-200 hover:-translate-y-1 hover:bg-[#bc9d58] hover:text-white hover:shadow-[0_18px_28px_-18px_rgba(188,157,88,0.65)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc9d58]"
          >
            More about the PowerIntegrator
          </a>
        </div>

        <div className="relative flex flex-col items-center lg:pt-[130.88px]">
          <LayerCard
            eyebrow="Target Layer"
            title="New Capabilities"
            body="Cloud-native apps, AI services, Mobile UI"
            muted
          />
          <div className="my-4 h-12 w-0.5 bg-white/20" />
          <LayerCard
            eyebrow="Platform Layer"
            title="PowerIntegrator Platform"
            body="Intelligent Routing, API Translation, State Sync"
            featured
          />
          <div className="my-4 h-12 w-0.5 bg-white/20" />
          <LayerCard
            eyebrow="Legacy Layer"
            title="Legacy Core Systems"
            body="Monolithic DBs, Mainframes, ERP"
            muted
          />
        </div>
      </div>
    </section>
  );
};
