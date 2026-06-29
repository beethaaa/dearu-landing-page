import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Bluetooth, Lock, Sparkles, Heart } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "CLOSE-RANGE TECHNOLOGY",
    desc: "Uses BLE technology to detect people near you within a 10-meter radius.",
    icon: <Bluetooth size={36} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />,
    align: "text-right",
    position: "md:-translate-x-12 md:-translate-y-20",
    num: "01",
    beamAngle: -155
  },
  {
    id: 2,
    title: "NATURAL CONNECTION",
    desc: "Send whispers when there's mutual interest. No swiping - just feel and connect sincerely.",
    icon: <Heart size={36} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />,
    align: "text-left",
    position: "md:translate-x-12 md:-translate-y-20",
    num: "02",
    beamAngle: -25
  },
  {
    id: 3,
    title: "PRIVACY & SAFETY",
    desc: "Your information is strictly protected. You are fully in control of your connections.",
    icon: <Lock size={36} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />,
    align: "text-right",
    position: "md:-translate-x-12 md:translate-y-20",
    num: "03",
    beamAngle: 155
  },
  {
    id: 4,
    title: "FAIRYTALE EXPERIENCE",
    desc: "A magical, romantic interface straight out of a fairytale - where every encounter is a story.",
    icon: <Sparkles size={36} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />,
    align: "text-left",
    position: "md:translate-x-12 md:translate-y-20",
    num: "04",
    beamAngle: 25
  }
];

const Beam = ({ angle }: { angle: number }) => (
  <div 
    className="absolute top-1/2 left-1/2 w-[25vw] lg:w-[35vw] h-[3px] bg-gradient-to-r from-magic-glow via-soft-pink/40 to-transparent origin-left opacity-60 blur-[1px] z-0 hidden md:block rounded-full shadow-[0_0_20px_#ff007f]"
    style={{ transform: `rotate(${angle}deg)` }}
  >
    {/* Traveling Energy Pulse */}
    <motion.div 
      className="absolute top-0 left-0 w-1/4 h-full bg-white shadow-[0_0_25px_#fff] rounded-full"
      animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
    />
  </div>
);

const FeatureSpotlight = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const roseScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const roseOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="features" className="relative w-full py-40 flex justify-center items-center overflow-hidden min-h-[120vh]">
      
      {/* Background Energy Beams connecting center to features */}
      {features.map((f) => (
        <Beam key={`beam-${f.id}`} angle={f.beamAngle} />
      ))}

      {/* Center Rose Dome */}
      <motion.div 
        style={{ scale: roseScale, opacity: roseOpacity }}
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex justify-center items-center w-full max-w-[500px] mx-auto group"
      >
        <div className="absolute inset-0 bg-magic-glow rounded-full blur-[150px] opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>
        <div className="absolute inset-0 bg-soft-pink rounded-full blur-[80px] opacity-30 animate-[pulse_4s_ease-in-out_infinite] pointer-events-none"></div>
        
        <img src="/assets/rose_light.webp" alt="Magic Rose" className="w-full h-auto drop-shadow-[0_0_80px_rgba(255,0,127,0.8)] group-hover:drop-shadow-[0_0_120px_rgba(255,0,127,1)] relative z-10 transition-all duration-700 group-hover:scale-105" />
        
        {/* Floating sparkles around rose */}
        <Sparkles className="absolute top-5 left-16 text-magic-glow animate-ping opacity-80 pointer-events-none drop-shadow-[0_0_10px_#ff007f]" size={28} />
        <Sparkles className="absolute bottom-16 right-16 text-soft-pink animate-pulse opacity-90 pointer-events-none drop-shadow-[0_0_10px_#ff88cc]" size={36} />
        <Sparkles className="absolute top-1/2 left-5 text-white animate-pulse opacity-70 pointer-events-none drop-shadow-[0_0_10px_#fff]" size={20} />
      </motion.div>

      {/* Feature Items */}
      <div className="absolute inset-0 z-20 container mx-auto px-6 pointer-events-none flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[350px] lg:gap-x-[450px] gap-y-32 w-full max-w-7xl">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{ y: [0, -15, 0] }} // Floating animation
              transition={{ 
                duration: 1, 
                delay: index * 0.2,
                y: { duration: 4 + index, repeat: Infinity, ease: "easeInOut", delay: 1 } // float independently after entrance
              }}
              className={`flex flex-col group pointer-events-auto ${feature.align === 'text-right' ? 'items-center md:items-end' : 'items-center md:items-start'} ${feature.position} relative overflow-hidden p-8 md:p-12 rounded-[40px] bg-gradient-to-br from-white/[0.08] to-transparent border border-white/20 backdrop-blur-2xl hover:border-magic-glow hover:bg-white/[0.12] transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.6)] hover:shadow-[0_0_80px_rgba(255,0,127,0.4)] cursor-default w-full md:w-[480px] z-20`}
            >
              {/* Giant Background Number */}
              <div className={`absolute ${feature.align === 'text-right' ? '-left-8' : '-right-8'} -top-12 text-[200px] leading-none font-cinzel font-bold text-white/[0.03] group-hover:text-magic-glow/[0.08] transition-colors duration-700 pointer-events-none select-none z-0 drop-shadow-[0_0_20px_rgba(255,0,127,0)] group-hover:drop-shadow-[0_0_40px_rgba(255,0,127,0.5)]`}>
                {feature.num}
              </div>

              {/* Internal Glow on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-magic-glow)_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl pointer-events-none"></div>

              {/* Sweeping Light Ray */}
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:left-[200%] transition-all duration-[1.5s] ease-in-out pointer-events-none z-0"></div>

              <div className="mb-8 w-24 h-24 rounded-full flex items-center justify-center bg-[#090014]/80 border border-magic-glow/50 shadow-[0_0_30px_rgba(255,0,127,0.5)] group-hover:shadow-[0_0_50px_rgba(255,0,127,1)] group-hover:border-white transition-all duration-500 group-hover:scale-110 relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-magic-glow rounded-full blur-[15px] opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                <div className="relative z-10 group-hover:animate-bounce">{feature.icon}</div>
              </div>
              
              <h4 className="font-cinzel text-2xl md:text-3xl text-white font-bold mb-4 tracking-[0.15em] group-hover:text-pearl-pink transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] relative z-10 text-center md:text-left">
                {feature.title}
              </h4>
              
              <p className={`text-base md:text-lg text-pearl-pink/90 leading-relaxed font-light ${feature.align === 'text-right' ? 'text-center md:text-right' : 'text-center md:text-left'} group-hover:text-white transition-colors duration-500 relative z-10`}>
                {feature.desc}
              </p>

              {/* Top Sparkle Decor */}
              <Sparkles className={`absolute top-10 ${feature.align === 'text-right' ? 'right-10' : 'left-10'} text-magic-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[pulse_2s_ease-in-out_infinite] pointer-events-none drop-shadow-[0_0_8px_#ff007f]`} size={24} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
