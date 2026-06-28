import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "1. ACTIVATE DEARU",
    desc: "Open the app and turn on close-range connection.",
    img: "/assets/sync.webp",
  },
  {
    id: 2,
    title: "2. DISCOVER & CONNECT",
    desc: "DearU will detect people who are currently near you.",
    img: "/assets/heart.webp",
  },
  {
    id: 3,
    title: "3. SIGNAL & INTERACT",
    desc: "Send a whistle of interest & start chatting when the magic resonates.",
    img: "/assets/letter_open.webp",
  }
];

const HowItWorks = () => {
  return (
    <section id="the-magic" className="relative w-full py-32 container mx-auto px-6 overflow-hidden">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-32 text-center relative z-20">
        <div className="absolute inset-0 bg-magic-glow/10 blur-[100px] w-full h-full rounded-full pointer-events-none"></div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 md:gap-8 relative"
        >
          <img src="/assets/line.webp" alt="line" className="w-20 md:w-40 opacity-80 rotate-180 drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]" />
          <h3 className="font-cinzel text-3xl md:text-5xl text-white font-bold tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
            THE MAGIC
          </h3>
          <img src="/assets/line.webp" alt="line" className="w-20 md:w-40 opacity-80 drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]" />
        </motion.div>
      </div>

      {/* Steps */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8 relative z-10 w-full max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div 
            key={step.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="flex flex-col items-center text-center w-full max-w-[320px] group cursor-default"
          >
            {/* Magical Portal */}
            <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center mb-10 group-hover:-translate-y-4 transition-all duration-700">
               {/* Core Inner Glow */}
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,127,0.15),_transparent_60%)] rounded-full group-hover:bg-[radial-gradient(ellipse_at_center,_rgba(255,0,127,0.4),_transparent_60%)] transition-colors duration-700"></div>
               
               {/* Rotating Runes/Rings */}
               <div className="absolute inset-2 rounded-full border-[2px] border-dashed border-magic-glow/30 animate-[spin_20s_linear_infinite] group-hover:border-magic-glow/80 transition-colors duration-700 shadow-[0_0_15px_rgba(255,0,127,0.2)]"></div>
               <div className="absolute inset-6 rounded-full border border-soft-pink/20 animate-[spin_15s_linear_infinite_reverse] group-hover:border-soft-pink/60 transition-colors duration-700"></div>
               
               {/* Floating Image inside Portal */}
               <motion.img 
                 animate={{ y: [-5, 5, -5] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                 src={step.img} 
                 alt={step.title} 
                 className="relative z-10 w-28 md:w-36 object-contain drop-shadow-[0_0_20px_rgba(255,0,127,0.6)] group-hover:drop-shadow-[0_0_40px_rgba(255,0,127,1)] group-hover:scale-110 transition-all duration-500" 
               />
               
               {/* Base glowing shadow */}
               <div className="absolute -bottom-10 w-3/4 h-4 bg-magic-glow blur-[10px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 rounded-full"></div>
            </div>
            
            <h4 className="font-cinzel text-xl md:text-2xl text-white mb-4 font-bold tracking-widest group-hover:text-pearl-pink transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
              {step.title}
            </h4>
            <p className="text-base text-pearl-pink/70 leading-relaxed font-light px-4 group-hover:text-white transition-colors duration-500">
              {step.desc}
            </p>

            {/* Connecting Magical Energy Line for Desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-[112px] md:top-[128px] -right-4 w-12 lg:-right-8 lg:w-20 text-magic-glow z-0">
                 <div className="w-full h-[2px] bg-gradient-to-r from-magic-glow/20 via-magic-glow to-magic-glow/20 shadow-[0_0_10px_rgba(255,0,127,0.5)] opacity-50 group-hover:opacity-100 transition-opacity duration-500 relative">
                   <div className="absolute top-0 left-0 h-full w-1/3 bg-white blur-[2px] animate-[translateX_2s_linear_infinite]"></div>
                 </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
    </section>
  );
};

export default HowItWorks;
