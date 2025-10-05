import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const stars = Array.from({ length: 30 });

  return (
    <footer className="relative -mt-2">
      {/* Starry gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9a74cf20] to-black" />
      {stars.map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute bg-white rounded-full opacity-70"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `twinkle ${Math.random() * 5 + 5}s infinite alternate`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative z-10 py-8">
        <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col items-center gap-6 text-gray-300">
          <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 w-32 rounded-full" />
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/AkarshGupta4"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
          </div>
          <p className="text-sm text-gray-400 text-center">© {new Date().getFullYear()} Akarsh Gupta. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.9);}
          50% { opacity: 1; transform: scale(1);}
          100% { opacity: 0.2; transform: scale(0.9);}
        }
      `}</style>
    </footer>
  );
};

export default Footer;
