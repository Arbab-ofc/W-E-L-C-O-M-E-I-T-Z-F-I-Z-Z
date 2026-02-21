import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatsRow from "./StatsRow.jsx";
import heroVisual from "../assets/hero-visual.png";

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = "W E L C O M E  I T Z  F I Z Z";

const STATS = [
  { value: "58%", label: "Increase in pick up point use", tone: "lime" },
  { value: "27%", label: "Increase in repeat drop-offs", tone: "ink" },
  { value: "23%", label: "Decrease in customer phone calls", tone: "sky" },
  { value: "40%", label: "Decrease in support tickets", tone: "tangerine" },
];

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const statsRef = useRef(null);
  const visualRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const headlineChars = gsap.utils.toArray(
        headlineRef.current.querySelectorAll(".char")
      );
      const statCards = gsap.utils.toArray(
        statsRef.current.querySelectorAll(".stat-card")
      );

      const VISIBLE_EDGE = 80;
      const getCarWidth = () => {
        if (!visualRef.current) {
          return 0;
        }
        return visualRef.current.clientWidth;
      };

      const getEndX = () => {
        if (!trackRef.current || !visualRef.current) {
          return 0;
        }
        const trackWidth = trackRef.current.clientWidth;
        return Math.max(0, trackWidth - VISIBLE_EDGE);
      };

      if (prefersReduced) {
        // Reduced motion: show everything immediately.
        gsap.set([headlineChars, statCards, visualRef.current], {
          opacity: 1,
          y: 0,
          x: 0,
          xPercent: 0,
          yPercent: -50,
          scale: 1,
          rotate: 0,
        });
      } else {
        // Intro animation on load.
        gsap.set(headlineChars, { opacity: 0, y: 18 });
        // Stats should appear when the car starts moving.
        gsap.set(statCards, { opacity: 0, y: 20 });
        gsap.set(visualRef.current, {
          opacity: 0,
          x: () => -(getCarWidth() - VISIBLE_EDGE),
          yPercent: -50,
        });

        const intro = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.9 },
        });

        intro
          .to(headlineChars, {
            opacity: 1,
            y: 0,
            stagger: 0.025,
          })
          .to(visualRef.current, { opacity: 1 }, "-=0.4");
      }

      // Scroll-linked animation for the hero section.
      gsap
        .timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 0.8,
            pin: true,
          },
        })
        // Visual glides horizontally only (no vertical shift or rotation).
        .fromTo(
          visualRef.current,
          { x: () => -(getCarWidth() - VISIBLE_EDGE) },
          {
            x: () => getEndX(),
            ease: "none",
          }
        )
        // Reveal stats one by one as the car starts moving.
        .to(
          statCards,
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.out",
          },
          0
        )
        // Track turns green as the car moves forward.
        .to(
          headlineRef.current,
          {
            backgroundColor: "#3ecf5a",
            borderColor: "#2ea84a",
            boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.15)",
            color: "#0a0f0a",
            ease: "none",
          },
          0
        )
        // Keep track static during scroll.
    }, heroRef);

    // Cleanup ScrollTriggers + animations on unmount.
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-inner">
        <div className="track" ref={trackRef}>
          <div className="headline" ref={headlineRef} aria-label={HEADLINE}>
            {HEADLINE.split("").map((char, index) => (
              <span className="char" key={`${char}-${index}`}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

          <div className="hero-visual" ref={visualRef} aria-hidden="true">
            <img src={heroVisual} alt="Stylized car" />
          </div>
        </div>

        <div className="stats" ref={statsRef}>
          <StatsRow stats={STATS} />
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
