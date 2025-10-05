import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen w-full bg-gradient-to-b from-violet-950 to-black flex flex-col md:flex-row items-center justify-between px-0 m-0 overflow-hidden ">
      
      {/* Left Content */}
      <div className="order-2 md:order-1 flex flex-col items-start space-y-6 md:ml-10 px-6 md:px-0 z-10 text-center md:text-left mt-10 md:mt-0">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 20, duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
        >
          Hi, I'm <span className="text-purple-400">Akarsh</span>{" "}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 20, -10, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="inline-block"
          >
          
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl"
        >
          I’m a{" "}
          <span className="text-purple-300 font-semibold">Full Stack Developer</span>{" "}
          who loves building modern and scalable web applications 🚀
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1.5 }}
          className="flex flex-row gap-3 items-center md:items-start"
        >
          <motion.a
            href="/Akarsh-CV.pdf"
            download="Akarsh-CV.pdf"
            className="px-6 py-3 rounded-xl border border-purple-400 text-purple-300 font-semibold hover:bg-purple-800 transition"
          >
            Download CV
          </motion.a>

          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Right 3D Model */}
      <div className="order-1 md:order-2 relative w-full md:w-1/2 h-[380px] sm:h-[450px] md:h-[600px] lg:h-[700px] flex justify-center md:justify-end mt-6 md:mt-0">
        <Spline scene="https://prod.spline.design/L84S1rtpUzKctYy6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </section>
  );
};

export default HeroSection;
