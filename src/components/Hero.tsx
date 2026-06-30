import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";
import { MagicalChain } from "./MagicalChain";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yFast = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="our-story" ref={ref} className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-visible">
      {/* Background Castle removed to reveal global bgfullheight */}

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.img
          src="/assets/light.webp"
          alt="Lamp"
          className="absolute right-[5%] bottom-[10%] w-32 md:w-56 opacity-90"
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ y: yFast }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-10">
        {/* Radar and Logo Section */}
        <div className="relative mt-10 w-full flex flex-col items-center">
          {/* Title Image & Radar Container */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center pt-24 w-full max-w-[800px]"
          >
            {/* Radar Centered on the Logo's Heart */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none flex items-center justify-center opacity-80 -translate-y-1/2 z-0">
              {/* Dashed Rings */}
              <div className="absolute w-[600px] h-[600px] rounded-full border border-dashed border-soft-pink/20"></div>
              <div className="absolute w-[450px] h-[450px] rounded-full border border-dashed border-soft-pink/30"></div>
              <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-soft-pink/40 shadow-[0_0_30px_rgba(255,0,127,0.1)_inset]"></div>

              {/* Sweeping Radar Scanner + Solid Clock Hand */}
              <motion.div
                className="absolute w-full h-full rounded-full overflow-hidden"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                {/* Conic trail */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(255,0,127,0) 0deg, rgba(255,0,127,0) 180deg, rgba(255,0,127,0.1) 270deg, rgba(255,0,127,0.5) 360deg)",
                  }}
                ></div>
                {/* Ultra Bright Radar Hand */}
                <div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-t from-transparent via-magic-glow to-white shadow-[0_0_20px_rgba(255,0,127,1),0_0_40px_rgba(255,0,127,0.8),0_0_8px_#fff] -translate-x-1/2 origin-bottom rounded-t-full z-10 relative"></div>
              </motion.div>

              {/* Radar Coordinates / Texts (Only 10m left) */}
              <div className="absolute top-[28%] right-[22%] text-soft-pink/90 text-sm font-playfair rotate-12 drop-shadow-[0_0_5px_rgba(255,0,127,0.5)] z-20">
                10m When our hearts
                <br />
                resonate, magic begins.
              </div>

              {/* Floating Music Notes */}
              <motion.div
                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[40%] right-[30%] text-magic-glow text-lg z-20"
              >
                🎵
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-[20%] left-[35%] text-magic-glow text-sm z-20"
              >
                🎶
              </motion.div>
            </div>

            {/* Center glow behind the logo's heart for extra pop */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-48 h-48 bg-magic-glow rounded-full blur-[60px] opacity-40 z-0"></div>

            <img
              src="/assets/title.webp"
              alt="DearU"
              className="w-full max-w-[600px] mx-auto drop-shadow-[0_0_20px_rgba(255,0,127,0.6)] relative z-10"
            />

            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              src="/assets/line.webp" 
              alt="Divider" 
              className="w-[70%] max-w-[400px] mx-auto mt-6 opacity-90 drop-shadow-[0_0_15px_rgba(255,0,127,0.6)] relative z-10" 
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 space-y-8 relative"
        >
          {/* Subtle ambient glow behind text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-magic-glow/10 blur-[100px] pointer-events-none rounded-full"></div>

          {/* Download Button Moved Up with 3D Magical Chains */}
          <div className="mb-16 relative group inline-flex justify-center items-center perspective-[1200px] scale-110 md:scale-125">
            <motion.a 
              href="#" 
              className="relative flex justify-center items-center"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              
              {/* 3D Magical Chains - Highly Optimized (No lag) */}
              <div className="absolute inset-[-40%] pointer-events-none flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Chain 1 Container for Hover Animation */}
                <div className="absolute transition-all duration-700 ease-in group-hover:translate-y-24 group-hover:scale-125 group-hover:opacity-0" style={{ transformStyle: 'preserve-3d' }}>
                  {/* Container for 3D Tilt */}
                  <div style={{ transformStyle: 'preserve-3d', transform: 'rotateX(75deg) rotateY(20deg)' }}>
                    {/* Container for continuous Spin */}
                    <div className="animate-[spin_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                      <MagicalChain radius={140} count={28} color="#ff007f" />
                    </div>
                  </div>
                </div>

                {/* Chain 2 Container for Hover Animation */}
                <div className="absolute transition-all duration-700 ease-in delay-75 group-hover:translate-y-24 group-hover:scale-125 group-hover:opacity-0" style={{ transformStyle: 'preserve-3d' }}>
                  <div style={{ transformStyle: 'preserve-3d', transform: 'rotateX(75deg) rotateY(-20deg)' }}>
                    <div className="animate-[spin_24s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }}>
                      <MagicalChain radius={160} count={32} color="#ff88cc" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Button Image */}
              <div style={{ transform: 'translateZ(1px)' }}>
                <img 
                  src="/assets/DownloadButton.png" 
                  alt="Download App Now" 
                  className="h-28 md:h-40 w-auto object-contain opacity-75 brightness-75 scale-95 drop-shadow-[0_0_15px_rgba(255,0,127,0.5)] group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-110 group-hover:drop-shadow-[0_0_60px_rgba(255,0,127,1)] transition-all duration-700 ease-out pointer-events-auto" 
                />
              </div>
            </motion.a>
          </div>

          <h3 className="text-3xl md:text-5xl lg:text-6xl font-cinzel font-bold italic text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#ff88cc] to-[#ff007f] drop-shadow-[0_0_25px_rgba(255,0,127,0.9)] max-w-5xl mx-auto leading-relaxed relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-magic-glow animate-pulse hidden md:block drop-shadow-[0_0_10px_rgba(255,0,127,0.8)]" />
            Connect hearts, touch real-life magic.
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-magic-glow animate-pulse hidden md:block drop-shadow-[0_0_10px_rgba(255,0,127,0.8)]" />
          </h3>
          
          <p className="mt-8 text-lg md:text-2xl text-pearl-pink/90 max-w-2xl mx-auto leading-loose tracking-wide font-inter font-light relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            DearU is a social & dating app that helps you find special connections
            beyond the screen - right in the real world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
