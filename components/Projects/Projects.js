import { useEffect, useRef } from "react";
import { MENULINKS, PROJECTS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";

const Projects = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);

  useEffect(() => {
    let revealScrollTrigger;
    let revealTimeline;

    const revealTl = gsap.timeline({ defaults: { ease: "none" } });
    revealTl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.3 },
      "<"
    );
    revealScrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });
    revealTimeline = revealTl;

    return () => {
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [sectionRef, sectionTitleRef, isDesktop]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      aria-label="Projects"
      className="w-full relative select-none section-container transform-gpu py-20"
    >
      {/* Scattered A letters background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
        {[
          { top: "5%",  left: "3%",  size: "8rem",  opacity: 0.04, rotate: -20 },
          { top: "60%", left: "1%",  size: "6rem",  opacity: 0.03, rotate: 15  },
          { top: "20%", left: "80%", size: "10rem", opacity: 0.04, rotate: 25  },
          { top: "70%", left: "75%", size: "7rem",  opacity: 0.03, rotate: -10 },
          { top: "40%", left: "40%", size: "12rem", opacity: 0.03, rotate: 5   },
          { top: "85%", left: "30%", size: "8rem",  opacity: 0.04, rotate: -30 },
          { top: "10%", left: "55%", size: "9rem",  opacity: 0.03, rotate: 18  },
          { top: "50%", left: "88%", size: "7rem",  opacity: 0.04, rotate: -15 },
        ].map((s, i) => (
          <span key={i} style={{
            position: "absolute",
            top: s.top,
            left: s.left,
            fontSize: s.size,
            opacity: s.opacity,
            transform: `rotate(${s.rotate}deg)`,
            color: "#ffffff",
            fontFamily: "Arial, sans-serif",
            fontWeight: "bold",
            textShadow: "0 0 20px rgba(255,255,255,0.5)",
            userSelect: "none",
            lineHeight: 1,
          }}>A</span>
        ))}
      </div>

      <div className="flex flex-col items-center" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col inner-container transform-gpu items-center text-center mb-12" ref={sectionTitleRef}>
          <h2
            className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal"
            style={{ textShadow: "0 0 20px rgba(56,189,248,0.8), 0 0 40px rgba(56,189,248,0.5), 0 0 80px rgba(56,189,248,0.2)" }}
          >
            My Projects And Collaborators
          </h2>
        </div>

        <div className="flex justify-center gap-8 staggered-reveal">
          <ProjectTile project={PROJECTS[0]} />
          <ProjectTile project={PROJECTS[1]} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
