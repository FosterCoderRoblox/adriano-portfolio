import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import Profiles from "../Profiles/Profiles";
import styles from "./Hero.module.scss";
import { MENULINKS, TYPED_STRINGS } from "../../constants";

const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const Hero = () => {
  const [lottie, setLottie] = useState(null);
  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const typed = new Typed(typedElementRef.current, options);
    return () => typed.destroy();
  }, [typedElementRef]);

  useEffect(() => {
    import("lottie-web").then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lottie/lottie.json"),
      });
      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      aria-label="Introduction"
      className="w-full flex md:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      style={{ opacity: 0 }}
    >
      <style global jsx>{`
        .typed-cursor { font-size: 2.5rem; color: #38bdf8; }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink-dot {
          display: inline-block;
          width: 11px;
          height: 11px;
          background: #ff3b3b;
          border-radius: 50%;
          margin-left: 5px;
          animation: blink 1s infinite;
          vertical-align: middle;
          position: relative;
          top: 4px;
        }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #38bdf8; border-radius: 3px; }
      `}</style>

      {/* Scattered code snippets background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0, pointerEvents: "none" }}>
        {[
          { top: "8%",  left: "3%",  width: 110, opacity: 0.18, rotate: -15 },
          { top: "55%", left: "1%",  width: 85,  opacity: 0.15, rotate: 10  },
          { top: "25%", left: "22%", width: 75,  opacity: 0.14, rotate: 20  },
          { top: "78%", left: "20%", width: 95,  opacity: 0.17, rotate: -25 },
          { top: "5%",  left: "45%", width: 80,  opacity: 0.13, rotate: 30  },
          { top: "82%", left: "42%", width: 70,  opacity: 0.15, rotate: -18 },
          { top: "18%", left: "70%", width: 100, opacity: 0.16, rotate: 12  },
          { top: "72%", left: "68%", width: 80,  opacity: 0.17, rotate: -28 },
          { top: "42%", left: "85%", width: 90,  opacity: 0.14, rotate: 22  },
          { top: "10%", left: "90%", width: 75,  opacity: 0.15, rotate: -10 },
          { top: "88%", left: "88%", width: 85,  opacity: 0.16, rotate: 6   },
        ].map((s, i) => (
          <img
            key={i}
            src="/code-bg.png"
            alt=""
            style={{
              position: "absolute",
              top: s.top,
              left: s.left,
              width: s.width,
              opacity: s.opacity,
              transform: `rotate(${s.rotate}deg)`,
              filter: "brightness(1.2) drop-shadow(0 0 8px #38bdf8)",
              borderRadius: "6px",
              border: "1px solid rgba(56,189,248,0.5)",
            }}
          />
        ))}

        {/* Summer floating particles ☀️ */}
        <style>{`
          @keyframes floatUp {
            0%   { transform: translateY(0px) scale(1); opacity: 0.7; }
            50%  { transform: translateY(-30px) scale(1.1); opacity: 1; }
            100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
          }
          @keyframes sway {
            0%, 100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
            25%  { transform: translateX(8px) translateY(-15px) rotate(5deg); }
            75%  { transform: translateX(-8px) translateY(-30px) rotate(-5deg); }
          }
          @keyframes sunPulse {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50%  { opacity: 1; transform: scale(1.2); }
          }
          .summer-particle { position: absolute; pointer-events: none; font-size: 1.4rem; animation: sway linear infinite; }
          .summer-star { position: absolute; pointer-events: none; width: 4px; height: 4px; border-radius: 50%; background: #38bdf8; animation: floatUp ease-in infinite; }
        `}</style>

        {/* Emoji particles */}
        {[
          { emoji: "☀️", top: "12%", left: "8%",  delay: "0s",   dur: "6s",  size: "1.8rem" },
          { emoji: "🌿", top: "70%", left: "6%",  delay: "1s",   dur: "7s",  size: "1.4rem" },
          { emoji: "🌸", top: "30%", left: "50%", delay: "2s",   dur: "8s",  size: "1.3rem" },
          { emoji: "⭐", top: "15%", left: "75%", delay: "0.5s", dur: "5s",  size: "1.2rem" },
          { emoji: "🌊", top: "80%", left: "55%", delay: "3s",   dur: "9s",  size: "1.5rem" },
          { emoji: "✨", top: "50%", left: "30%", delay: "1.5s", dur: "6s",  size: "1.1rem" },
          { emoji: "🌴", top: "88%", left: "80%", delay: "2.5s", dur: "7s",  size: "1.6rem" },
          { emoji: "💫", top: "5%",  left: "60%", delay: "0.8s", dur: "8s",  size: "1.2rem" },
        ].map((p, i) => (
          <span
            key={`emoji-${i}`}
            className="summer-particle"
            style={{
              top: p.top,
              left: p.left,
              fontSize: p.size,
              animationDelay: p.delay,
              animationDuration: p.dur,
              opacity: 0.55,
            }}
          >
            {p.emoji}
          </span>
        ))}

        {/* Floating blue dots */}
        {[
          { top: "20%", left: "12%", delay: "0s",   dur: "4s"  },
          { top: "60%", left: "35%", delay: "1.2s", dur: "5s"  },
          { top: "40%", left: "62%", delay: "0.6s", dur: "6s"  },
          { top: "75%", left: "78%", delay: "2s",   dur: "4.5s"},
          { top: "10%", left: "55%", delay: "1.8s", dur: "5.5s"},
          { top: "85%", left: "15%", delay: "0.3s", dur: "4s"  },
        ].map((d, i) => (
          <div
            key={`dot-${i}`}
            className="summer-star"
            style={{
              top: d.top,
              left: d.left,
              animationDelay: d.delay,
              animationDuration: d.dur,
              boxShadow: "0 0 6px #38bdf8",
            }}
          />
        ))}
      </div>

      <div className="flex flex-col pt-40 md:pt-0 select-none" style={{ zIndex: 1, position: "relative" }}>
        {/* Name row */}
        <div className="staggered-reveal" style={{ display: "flex", alignItems: "baseline", gap: "16px", flexWrap: "wrap" }}>
          <h1 className={`${styles.heroName} font-semibold`} style={{ fontSize: "5.5rem", lineHeight: 1, color: "#ffffff", textShadow: "0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)" }}>
            <span className={`relative ${styles.emphasize}`}>Adriano</span>
          </h1>
          <span style={{ color: "#ff3b3b", fontSize: "2.4rem", fontWeight: 500, textShadow: "0 0 10px rgba(255,50,50,0.9), 0 0 25px rgba(200,0,0,0.7), 0 0 50px rgba(150,0,0,0.4)" }}>
            Developer<span className="blink-dot"></span>
          </span>
        </div>

        {/* Typed */}
        <p style={{ marginTop: "1.2rem" }}>
          <span
            ref={typedElementRef}
            className="staggered-reveal"
            style={{ fontSize: "2.2rem", color: "#38bdf8", fontFamily: "monospace", lineHeight: 1.4 }}
          />
        </p>

        {/* Social icons */}
        <div className="staggered-reveal" style={{ marginTop: "1.5rem" }}>
          <Profiles />
        </div>
      </div>

      {/* Video on the right */}
      <div style={{
        position: "absolute",
        right: "2rem",
        top: "50%",
        transform: "translateY(-50%)",
      }} className="hidden lg:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "480px",
            height: "340px",
            objectFit: "cover",
            objectPosition: "top center",
            borderRadius: "16px",
            border: "2px solid rgba(56,189,248,0.3)",
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
