"use client";
import React from "react";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProblemSection } from "./ProblemSection";
import { LogosSection } from "./LogosSection";
import { InBetweenSection } from "./InBetweenSection";
import { MethodologySection } from "./MethodologySection";
import { PlatformSection } from "./PlatformSection";
import { CaseStudySection } from "./CaseStudySection";
import { CTASection } from "./CTASection";
import { Footer } from "./Footer";

function WLight() {
  return (
    <div className="w-full bg-[#0A0C10] min-h-screen">
      {/* Header sits at the top of the dark hero */}
      <div className="w-full bg-slate-900 flex justify-center">
        <div className="w-full max-w-[1440px] px-10 md:px-20 pt-10">
          <Header />
        </div>
      </div>

      <main className="w-full">
        <HeroSection />
        <ProblemSection />
        <LogosSection />
        <InBetweenSection />
        <MethodologySection />
        <PlatformSection />
        <CaseStudySection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default WLight;
