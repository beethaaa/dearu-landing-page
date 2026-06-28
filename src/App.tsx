import { ReactLenis } from "lenis/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSpotlight from "./components/FeatureSpotlight";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen bg-deep-night text-pearl-pink overflow-hidden selection:bg-magic-glow selection:text-white">
        {/* New Full Height Background with Parallax effect */}
        <div className="absolute top-0 left-0 w-full h-[120%] z-0 pointer-events-none">
          <img
            src="/assets/bgfullheight.png"
            alt="Background"
            className="w-full h-full object-cover object-top opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-night/50 to-deep-night"></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <FeatureSpotlight />
          <HowItWorks />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
