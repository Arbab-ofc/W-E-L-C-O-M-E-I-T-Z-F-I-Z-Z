import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatsRow from "./StatsRow.jsx";
import heroVisual from "../assets/hero-visual.svg";

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

      if (prefersReduced) {
        // Reduced motion: show everything immediately.
        gsap.set([headlineChars, statCards, visualRef.current], {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          rotate: 0,
        });
      } else {
        // Intro animation on load.
        gsap.set(headlineChars, { opacity: 0, y: 18 });
        gsap.set(statCards, { opacity: 0, y: 20 });
        gsap.set(visualRef.current, { opacity: 0, y: 24, scale: 0.98, x: -120 });

        const intro = gsap.timeline({
          defaults: { ease: "power3.out", duration: 0.9 },
        });

        intro
          .to(headlineChars, {
            opacity: 1,
            y: 0,
            stagger: 0.025,
          })
          .to(
            visualRef.current,
            { opacity: 1, y: 0, scale: 1 },
            "-=0.4"
          )
          .to(
            statCards,
            {
              opacity: 1,
              y: 0,
              stagger: 0.12,
              duration: 0.7,
            },
            "-=0.35"
          );
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
        // Visual glides horizontally with slight scale + rotation.
        .fromTo(
          visualRef.current,
          { x: -140, y: 0, scale: 1, rotate: 0 },
          {
            x: 160,
            y: 0,
            scale: 1.06,
            rotate: -1.5,
            ease: "none",
          }
        )
        // Headline drifts up and softens.
        .to(
          headlineRef.current,
          {
            y: -28,
            opacity: 0.7,
            ease: "none",
          },
          0
        )
        // Stats drift downward and soften.
        .to(
          statsRef.current,
          {
            y: 24,
            opacity: 0.65,
            ease: "none",
          },
          0
        );
    }, heroRef);

    // Cleanup ScrollTriggers + animations on unmount.
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-inner">
        <div className="headline" ref={headlineRef} aria-label={HEADLINE}>
          {HEADLINE.split("").map((char, index) => (
            <span className="char" key={`${char}-${index}`}>
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        <div className="stats" ref={statsRef}>
          <StatsRow stats={STATS} />
        </div>

        <div className="hero-visual" ref={visualRef} aria-hidden="true">
          <img src={heroVisual} alt="Stylized car" />
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
