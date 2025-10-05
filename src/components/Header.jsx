import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    // contact form state
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const openContactForm = () => setContactFormOpen(true);
    const closeContactForm = () => setContactFormOpen(false);

    return (
        <header className="absolute w-full z-50 transition-all duration-300 left-0">
            {/* ✅ Yahan px-6 md:px-10 use kiya hai takki right aur left dono side space mile */}
            <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-10">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        delay: 0.3,
                        duration: 1.2,
                    }}
                    className="flex items-center"
                >
                    <a href="#home" aria-label="Home" className="flex items-center">
                        <div className="h-10 w-10 mr-3 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 ring-2 ring-gray-200 grid place-items-center shadow-md">
                            <span className="text-purple-700 font-extrabold text-base">A</span>
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            Akarsh
                        </span>
                    </a>
                </motion.div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center space-x-12">
                    {[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Project",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}].map((item, index) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                delay: 0.7 + index * 0.2,
                            }}
                            className="relative text-gray-300 dark:text-gray-200 font-medium transition-colors duration-300 group hover:text-violet-600 dark:hover:text-violet-400"
                        >
                            {item.label}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
                        </motion.a>
                    ))}
                </nav>

                {/* Desktop Social + Buttons */}
                <div className="hidden lg:flex items-center space-x-6">
                    {[{
                        href: "https://github.com/AkarshGupta4",
                        icon: <FiGithub className="w-5 h-5" />
                    }, {
                        href: "https://www.linkedin.com/in/akarsh-gupta-497720267/",
                        icon: <FiLinkedin className="w-5 h-5" />
                    }, {
                        href: "https://www.instagram.com/akarshgupta.004",
                        icon: <FiInstagram className="w-5 h-5" />
                    }].map((social, i) => (
                        <motion.a
                            key={i}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.3 }}
                            href={social.href}
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                        >
                            {social.icon}
                        </motion.a>
                    ))}

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 100, damping: 15 }}
                        className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 text-purple-700 font-bold transition-transform duration-300 hover:text-white hover:from-violet-700 hover:to-purple-400"
                    >
                        Hire Me
                    </motion.a>

                    <motion.a
                        href="/Akarsh-CV.pdf"
                        download="Akarsh-CV.pdf"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 1.6, type: "spring", stiffness: 100, damping: 15 }}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r 
                                   from-gray-500 to-gray-100 text-purple-700 font-bold 
                                   transition-transform duration-300 hover:text-white 
                                   hover:from-violet-700 hover:to-purple-400"
                    >
                        Download CV
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center">
                    <motion.button whileTap={{ scale: 0.7 }} onClick={toggleMenu} className="text-gray-200">
                        {isOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden overflow-hidden bg-gray-900/90 backdrop-blur-md text-white shadow-lg px-4 py-5 space-y-5 rounded-b-2xl"
            >
                <nav className="flex flex-col space-y-3">
                    {[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Project",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}].map((item, index) => (
                        <a
                            onClick={toggleMenu}
                            key={index}
                            href={item.href}
                            className="text-gray-300 font-medium py-2 px-2 hover:text-violet-400 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex space-x-4 px-2">
                    <a href="https://github.com/AkarshGupta4" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">
                        <FiGithub className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/akarsh-gupta-497720267/" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">
                        <FiLinkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/akarshgupta.004" rel="noopener noreferrer" className="hover:text-violet-500 transition-colors">
                        <FiInstagram className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex flex-col space-y-3 px-2 mt-3">
                    <button
                        onClick={openContactForm}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 text-purple-700 font-bold hover:text-white hover:from-violet-700 hover:to-purple-400 transition-transform duration-300"
                    >
                        Contact Me
                    </button>

                    <a
                        href="/Akarsh-CV.pdf"
                        download="Akarsh-CV.pdf"
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 
                                   text-purple-700 font-bold hover:text-white 
                                   hover:from-violet-700 hover:to-purple-400 
                                   transition-transform duration-300 text-center"
                    >
                        Download CV
                    </a>
                </div>
            </motion.div>

            {/* Contact form Modal with AnimatePresence */}
            <AnimatePresence>
                {contactFormOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        onClick={closeContactForm}
                        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    >
                        {/* Contact Form Content */}
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="bg-gray-800 rounded-xl shadow-xl p-6 w-full max-w-md"
                        >
                            <h1 className="text-2xl font-bold text-gray-300 mb-4">Get In Touch</h1>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-left text-sm font-medium text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg 
                                                   focus:ring-2 focus:ring-violet-500 focus:border-violet-500 
                                                   bg-gray-700 text-white placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-left text-sm font-medium text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg 
                                                   focus:ring-2 focus:ring-violet-500 focus:border-violet-500 
                                                   bg-gray-700 text-white placeholder-gray-400"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-left text-sm font-medium text-gray-300 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Your Message"
                                        className="w-full px-4 py-2 border border-gray-600 rounded-lg 
                                                   focus:ring-2 focus:ring-violet-500 focus:border-violet-500 
                                                   bg-gray-700 text-white placeholder-gray-400"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    whileHover={{ scale: 1.03 }}
                                    type="submit"
                                    className="w-full px-4 py-2 rounded-xl bg-gradient-to-r 
                                               hover:from-purple-700 hover:to-purple-700 font-bold 
                                               hover:text-white from-violet-700 to-purple-400 
                                               transition-transform duration-300"
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
