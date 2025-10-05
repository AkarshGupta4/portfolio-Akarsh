import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

// React Icons imports
import { 
  SiReact, SiTailwindcss, SiHtml5, SiCss3, SiJavascript,
  SiNodedotjs, SiSpringboot, SiMysql, SiGit, SiGithub, SiPostman, SiYarn,
  SiAndroid, SiFlutter
} from "react-icons/si";

import { FaJava, FaServer, FaCode, FaFigma, FaDocker, FaLinux } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const MyStack = () => {
  const cardsRef = useRef([]);

  const frontendStack = [
    { name: "React", icon: <SiReact /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
  ];

  const backendStack = [
    { name: "Java", icon: <FaJava /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express", icon: <FaServer /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "SQL", icon: <SiMysql /> },
    
    
  ];

  const appDevStack = [
    { name: "Android", icon: <SiAndroid /> },
    { name: "Flutter", icon: <SiFlutter /> },
    { name: "React Native", icon: <SiReact /> },
    { name: "Java", icon: <FaJava /> },
  ];

  const toolsStack = [
    { name: "VS Code", icon: <FaCode /> },
    { name: "Figma", icon: <FaFigma /> },
    { name: "Postman", icon: <SiPostman /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "Linux", icon: <FaLinux /> },
    { name: "NPM/Yarn", icon: <SiYarn /> },
    { name: "Git & GitHub", icon: <SiGithub /> },
    { name: "Agile", icon: null },
    { name: "Teamwork", icon: null },
  ];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 80, scale: 0.9, rotation: -2 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );
  }, []);

  const allStacks = [
    { title: "Frontend", stack: frontendStack },
    { title: "Backend ", stack: backendStack },
    { title: "App Development", stack: appDevStack },
    { title: "Tools & Utilities", stack: toolsStack },
  ];

  // Create 70 floating stars
  const stars = Array.from({ length: 70 });

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-[#9a74cf50] via-violet-950 to-black flex flex-col items-center px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      
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
            opacity: Math.random() * 0.8 + 0.2,
            animation: `drift ${Math.random() * 20 + 10}s linear infinite, twinkle ${Math.random() * 5 + 3}s infinite alternate`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-white mb-10 text-center relative z-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        My <span className="text-purple-400">Tech Stack</span>
      </motion.h1>

      {/* Skill/Tool Cards - 2x2 layout */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {allStacks.map((card, idx) => (
          <motion.div
            key={idx}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="bg-purple-900/40 border border-purple-500 rounded-3xl p-6 shadow-2xl cursor-pointer"
            whileHover={{ y: -5, scale: 1.05, rotate: 1 }}
            initial={{ opacity: 0, y: 50, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
          >
            <h3 className="text-purple-300 font-bold text-2xl mb-4 text-center">{card.title}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {card.stack.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-800/40 border border-purple-400 rounded-xl text-purple-200 text-sm font-medium hover:bg-purple-700 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  {item.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
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

export default MyStack;
