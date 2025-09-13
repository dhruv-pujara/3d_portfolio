// src/components/Contact.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import StarsCanvas from "./canvas/Stars"; // import the stars

//template_btpvm6n
//service_uif529g
//oknuvIdf_6-gO5Ac_

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_uif529g',
      'template_btpvm6n',
      {
        from_name: form.name,
        to_name: 'Dhruv',
        from_email: form.email,
        to_email: 'dhruv.pujara1@ucalgary.ca',
        message: form.message,
      },
      'oknuvIdf_6-gO5Ac_'
    )
    .then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });

      setForm({ name: "", email: "", message: "" });
    }, (error) => {
      setLoading(false);
      console.error(error);
      alert("Ahh, something went wrong. Please try again.");
    }
  )
  };

  return (
    <div className=" w-full min-h-screen">
      {/* stars fill the whole section */}
      <div className="absolute inset-0 -z-10">
        <StarsCanvas />
      </div>

      {/* content on top of stars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start relative z-10">
        {/* LEFT — smaller card */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="contact-card w-full max-w-md justify-self-start order-2 lg:order-1"
        >
          <div className="rounded-3xl p-[1.5px] bg-gradient-to-br from-[#915EFF] via-[#2a2142] to-[#BF61FF] shadow-[0_0_40px_-15px_rgba(145,94,255,0.6)]">
            <div className="rounded-3xl bg-[#131223]/90 ring-1 ring-white/10 shadow-xl px-6 sm:px-7 py-8 sm:py-10 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#915EFF] shadow-[0_0_12px_2px_rgba(145,94,255,0.8)]" />
                <p className={`${styles.sectionSubText} text-zinc-400 m-0`}>
                  GET IN TOUCH
                </p>
              </div>
              <h3 className={`${styles.sectionHeadText} leading-tight mt-1`}>
                Contact.
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
                <label className="flex flex-col">
                  <span className="text-zinc-300 font-semibold mb-2">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="block w-full rounded-xl px-4 py-3.5 bg-[#1a1830] text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#915EFF] transition"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-zinc-300 font-semibold mb-2">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="block w-full rounded-xl px-4 py-3.5 bg-[#1a1830] text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#915EFF] transition"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-zinc-300 font-semibold mb-2">Your Message</span>
                  <textarea
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className="block w-full rounded-xl px-4 py-3.5 bg-[#1a1830] text-zinc-100 placeholder:text-zinc-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-[#915EFF] transition resize-none"
                  />
                </label>

                <div className="pt-1 flex flex-col gap-5">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-[#915EFF] hover:bg-[#7e4ae8] text-white font-semibold shadow-md disabled:opacity-60 transition"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4A4 4 0 008 12H4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send"
                    )}
                  </button>

                  {/* socials */}
                  <div className="flex justify-start gap-5 text-xl text-zinc-400">
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:scale-110 transition"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0A66C2] hover:scale-110 transition"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — EarthCanvas */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="w-full h-[350px] md:h-[500px] lg:h-[600px] order-1 lg:order-2"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
