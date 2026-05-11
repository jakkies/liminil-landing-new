import React from "react";

export const PlatformSection: React.FC = () => {
  const features = [
    "Real-time data synchronization across hybrid environments",
    "Zero-downtime migration pathways for mission-critical core",
    "Auto-scaling microservices orchestration engine",
    "Enterprise-grade security and governance auditing",
  ];

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center px-20 py-32 w-full bg-slate-900 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="mb-0 ml-5 max-w-full w-[1270px] max-md:mb-2.5">
        <div className="mr-7 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[45%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <p className="self-start text-xs font-black tracking-wider leading-none text-orange-400 uppercase">
                  Platform Architecture
                </p>
                <h2 className="mt-8 text-6xl font-bold tracking-tighter text-white leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  <span style={{ color: "rgba(188,157,88,1)" }}>
                    Build the Future
                  </span>
                  <br />
                  Without Breaking
                  <br />
                  the Present.
                </h2>
              </div>
            </div>
            <div className="ml-5 w-[55%] max-md:ml-0 max-md:w-full">
              <div className="px-3 pt-0.5 pb-6 w-full rounded-2xl border border-solid bg-orange-400 bg-opacity-10 border-orange-400 border-opacity-40 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col px-8 py-10 w-full rounded-2xl shadow-lg bg-white bg-opacity-0 max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-2 self-end">
                    <div className="flex shrink-0 w-full h-2 bg-orange-400 rounded-full" />
                    <div className="flex shrink-0 w-full h-2 bg-orange-400 rounded-full" />
                  </div>
                  <div className="flex flex-col items-start self-start leading-none text-orange-400">
                    <p className="text-xs font-black tracking-wider uppercase">
                      Target Layer
                    </p>
                    <h4 className="mt-4 text-2xl font-bold">
                      New Capabilities
                    </h4>
                    <p className="self-stretch mt-3.5 text-sm leading-none text-orange-400">
                      Cloud-native apps, AI services, Mobile UI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-8 w-full text-base font-medium text-slate-300 max-md:mt-10 max-md:max-w-full">
                <p className="self-stretch text-lg leading-7 text-slate-400 max-md:max-w-full">
                  PowerIntegrator acts as a secure, intelligent translation
                  layer that
                  <br />
                  wraps your legacy core, enabling new microservices to thrive
                  <br />
                  without service disruption.
                </p>

                {features.map((feature, index) => (
                  <div key={index} className="flex flex-wrap gap-4 mt-6">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/560bc5d96d4e36123779572c6b2438a00ec8bcc1?placeholderIfAbsent=true"
                      alt=""
                      className="object-contain shrink-0 w-6 rounded-full aspect-square"
                    />
                    <p className="flex-auto max-md:max-w-full">{feature}</p>
                  </div>
                ))}

                <button className="flex flex-col justify-center px-8 py-5 mt-12 font-bold text-center bg-white rounded-xl text-slate-900 max-md:px-5 max-md:mt-10">
                  Technical Specifications
                </button>
              </div>
            </div>
            <div className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="px-10 pt-3.5 pb-16 text-white bg-orange-400 rounded-2xl border border-white border-solid max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col items-start px-8 py-9 w-full rounded-2xl shadow-2xl bg-white bg-opacity-0 max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-wrap gap-5 justify-between self-stretch text-xs font-black tracking-wider leading-none uppercase max-md:max-w-full">
                      <p className="self-start mt-3.5">Platform Layer</p>
                      <img
                        src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/13fcd83ac29dcb47d56e97e16725cd9843570dc2?placeholderIfAbsent=true"
                        alt=""
                        className="object-contain shrink-0 w-6 aspect-square"
                      />
                    </div>
                    <h4 className="mt-3 text-4xl font-bold leading-none max-md:max-w-full">
                      PowerIntegrator Platform
                    </h4>
                    <p className="mt-2.5 text-sm leading-none">
                      Intelligent Routing, API Translation, State Sync
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start self-center px-8 py-9 mt-4 max-w-full leading-none rounded-2xl border border-solid bg-slate-800 bg-opacity-50 border-slate-700 text-slate-500 w-[576px] max-md:px-5">
                  <div className="flex flex-wrap gap-5 justify-between self-stretch text-xs font-black tracking-wider uppercase max-md:max-w-full">
                    <p className="self-start mt-2.5">Legacy Layer</p>
                    <img
                      src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/7ff4fea48055df3a9f792da6e7cf0f5b5bcd0f89?placeholderIfAbsent=true"
                      alt=""
                      className="object-contain shrink-0 w-5 aspect-square"
                    />
                  </div>
                  <h4 className="mt-5 text-2xl font-bold text-slate-300">
                    Legacy Core Systems
                  </h4>
                  <p className="mt-3.5 text-sm leading-none">
                    Monolithic DBs, Mainframes, ERP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
