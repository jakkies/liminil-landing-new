import React from "react";

interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div className="flex flex-col grow items-start mt-9 text-sm leading-none text-slate-400 max-md:mt-10">
      <h4 className="text-xs font-bold tracking-wider leading-none text-white uppercase">
        {title}
      </h4>
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`${index === 0 ? "mt-10 max-md:mt-10" : "mt-6"} hover:text-white transition-colors`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export const Footer: React.FC = () => {
  const methodologyItems = [
    "Metanoia Framework",
    "The U Method",
    "Platform Strategy",
    "Human-Systems Design",
  ];

  const platformItems = [
    "PowerIntegrator Core",
    "Legacy API Mapping",
    "Real-time Orchestration",
    "Security & Compliance",
  ];

  return (
    <footer className="flex flex-col items-center px-20 pt-12 pb-20 w-full border-t bg-slate-900 border-white border-opacity-10 max-md:px-5 max-md:max-w-full">
      <div className="max-w-full w-[1280px]">
        <div className="max-w-full w-[1191px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-3/12 max-md:ml-0 max-md:w-full">
              <div className="text-sm leading-6 text-slate-400 max-md:mt-10">
                <img
                  src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/97b851747356e07c288e3d975eab9ebdd3749bd8?placeholderIfAbsent=true"
                  alt="Company Logo"
                  className="object-contain max-w-full aspect-[2.21] w-[135px]"
                />
                <p className="mt-10">
                  The elite partner for high-stakes
                  <br />
                  enterprise digital transformation.
                  <br />
                  Mastering the unknown through
                  <br />
                  engineering and insight.
                </p>
              </div>
            </div>

            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <FooterColumn title="Methodology" items={methodologyItems} />
            </div>

            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <FooterColumn title="Platform" items={platformItems} />
            </div>

            <div className="ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start mt-9 w-full max-md:mt-10">
                <h4 className="text-xs font-bold tracking-wider leading-none text-white uppercase">
                  Contact
                </h4>

                <div className="flex gap-3 mt-10 text-sm leading-none text-slate-400">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/1673b5230c3c8b0692c888ec224b3cb5c304a09f?placeholderIfAbsent=true"
                    alt=""
                    className="object-contain shrink-0 w-4 aspect-square"
                  />
                  <a
                    href="tel:+27832237875"
                    className="my-auto basis-auto hover:text-white transition-colors"
                  >
                    +27 83 223 7875
                  </a>
                </div>

                <div className="flex gap-3 mt-5 text-sm leading-none whitespace-nowrap text-slate-400">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/d42e8efc53f747480d5dbd212876603516f29242?placeholderIfAbsent=true"
                    alt=""
                    className="object-contain shrink-0 w-4 aspect-square"
                  />
                  <a
                    href="mailto:info@liminil.com"
                    className="basis-auto hover:text-white transition-colors"
                  >
                    info@liminil.com
                  </a>
                </div>

                <div className="flex gap-3 self-stretch mt-5 text-sm leading-none text-slate-400">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/078b913c9bd89881403edc8c64fc285b3903d392?placeholderIfAbsent=true"
                    alt=""
                    className="object-contain shrink-0 self-start w-4 aspect-square"
                  />
                  <address className="grow shrink w-[152px] not-italic">
                    Hermanus, South Africa
                  </address>
                </div>

                <div className="flex gap-5 mt-5">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/dab5f0396c92fc28ca6cb62ae794d4cb76e61e01?placeholderIfAbsent=true"
                      alt="Social Media"
                      className="object-contain shrink-0 w-5 aspect-square"
                    />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/4aedcbd475926a51c72a04ed57b9a5b2068eb268?placeholderIfAbsent=true"
                      alt="Social Media"
                      className="object-contain shrink-0 w-5 aspect-square"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-5 justify-between items-start px-px pt-11 pb-px mt-28 w-full text-xs leading-none border-t border-white border-opacity-10 text-slate-400 max-md:mt-10 max-md:max-w-full">
          <p>
            © 2026 Liminil Digital Transformation Consulting. All rights
            reserved.
          </p>
          <nav className="flex gap-9 font-bold tracking-wider uppercase whitespace-nowrap">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};
