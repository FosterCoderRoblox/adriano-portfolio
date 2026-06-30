import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({ defaults: { ease: "none", duration: 0.1 } })
        .fromTo(quoteRef.current.querySelector(".about-1"), { opacity: 0.2 }, { opacity: 1 })
        .to(quoteRef.current.querySelector(".about-1"), { opacity: 0.2, delay: 0.5 })
        .fromTo(quoteRef.current.querySelector(".about-2"), { opacity: 0.2 }, { opacity: 1 }, "<")
        .to(quoteRef.current.querySelector(".about-2"), { opacity: 0.2, delay: 1 });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
        animation: tl,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} aria-label="About" className="w-full relative select-none">
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/the_boys.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          zIndex: 0,
        }}
      />
      <div
        className={`${clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"} section-container`}
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
          style={{ color: "#ffffff" }}
        >
          <span className="about-1 leading-tight" style={{ color: "#ffffff", opacity: 1 }}>
            I&apos;m a passionate Game Developer and Designer focused on building
            immersive experiences on Roblox.{" "}
          </span>
          <span className="about-2 leading-tight" style={{ color: "#ffffff", opacity: 1 }}>
            I know almost everything related to game development. I have skills in design, programming, building, and map creation. I also run my own studio Stormland Studio. 👀{" "}
          </span>
        </h2>
      </div>
    </section>
  );
};

export default About1;
