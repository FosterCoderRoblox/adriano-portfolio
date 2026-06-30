import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { MENULINKS, SKILLS } from "../../constants";

const Skills = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none" } })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector(".skills-wrapper"),
        start: "100px bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[1].ref}
      aria-label="Skills"
      className="w-full relative select-none mt-4"
    >
      {/* Scattered buildings background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
        {[
          { top: "10%", left: "5%",  width: 90,  opacity: 0.13, rotate: -18 },
          { top: "60%", left: "2%",  width: 70,  opacity: 0.10, rotate: 12  },
          { top: "20%", left: "18%", width: 60,  opacity: 0.09, rotate: 25  },
          { top: "75%", left: "15%", width: 100, opacity: 0.12, rotate: -8  },
          { top: "5%",  left: "40%", width: 80,  opacity: 0.08, rotate: 35  },
          { top: "80%", left: "38%", width: 65,  opacity: 0.11, rotate: -22 },
          { top: "15%", left: "65%", width: 95,  opacity: 0.10, rotate: 15  },
          { top: "70%", left: "60%", width: 75,  opacity: 0.13, rotate: -30 },
          { top: "40%", left: "80%", width: 85,  opacity: 0.09, rotate: 20  },
          { top: "5%",  left: "88%", width: 70,  opacity: 0.11, rotate: -12 },
          { top: "85%", left: "85%", width: 90,  opacity: 0.10, rotate: 8   },
        ].map((s, i) => (
          <img
            key={i}
            src="/skills-bg.png"
            alt=""
            style={{
              position: "absolute",
              top: s.top,
              left: s.left,
              width: s.width,
              opacity: s.opacity,
              transform: `rotate(${s.rotate}deg)`,
              filter: "brightness(0.6) saturate(0) drop-shadow(0 0 6px #38bdf8)",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>

      <div className="section-container py-16 flex flex-col justify-center items-center text-center" style={{ position: "relative", zIndex: 1 }}>
        <div className="flex flex-col skills-wrapper items-center w-full">
          <div className="flex flex-col items-center">
            <h2 className="text-6xl mt-2 font-medium text-gradient w-fit staggered-reveal">
              My Skills
            </h2>
            <p className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 staggered-reveal">
              My Tools and Skills👀🛠️ by Adriano - CoderFoster.{" "}
            </p>
          </div>
          <div className="mt-10 w-full flex flex-col items-center">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 staggered-reveal">
              C++, Python, Luau, HTML, Blender, VSCode
            </h3>
            <div className="flex items-center justify-center flex-wrap gap-6 staggered-reveal">
              {SKILLS.languagesAndTools.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
