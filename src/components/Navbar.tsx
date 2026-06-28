import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#our-story' },
    { name: 'The Magic', href: '#the-magic' },
    { name: 'Send A Whistle', href: '#send-a-whistle' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled 
          ? 'bg-gradient-to-r from-[#090014]/95 via-[#240036]/90 to-[#090014]/95 backdrop-blur-3xl py-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)]' 
          : 'bg-gradient-to-b from-deep-night/90 to-transparent py-8'
      }`}
    >
      {/* Main Container */}
      <div className="w-full flex items-center justify-center relative z-10 h-[70px]">
        
        {/* Massive Detached Logo */}
        <a href="#" className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 z-[60] group flex items-center">
          <img 
            src="/assets/title.webp" 
            alt="DearU" 
            className={`w-auto object-contain transition-all duration-700 origin-left drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] relative z-10 ${scrolled ? 'h-20 md:h-28' : 'h-28 md:h-40'}`}
          />
        </a>

        {/* Center Links */}
        <div className="hidden md:flex relative group/nav cursor-pointer items-center justify-center">
          {/* Animated Magic Border Glow behind the box */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-magic-glow/30 to-transparent opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 blur-md pointer-events-none"></div>

          {/* Dynamic Box */}
          <div className="flex items-center space-x-20 px-16 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl shadow-[0_0_30px_rgba(255,0,127,0.05)] group-hover/nav:border-magic-glow/50 group-hover/nav:bg-white/10 transition-all duration-500 relative z-10">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl md:text-2xl font-cinzel font-bold text-pearl-pink/90 hover:text-white relative transition-all duration-500 hover:scale-110 z-20 group/item flex flex-col items-center"
              >
                {/* Rose Scent Wave (Sóng hương hoa hồng) */}
                <div className="absolute -inset-x-8 -inset-y-6 overflow-hidden pointer-events-none opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  {/* Trail 1 */}
                  <motion.div 
                    className="absolute top-1/2 w-[80%] h-[8px] bg-gradient-to-r from-transparent via-soft-pink/30 to-transparent blur-[4px] rounded-full"
                    animate={{ 
                      left: ["-100%", "150%"],
                      y: [0, -10, 8, -6, 0]
                    }}
                    transition={{ 
                      left: { duration: 2, repeat: Infinity, ease: "linear" },
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                  {/* Trail 2 */}
                  <motion.div 
                    className="absolute top-1/2 w-full h-[4px] bg-gradient-to-r from-transparent via-pearl-pink/40 to-transparent blur-[2px] rounded-full"
                    animate={{ 
                      left: ["-100%", "150%"],
                      y: [0, 8, -10, 6, 0]
                    }}
                    transition={{ 
                      left: { duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.2 },
                      y: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
                    }}
                  />
                </div>

                {/* Fairy Dust Rain that falls down from the element */}
                <div className="absolute top-full left-[-20%] w-[140%] h-[120px] pointer-events-none opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  {/* 1. Circle Dot */}
                  <motion.div className="absolute top-0 left-[10%] w-[3px] h-[3px] bg-[#ff007f] rounded-full shadow-[0_0_8px_#ff007f]" animate={{ y: [0, 80], x: [0, 15, -10], opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.1 }} />
                  
                  {/* 2. Diamond */}
                  <motion.div className="absolute top-0 left-[25%] w-[4px] h-[4px] bg-[#00ffff] rotate-45 shadow-[0_0_10px_#00ffff]" animate={{ y: [0, 100], x: [0, -20, 10], rotate: [45, 135, 225], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.3 }} />
                  
                  {/* 3. Tiny Heart */}
                  <motion.div className="absolute top-0 left-[40%] text-[#ff88cc] drop-shadow-[0_0_8px_#ff88cc]" animate={{ y: [0, 90], x: [0, 10, -20], rotate: [-10, 10, -10], opacity: [0, 1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.8 }}>
                    <Heart size={10} fill="currentColor" />
                  </motion.div>

                  {/* 4. Star */}
                  <motion.div className="absolute top-0 left-[55%] text-[#ffd700] drop-shadow-[0_0_10px_#ffd700]" animate={{ y: [0, 110], x: [0, -15, 15], rotate: [0, 180, 360], opacity: [0, 1, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear", delay: 0.2 }}>
                    <Star size={12} fill="currentColor" />
                  </motion.div>

                  {/* 5. Glowing Dash */}
                  <motion.div className="absolute top-0 left-[70%] w-[6px] h-[1.5px] bg-[#ffffff] rounded-full shadow-[0_0_8px_#fff]" animate={{ y: [0, 75], x: [0, 20, -5], rotate: [-20, 20, -20], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.5 }} />

                  {/* 6. Sparkle */}
                  <motion.div className="absolute top-0 left-[85%] text-[#9933ff] drop-shadow-[0_0_12px_#9933ff]" animate={{ y: [0, 95], x: [0, -10, 10], rotate: [0, 90, 180], opacity: [0, 1, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay: 0.6 }}>
                    <Sparkles size={14} />
                  </motion.div>

                  {/* 7. Moon */}
                  <motion.div className="absolute top-0 left-[5%] text-[#00ffff] drop-shadow-[0_0_10px_#00ffff]" animate={{ y: [0, 85], x: [0, 15, 0], rotate: [-20, 0, -20], opacity: [0, 1, 0] }} transition={{ duration: 2.1, repeat: Infinity, ease: "linear", delay: 0.4 }}>
                    <Moon size={10} fill="currentColor" />
                  </motion.div>

                  {/* 8. Extra Diamond */}
                  <motion.div className="absolute top-0 left-[90%] w-[3px] h-[3px] bg-[#ff007f] rotate-45 shadow-[0_0_10px_#ff007f]" animate={{ y: [0, 105], x: [0, -25, 5], rotate: [45, -45, 45], opacity: [0, 1, 0] }} transition={{ duration: 2.6, repeat: Infinity, ease: "linear", delay: 0.9 }} />

                  {/* 9. Extra Heart */}
                  <motion.div className="absolute top-0 left-[30%] text-[#ff3333] drop-shadow-[0_0_10px_#ff3333]" animate={{ y: [0, 80], x: [0, -15, -30], rotate: [10, -10, 10], opacity: [0, 1, 0] }} transition={{ duration: 1.9, repeat: Infinity, ease: "linear", delay: 0.1 }}>
                    <Heart size={8} fill="currentColor" />
                  </motion.div>

                  {/* 10. Circle Dot */}
                  <motion.div className="absolute top-0 left-[80%] w-[5px] h-[5px] bg-[#ffd700] rounded-full shadow-[0_0_15px_#ffd700]" animate={{ y: [0, 120], x: [0, 5, -20], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.7 }} />
                  
                  {/* 11. Sparkle */}
                  <motion.div className="absolute top-0 left-[15%] text-[#ffffff] drop-shadow-[0_0_10px_#fff]" animate={{ y: [0, 95], x: [0, 25, -15], rotate: [0, 180, 0], opacity: [0, 1, 0] }} transition={{ duration: 2.3, repeat: Infinity, ease: "linear", delay: 0.3 }}>
                    <Sparkles size={12} />
                  </motion.div>
                </div>
                
                <span className="group-hover/item:drop-shadow-[0_0_15px_rgba(255,0,127,1)] tracking-wide group-hover/item:text-white">{item.name}</span>
                
                {/* Magical bottom line */}
                <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-magic-glow to-transparent transition-all duration-300 group-hover/item:w-[130%] group-hover/item:left-[-15%] shadow-[0_0_10px_rgba(255,0,127,1)] opacity-0 group-hover/item:opacity-100"></span>
              </a>
            ))}
          </div>

          {/* Center Leaves - ALWAYS VISIBLE */}
          <div className="transition-opacity duration-500 opacity-100 pointer-events-none">
            <img 
              src="/assets/leaf.webp" 
              alt="leaf" 
              className="absolute -left-12 top-1/2 -translate-y-1/2 w-32 h-auto z-20 opacity-80 rotate-[20deg] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/nav:-translate-x-12 group-hover/nav:-translate-y-6 group-hover/nav:-rotate-12 group-hover/nav:drop-shadow-[0_0_20px_rgba(255,0,127,0.8)] group-hover/nav:opacity-40"
            />
            <img 
              src="/assets/leaf.webp" 
              alt="leaf" 
              className="absolute -right-12 top-1/2 -translate-y-1/2 w-32 h-auto z-20 opacity-80 -scale-x-100 -rotate-[20deg] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover/nav:translate-x-12 group-hover/nav:-translate-y-6 group-hover/nav:rotate-12 group-hover/nav:drop-shadow-[0_0_20px_rgba(255,0,127,0.8)] group-hover/nav:opacity-40"
            />
          </div>
        </div>

        {/* CTA Download Button */}
        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 mt-2 md:mt-4 z-20 group/btn cursor-pointer">
          <a href="#" className="relative z-10 group/btn inline-flex justify-center items-center hover:scale-105 transition-transform duration-500">
            <img 
              src="/assets/DownloadButton.png" 
              alt="Download" 
              className={`relative z-10 w-auto object-contain drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] group-hover/btn:drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] transition-all duration-500 ${scrolled ? 'h-24 md:h-32' : 'h-32 md:h-44'}`} 
            />
          </a>
          
          {/* Button Leaves - ALWAYS VISIBLE */}
          <div className="transition-opacity duration-500 opacity-100 pointer-events-none">
            <img 
              src="/assets/leaf.webp" 
              alt="leaf" 
              className={`absolute -left-8 md:-left-14 top-1/2 -translate-y-1/2 z-20 opacity-90 rotate-[20deg] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] group-hover/btn:-translate-x-8 group-hover/btn:-translate-y-4 group-hover/btn:-rotate-[10deg] group-hover/btn:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover/btn:opacity-20 ${scrolled ? 'w-20 md:w-28' : 'w-28 md:w-40'}`}
            />
            <img 
              src="/assets/leaf.webp" 
              alt="leaf" 
              className={`absolute -right-8 md:-right-14 top-1/2 -translate-y-1/2 z-20 opacity-90 -scale-x-100 -rotate-[20deg] pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] drop-shadow-[0_0_5px_rgba(0,0,0,0.8)] group-hover/btn:translate-x-8 group-hover/btn:-translate-y-4 group-hover/btn:rotate-[10deg] group-hover/btn:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover/btn:opacity-20 ${scrolled ? 'w-20 md:w-28' : 'w-28 md:w-40'}`}
            />
          </div>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
