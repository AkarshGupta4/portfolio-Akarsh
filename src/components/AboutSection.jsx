import React, { useEffect, useRef } from "react";
import profileImg from "../assets/akarshprofile.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left Image Animation
    gsap.fromTo(
      leftRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Right Content Animation
    gsap.fromTo(
      rightRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  // Create 50 stars
  const stars = Array.from({ length: 50 });

  return (
    <section
      id="about"
      className="relative min-h-screen w-full bg-gradient-to-b from-black to-[#9a74cf50] flex items-center justify-center px-6 md:px-12 lg:px-20 py-16 overflow-hidden"
    >
      {/* Floating Stars */}
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 5}s infinite alternate`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="max-w-5xl w-full flex flex-col md:flex-row items-start gap-12 relative z-10">
        {/* Left Image */}
        <div ref={leftRef} className="w-full md:w-1/2 flex justify-center md:justify-start">
          <a  target="_blank" rel="noopener noreferrer" title="Open image">
            <img
              src={profileImg}
              alt="Akarsh Profile"
              loading="lazy"
              className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md h-auto object-contain object-center shadow-xl"
            />
          </a>
        </div>


        {/* Right Content */}
        <div ref={rightRef} className="w-full md:w-1/2 flex flex-col">
          {/* Heading Top */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 self-start">
            About <span className="text-purple-400">Me</span>
          </h2>

          {/* Bigger Text Middle */}
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 text-center md:text-left">
            Hi, I’m <span className="text-purple-300 font-semibold">Akarsh</span> 👋 —
            a passionate <span className="text-purple-400 font-semibold">Full Stack Developer</span>
            who loves building, experimenting, and constantly exploring new ideas.
            <br /><br />
            Over time, I’ve developed skills in{" "}
            <span className="text-purple-300">Java, React, Tailwind, and Data Structures & Algorithms</span>
            and applied them to projects ranging from responsive websites to interactive applications.
            <br /><br />
            What drives me is curiosity and the excitement of turning challenges into opportunities.
            Whether it’s coding, designing, or problem-solving, I aim to create work that is not only
            functional but also enjoyable to use. 🚀
            <br /><br />
            Beyond tech, I’m passionate about{" "}
            <span className="text-purple-300">innovation, teamwork, and continuous learning</span>,
            and I see every project as a chance to grow while contributing something meaningful.
          </p>

          
        </div>
      </div>

      {/* Star animation */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8);}
          50% { opacity: 1; transform: scale(1);}
          100% { opacity: 0.2; transform: scale(0.8);}
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
