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
      <div className="relative z-0 bg-gradient-to-b from-[#0F0E17] via-[#12101C] to-[#0F0E17]">
        {/* Hero */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        {/* About & Experience */}
        <About />
        <Experience />

        {/* Contact (stars are scoped inside it now) */}
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
