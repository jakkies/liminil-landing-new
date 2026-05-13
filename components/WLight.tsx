"use client";

import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProblemSection } from "./ProblemSection";
import { LogosSection } from "./LogosSection";
import { InBetweenSection } from "./InBetweenSection";
{/*import { MethodologySection } from "./MethodologySection";*/ }
import { PlatformSection } from "./PlatformSection";
import { CaseStudySection } from "./CaseStudySection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";



function WLight() {
  return (
    <div className="min-h-screen w-full bg-white font-['Inter',Arial,sans-serif] text-[#091839]">
      <Header />
      <HeroSection />
      <ProblemSection />
      <LogosSection />
      <InBetweenSection />
      {/*<MethodologySection />*/}
      <PlatformSection />
      {/* <CaseStudySection /> */}
      <CTASection />
      <Footer />
    </div>
  );
}

export default WLight;
