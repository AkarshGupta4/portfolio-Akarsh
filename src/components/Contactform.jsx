import React, { useState } from "react";

const ContactForm = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5bbb6e4b-ef1c-4056-8d64-15624b6cac33");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Failed to send. Please try again later.");
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (!isTyping) setIsTyping(true);
  };

  // legacy local submit removed; using web3forms onSubmit above

  // floating stars similar to other sections
  const stars = Array.from({ length: 50 });

  return (
    <section id="contact" className="relative min-h-screen w-full bg-gradient-to-b from-black to-[#9a74cf50] flex items-center justify-center px-6 md:px-12 lg:px-20 py-16 overflow-hidden">
      {!isTyping && stars.map((_, i) => (
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

      <div className="relative z-10 w-full max-w-2xl bg-transparent shadow-none rounded-2xl p-6 sm:p-8 border-0">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-2">
          Contact <span className="text-purple-400">Me</span>
        </h2>
        <div className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto max-w-[160px] mb-6" />

        {submitted && (
          <div className="mb-4 p-3 rounded-lg text-green-300 bg-green-900/30 text-center">
            ✅ Message sent successfully!
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <input type="hidden" name="subject" value="New message from portfolio" />
          <input type="hidden" name="from_name" value="Akarsh Portfolio" />
          <input type="hidden" name="replyto" value="email" />
          <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />
          <div>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              className="w-full p-3 rounded-lg bg-transparent text-white placeholder-gray-400 border border-gray-700/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              className="w-full p-3 rounded-lg bg-transparent text-white placeholder-gray-400 border border-gray-700/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              className="w-full p-3 rounded-lg bg-transparent text-white placeholder-gray-400 border border-gray-700/60 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              placeholder="Write your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

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

export default ContactForm;
