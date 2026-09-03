"use client";

import { useState, useCallback } from "react";
import SmoothScroll from "@/lib/smooth-scroll";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import StaggeredMenu from "@/components/StaggeredMenu";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {/* Loading screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Scroll progress bar */}
      {!isLoading && <ScrollProgress />}

      {/* Noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation — StaggeredMenu stacked on left side */}
      {!isLoading && (
        <StaggeredMenu
          position="left"
          items={[
            { label: "About", ariaLabel: "Go to About section", link: "#about" },
            { label: "Skills", ariaLabel: "Go to Skills section", link: "#skills" },
            { label: "Projects", ariaLabel: "Go to Projects section", link: "#projects" },
            { label: "Experience", ariaLabel: "Go to Experience section", link: "#experience" },
            { label: "Education", ariaLabel: "Go to Education section", link: "#education" },
            { label: "Contact", ariaLabel: "Go to Contact section", link: "#contact" },
          ]}
          socialItems={[
            { label: "GitHub", link: "https://github.com/sruthikeerthana1805" },
            { label: "LinkedIn", link: "https://www.linkedin.com/in/ch-sruthi-743526374" },
          ]}
          displaySocials={true}
          displayItemNumbering={true}
          colors={["#0d0d0f", "#1e1e24"]}
          accentColor="#22D3EE"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#22D3EE"
        />
      )}

      {/* Main content */}
      <SmoothScroll>
        <main>
          {/* Hero — cinematic editorial section */}
          <Hero />

          <Introduction />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
