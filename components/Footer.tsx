import React from "react";

const FooterColumn: React.FC<{ title: string; items: React.ReactNode[] }> = ({
  title,
  items,
}) => {
  return (
    <div className="flex flex-col">
      <h4 className="text-xs font-bold uppercase tracking-[1.2px] text-white">
        {title}
      </h4>
      <ul className="mt-10 space-y-6 text-sm leading-none">
        {items.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer: React.FC = () => {
  const methodologyItems = [
    <a href="#method">Method</a>,
    <a href="#platform">Platform</a>,
  ];

  const platformItems = [
    <a href="https://www.linkedin.com/company/liminil-the-space-in-between/" target="_blank">LinkedIn</a>
  ];

  return (
    <footer id="contact" className="relative w-full border-t border-white/10 bg-[#091839] px-6 py-12 text-slate-400 lg:h-[321px] lg:px-0 lg:py-0">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[282px_282px_282px_282px] lg:gap-[32px] lg:pt-[48px]">
          <div>
            <img
              src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/97b851747356e07c288e3d975eab9ebdd3749bd8?placeholderIfAbsent=true"
              alt="Liminil"
              className="h-auto w-[135px]"
            />
            <p className="mt-10 text-sm leading-6 lg:max-w-[282px]">
              The elite partner for high-stakes enterprise digital
              transformation. Mastering the unknown through engineering and
              insight.
            </p>
          </div>

          <FooterColumn title="What we Do" items={methodologyItems} />
          <FooterColumn title="Follow Us" items={platformItems} />

          <div className="flex flex-col">
            <h4 className="text-xs font-bold uppercase tracking-[1.2px] text-white">
              Contact
            </h4>
            <div className="mt-10 space-y-5 text-sm leading-none">
              {/*<div className="flex items-center gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/1673b5230c3c8b0692c888ec224b3cb5c304a09f?placeholderIfAbsent=true"
                  alt=""
                  className="size-4"
                />
                <a
                  href="tel:+27832237875"
                  className="transition-colors hover:text-white"
                >
                  +27 83 223 7875
                </a>
              </div>  */}
              <div className="flex items-center gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/d42e8efc53f747480d5dbd212876603516f29242?placeholderIfAbsent=true"
                  alt=""
                  className="size-4"
                />
                <a
                  href="mailto:info@liminil.net"
                  className="transition-colors hover:text-white"
                >
                  info@liminil.net
                </a>
              </div>
              <div className="flex items-start gap-3">
                <img
                  src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/078b913c9bd89881403edc8c64fc285b3903d392?placeholderIfAbsent=true"
                  alt=""
                  className="size-4"
                />
                <address className="not-italic">Hermanus, South Africa</address>
              </div>
            </div>
            <div className="mt-5 flex gap-5">
              <a href="https://www.linkedin.com/company/liminil-the-space-in-between/" target="_blank" className="transition-opacity hover:opacity-80">
                <img
                  src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/dab5f0396c92fc28ca6cb62ae794d4cb76e61e01?placeholderIfAbsent=true"
                  alt=""
                  className="size-8"
                />
              </a>
              {/*<a href="#" className="transition-opacity hover:opacity-80">
                <img
                  src="https://api.builder.io/api/v1/image/assets/8f26f1c206a649d6a991327ba59478de/4aedcbd475926a51c72a04ed57b9a5b2068eb268?placeholderIfAbsent=true"
                  alt=""
                  className="size-8"
                />
              </a>*/}
            </div>
          </div>
        </div>

        <div className="mt-28 flex flex-wrap items-center justify-between border-t border-white/10 pt-1 text-xs lg:h-[64px] lg:mt-[28px]">
          <p>
            © 2026 LIMINIL (Pty) Ltd). All rights
            reserved.
          </p>
          {/*<nav className="flex gap-9 font-bold uppercase tracking-[1.2px]">
            <a href="#" className="transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookies
            </a>
          </nav>*/}
        </div>
      </div>
    </footer>
  );
};
