import { motion } from "framer-motion";
import { useRef } from "react";
import { MagicalChain } from "./MagicalChain";

const Hero = () => {
  const ref = useRef(null);

  return (
    <section
      id="our-story"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-32 overflow-visible"
    >
      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-10">
        {/* Radar and Logo Section */}
        <div className="relative my-16 w-full flex flex-col items-center min-h-screen justify-center">
          {/* Title Image & Radar Container */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 flex flex-col items-center pt-24 w-full max-w-[800px]"
          >
            {/* Radar Centered on the Logo's Heart */}
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] pointer-events-none flex items-center justify-center opacity-80 -translate-y-1/2 z-0">
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
                <div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-linear-to-t from-transparent via-magic-glow to-white shadow-[0_0_20px_rgba(255,0,127,1),0_0_40px_rgba(255,0,127,0.8),0_0_8px_#fff] -translate-x-1/2 origin-bottom rounded-t-full z-10"></div>
              </motion.div>
            </div>

            {/* Center glow behind the logo's heart for extra pop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-48 h-48 bg-magic-glow rounded-full blur-[60px] opacity-40 z-0"></div>

            <img
              src="/assets/title.webp"
              alt="DearU"
              className="w-full max-w-[600px] mx-auto drop-shadow-[0_0_20px_rgba(255,0,127,0.6)] relative z-10 top-2"
            />
          </motion.div>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          src="/assets/line.webp"
          alt="Divider"
          className="w-[70%] max-w-[400px] mx-auto mt-60 opacity-90 drop-shadow-[0_0_15px_rgba(255,0,127,0.6)] relative z-10"
        />

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 space-y-8 relative"
        >
          {/* Subtle ambient glow behind text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-magic-glow/10 blur-[100px] pointer-events-none rounded-full"></div>

          <h3 className="mt-10 text-3xl md:text-5xl lg:text-6xl font-cinzel font-bold text-transparent bg-clip-text bg-linear-to-b from-[#ffffff] via-soft-pink to-magic-glow drop-shadow-[0_0_25px_rgba(255,0,127,0.9)] max-w-5xl mx-auto leading-relaxed relative z-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            Connect hearts, touch real-life magic.
          </h3>

          {/* Download Button Moved Up with 3D Magical Chains */}
          <div className="mt-10 mb-16 relative group inline-flex justify-center items-center perspective-distant scale-110 md:scale-125">
            <motion.a
              href="https://github.com/beethaaa/lovealarm-fe/releases/download/latest-android/dearu-android-latest.apk"
              className="relative flex justify-center items-center"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* 3D Magical Chains - Highly Optimized (No lag) */}
              <div
                className="absolute inset-[-40%] pointer-events-none flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Chain 1 Container for Hover Animation */}
                <div
                  className="absolute transition-all duration-700 ease-in group-hover:translate-y-24 group-hover:scale-125 group-hover:opacity-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Container for 3D Tilt */}
                  <div
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateX(75deg) rotateY(20deg)",
                    }}
                  >
                    {/* Container for continuous Spin */}
                    <div
                      className="animate-[spin_30s_linear_infinite]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <MagicalChain radius={140} count={28} color="#e49db4" />
                    </div>
                  </div>
                </div>

                {/* Chain 2 Container for Hover Animation */}
                <div
                  className="absolute transition-all duration-700 ease-in delay-75 group-hover:translate-y-24 group-hover:scale-125 group-hover:opacity-0"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div
                    style={{
                      transformStyle: "preserve-3d",
                      transform: "rotateX(75deg) rotateY(-20deg)",
                    }}
                  >
                    <div
                      className="animate-[spin_24s_linear_infinite_reverse]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <MagicalChain radius={160} count={32} color="#bb4c80" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Button Image */}
              <a
                href="https://github.com/beethaaa/lovealarm-fe/releases/download/latest-android/dearu-android-latest.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="translate-y-4"
                style={{ transform: "translateZ(1px)" }}
              >
                <img
                  src="/assets/DownloadButton.png"
                  alt="Download App Now"
                  className="h-28 md:h-44 w-auto object-contain opacity-75 brightness-75 scale-105 drop-shadow-[0_0_15px_rgba(255,0,127,0.5)] group-hover:opacity-100 group-hover:brightness-125 group-hover:scale-125 group-hover:drop-shadow-[0_0_60px_rgba(255,0,127,1)] transition-all duration-700 ease-out pointer-events-auto"
                />
              </a>
            </motion.a>
          </div>

          <p className="font-serif mt-8 text-lg md:text-2xl text-pearl-pink/90 max-w-2xl mx-auto leading-loose tracking-wide font-inter font-light relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            DearU is a social and dating app that helps you find special
            connections beyond the screen - right in the real world.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          src="/assets/line.webp"
          alt="Divider"
          className="w-[70%] max-w-[400px] mx-auto mt-16 opacity-90 drop-shadow-[0_0_15px_rgba(255,0,127,0.6)] relative z-10 scale-y-100"
        />
      </div>
    </section>
  );
};

export default Hero;
