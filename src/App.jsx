import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#0B0A16] text-white">
        {/* Hero */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* About & Experience with gradient background */}
        <div
          className="
            relative z-0
            bg-gradient-to-b
            from-[#0B0A16]          /* deep black */
            via-[#141229]/80       /* indigo tint */
            via-40%
            to-[#1A0F2C]           /* muted violet undertone */
          "
        >
          {/* optional nebula glows */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/3 h-[24rem] w-[24rem] rounded-full bg-fuchsia-600/10 blur-[180px]" />
            <div className="absolute bottom-1/4 right-1/4 h-[20rem] w-[20rem] rounded-full bg-indigo-500/10 blur-[160px]" />
          </div>

          <About />
          <Experience />

          {/* Fade into black for Contact */}
          <div
            className="
              absolute bottom-0 left-0 right-0 h-40
              bg-gradient-to-b from-transparent to-[#0B0A16]
              pointer-events-none
            "
          />
        </div>

        {/* Contact (already black background, fade blends into this) */}
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
