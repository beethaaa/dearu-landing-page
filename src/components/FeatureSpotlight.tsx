import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Bluetooth, Lock, Sparkles, Heart } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "CLOSE-RANGE TECHNOLOGY",
    desc: "Uses BLE technology to detect people near you within a 10-meter radius.",
    icon: <Bluetooth size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
    align: "text-right",
    position: "md:-translate-x-12 md:-translate-y-16"
  },
  {
    id: 2,
    title: "NATURAL CONNECTION",
    desc: "Send signals when there's mutual interest. No swiping - just feel and connect sincerely.",
    icon: <Heart size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
    align: "text-left",
    position: "md:translate-x-12 md:-translate-y-16"
  },
  {
    id: 3,
    title: "PRIVACY & SAFETY",
    desc: "Your information is strictly protected. You are fully in control of your connections.",
    icon: <Lock size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
    align: "text-right",
    position: "md:-translate-x-12 md:translate-y-16"
  },
  {
    id: 4,
    title: "FAIRYTALE EXPERIENCE",
    desc: "A magical, romantic interface straight out of a fairytale - where every encounter is a story.",
    icon: <Sparkles size={28} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />,
    align: "text-left",
    position: "md:translate-x-12 md:translate-y-16"
  }
];

const FeatureSpotlight = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const roseScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const roseOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} id="features" className="relative w-full py-40 flex justify-center items-center overflow-hidden">
      
      {/* Center Rose Dome */}
      <motion.div 
        style={{ scale: roseScale, opacity: roseOpacity }}
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex justify-center items-center w-full max-w-[500px] mx-auto group"
      >
        <div className="absolute inset-0 bg-magic-glow rounded-full blur-[150px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"></div>
        <div className="absolute inset-0 bg-soft-pink rounded-full blur-[80px] opacity-20 animate-pulse pointer-events-none"></div>
        
        <img src="/assets/rose_light.webp" alt="Magic Rose" className="w-full h-auto drop-shadow-[0_0_60px_rgba(255,0,127,0.8)] group-hover:drop-shadow-[0_0_100px_rgba(255,0,127,1)] relative z-10 transition-all duration-700 group-hover:scale-105" />
        
        {/* Floating sparkles around rose */}
        <Sparkles className="absolute top-10 left-20 text-magic-glow animate-ping opacity-70 pointer-events-none" size={24} />
        <Sparkles className="absolute bottom-20 right-20 text-soft-pink animate-pulse opacity-80 pointer-events-none" size={32} />
        <Sparkles className="absolute top-1/2 left-10 text-white animate-pulse opacity-60 pointer-events-none" size={16} />
      </motion.div>

      {/* Feature Items */}
      <div className="absolute inset-0 z-20 container mx-auto px-4 pointer-events-none flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[350px] lg:gap-x-[450px] gap-y-32 w-full max-w-7xl">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`flex flex-col group pointer-events-auto ${feature.align === 'text-right' ? 'items-center md:items-end' : 'items-center md:items-start'} ${feature.position} relative overflow-hidden p-8 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 backdrop-blur-xl hover:border-magic-glow/50 hover:bg-white/[0.08] transition-all duration-700 hover:-translate-y-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_60px_rgba(255,0,127,0.3)] cursor-default`}
            >
              {/* Sweeping Light Ray */}
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:left-[200%] transition-all duration-[1.5s] ease-in-out pointer-events-none"></div>

              <div className="mb-6 w-20 h-20 rounded-full flex items-center justify-center bg-[#090014]/60 border border-magic-glow/40 shadow-[0_0_20px_rgba(255,0,127,0.4)] group-hover:shadow-[0_0_40px_rgba(255,0,127,0.8)] group-hover:border-magic-glow transition-all duration-500 group-hover:scale-110 relative z-10">
                <div className="absolute inset-0 bg-magic-glow rounded-full blur-[10px] opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative z-10">{feature.icon}</div>
              </div>
              <h4 className="font-cinzel text-xl md:text-2xl text-white font-bold mb-4 tracking-[0.1em] group-hover:text-pearl-pink transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] relative z-10">
                {feature.title}
              </h4>
              <p className={`text-sm md:text-base text-pearl-pink/80 leading-relaxed font-light max-w-sm ${feature.align === 'text-right' ? 'text-center md:text-right' : 'text-center md:text-left'} group-hover:text-white transition-colors duration-500 relative z-10`}>
                {feature.desc}
              </p>

              {/* Bottom magical underline indicator */}
              <div className={`absolute bottom-0 h-[2px] bg-magic-glow transition-all duration-700 w-0 group-hover:w-full opacity-0 group-hover:opacity-100 shadow-[0_0_15px_rgba(255,0,127,1)] ${feature.align === 'text-right' ? 'right-0' : 'left-0'}`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
