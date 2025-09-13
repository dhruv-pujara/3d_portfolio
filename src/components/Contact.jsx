import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Dhruv Pujara",
          to_email: "dhruv.pujara1@ucalgary.ca",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      alert("Thank you! I’ll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full py-12 sm:py-20">
      {/* Decorative background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 -left-10 h-56 w-56 rounded-full bg-[#915EFF] opacity-20 blur-3xl" />
        <div className="absolute -bottom-8 -right-10 h-64 w-64 rounded-full bg-[#BF61FF] opacity-20 blur-3xl" />
      </div>

      <motion.div
        variants={slideIn("left", "tween", 0.15, 0.9)}
        className="contact-card w-full max-w-2xl md:max-w-3xl mx-auto"
      >
        {/* Gradient border wrapper */}
        <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-[#915EFF] via-[#2a2142] to-[#BF61FF] shadow-[0_0_40px_-15px_rgba(145,94,255,0.6)]">
          {/* Inner panel */}
          <div className="rounded-3xl bg-[#131223]/90 ring-1 ring-white/10 shadow-xl px-6 sm:px-10 py-10 sm:py-12 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
            {/* Header */}
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#915EFF] shadow-[0_0_12px_2px_rgba(145,94,255,0.8)]" />
              <p className={`${styles.sectionSubText} text-zinc-400 m-0`}>
                GET IN TOUCH
              </p>
            </div>
            <h3 className={`${styles.sectionHeadText} leading-tight mt-2`}>
              Contact.
            </h3>

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-10 md:mt-12 space-y-7"
            >
              {/* 2-col on md+ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="flex flex-col">
                  <span className="text-zinc-300 font-semibold mb-2">
                    Your Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="block w-full rounded-xl px-5 py-4 bg-[#1a1830] text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#915EFF] transition"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-zinc-300 font-semibold mb-2">
                    Your Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="block w-full rounded-xl px-5 py-4 bg-[#1a1830] text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#915EFF] transition"
                  />
                </label>
              </div>

              <label className="flex flex-col">
                <span className="text-zinc-300 font-semibold mb-2">
                  Your Message
                </span>
                <textarea
                  rows={8}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="block w-full rounded-xl px-5 py-4 bg-[#1a1830] text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#915EFF] transition resize-none"
                />
              </label>

              {/* Actions */}
              <div className="pt-2 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-xl px-7 py-3 bg-[#915EFF] hover:bg-[#7e4ae8] text-white font-semibold shadow-md disabled:opacity-60 transition"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send"
                    )}
                  </button>

                  <span className="text-xs text-zinc-500">
                    I usually reply within a day.
                  </span>
                </div>

                {/* Socials */}
                <div className="flex justify-center md:justify-start gap-6 text-2xl text-zinc-400">
                  <a
                    href="https://github.com/dhruv-pujara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:scale-110 transition"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dhruv-pujara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#0A66C2] hover:scale-110 transition"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
