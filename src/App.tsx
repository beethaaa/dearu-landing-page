import { ReactLenis } from "lenis/react";
import CustomCursor from "./components/CustomCursor.tsx";
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import FeatureSpotlight from "./components/FeatureSpotlight.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import CommentSection from "./components/CommentSection.tsx";
import Footer from "./components/Footer.tsx";
import FloatingButterflies from "./components/FloatingButterflies.tsx";

function App() {
  return (
    <ReactLenis root>
      <div className="relative min-h-screen bg-deep-night text-pearl-pink overflow-hidden selection:bg-magic-glow selection:text-white">
        <CustomCursor />
        <FloatingButterflies />
        {/* New Full Height Background with Parallax effect */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <img
            src="/assets/background.webp"
            alt="Background"
            className="w-full h-full object-cover object-top opacity-60 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-deep-night/50 to-deep-night"></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          <FeatureSpotlight />
          <HowItWorks />
          <CommentSection />
          <Footer />
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;
