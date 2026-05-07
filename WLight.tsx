"use client";
import React, { useState } from "react";
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
  const [location, setLocation] = useState(() => ({
    path: "",
    query: {},
  }));

  const [deviceSize, setDeviceSize] = useState(() => "large");

  return (
    <div className="flex gap-2.5 items-center bg-blue-600">
      <div className="self-stretch my-auto bg-gray-800 w-[1920px] max-md:max-w-full">
        <div className="w-full bg-white max-md:max-w-full">
          <main>
            <HeroSection />
            <Header />
            <ProblemSection />
            <LogosSection />
            <InBetweenSection />
            <MethodologySection />
            <PlatformSection />
            <CaseStudySection />
            <CTASection />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default WLight;
