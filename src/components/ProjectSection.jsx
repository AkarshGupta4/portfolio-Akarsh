import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub } from "react-icons/fi";

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const horizontalRef = useRef(null);
  const cardRefs = useRef([]);

  const projectImages = [
    {
      id: 1,
      title: "VetLink",
      imageSrc: "/image/VetLink.png",
      githubLink: "https://github.com/AkarshGupta4/VetLink",
    },
    {
      id: 2,
      title: "Portfolio Website",
      imageSrc: "/image/VetLink.png",
      githubLink: "https://github.com/AkarshGupta4/portfolio",
    },
    {
      id: 3,
      title: "BMI App",
      imageSrc: "/image/VetLink.png",
      githubLink: "https://github.com/AkarshGupta4/BMI-App",
    },
    {
      id: 4,
      title: "Weather App",
      imageSrc: "/image/VetLink.png",
      githubLink: "https://github.com/AkarshGupta4/weather-app",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animations
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Horizontal scroll only on medium+ screens; stack on mobile
    let horizontalScroll = null;
    const enableHorizontal = () => {
      if (window.innerWidth >= 768 && !horizontalScroll) {
        horizontalScroll = gsap.to(horizontalRef.current, {
          x: () => -(horizontalRef.current.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3000",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    };

    const disableHorizontal = () => {
      if (horizontalScroll) {
        horizontalScroll.kill();
        horizontalScroll = null;
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        disableHorizontal();
      } else {
        enableHorizontal();
      }
    };

    enableHorizontal();
    window.addEventListener("resize", handleResize);

    // Sequential pop-out with bounce for all cards
    cardRefs.current.forEach((card, idx) => {
      gsap.fromTo(
        card,
        {
          scale: 0,
          opacity: 0,
          skewX: 10,
          skewY: 10,
          boxShadow: "0px 0px 0px rgba(0,0,0,0)",
          transformOrigin: "top left",
        },
        {
          scale: 1,
          opacity: 1,
          skewX: 0,
          skewY: 0,
          boxShadow: "10px 10px 40px rgba(0,0,0,0.5)",
          duration: 0.8,
          ease: "back.out(1.7)", // bounce effect
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: idx * 0.2, // sequential delay
        }
      );
    });

    return () => {
      disableHorizontal();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Hover tilt with dynamic shadow
  const handleMouseMove = (e, cardElement) => {
    if (!cardElement) return;
    const rect = cardElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    gsap.to(cardElement, {
      rotationX: rotateX,
      rotationY: rotateY,
      boxShadow: `${-rotateY * 2}px ${rotateX * 2}px 40px rgba(0,0,0,0.6)`,
      transformPerspective: 800,
      duration: 0.2,
      ease: "power1.out",
    });
  };

  const handleMouseLeave = (cardElement) => {
    if (!cardElement) return;
    gsap.to(cardElement, {
      rotationX: 0,
      rotationY: 0,
      boxShadow: "10px 10px 40px rgba(0,0,0,0.5)",
      duration: 0.5,
      ease: "power3.out",
    });
  };

  // Floating stars
  const stars = Array.from({ length: 60 });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Floating Stars */}
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animation: `drift ${Math.random() * 20 + 10}s linear infinite, twinkle ${
              Math.random() * 5 + 3
            }s infinite alternate`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Heading */}
      <div className="sticky top-0 z-20 bg-black/50 backdrop-blur-sm py-6 md:py-10">
        <h2
          ref={titleRef}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
        >
          Featured Projects
        </h2>
        <div
          ref={titleLineRef}
          className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto max-w-[200px] opacity-0"
        />
      </div>

      {/* Horizontal Scroll Projects */}
      <div className="relative min-h-[80vh] md:min-h-screen">
        <div
          ref={horizontalRef}
          className="flex static md:absolute left-0 px-4 md:px-[10vw] md:flex-row flex-col gap-8 md:gap-[10vw]"
        >
          {projectImages.map((project, idx) => (
            <div
              key={project.id}
              className="w-full md:w-[80vw] flex-shrink-0 mx-0 md:mx-[10vw] flex items-center justify-center py-4"
            >
              <div
                ref={(el) => (cardRefs.current[idx] = el)}
                className="w-full max-w-md sm:max-w-xl md:max-w-4xl aspect-video relative group"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                {/* Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 group-hover:duration-200"></div>

                {/* Card */}
                <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-2xl"
                    src={project.imageSrc}
                    alt={project.title}
                  />
                  <div className="flex items-center gap-3 md:gap-4 mt-3 md:mt-6 justify-center relative z-10 pb-4">
                    <h2 className="text-xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-400 transition-colors duration-300"
                    >
                      <FiGithub className="w-5 h-5 md:w-6 md:h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Star animations */}
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.8);}
          50% { opacity: 1; transform: scale(1);}
          100% { opacity: 0.2; transform: scale(0.8);}
        }
        @keyframes drift {
          0% { transform: translateY(0) translateX(0);}
          50% { transform: translateY(20px) translateX(10px);}
          100% { transform: translateY(0) translateX(0);}
        }
      `}</style>
    </section>
  );
};

export default ProjectSection;
