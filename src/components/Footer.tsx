import { motion } from 'framer-motion';
import { Mail, Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="send-a-whistle" className="relative w-full pt-32 pb-10 overflow-hidden">
      
      {/* Background magical elements */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#090014] via-[#240036]/50 to-transparent pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[400px] bg-magic-shadow rounded-full blur-[150px] opacity-30 pointer-events-none z-0"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[300px] bg-magic-glow rounded-full blur-[120px] opacity-20 pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Title / Logo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6 relative"
        >
          <div className="absolute inset-0 bg-magic-glow blur-[50px] opacity-20 rounded-full scale-150"></div>
          <img src="/assets/title.webp" alt="DearU" className="w-auto h-28 md:h-40 object-contain drop-shadow-[0_0_20px_rgba(255,0,127,0.6)] hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-700 hover:scale-105 relative z-10" />
        </motion.div>

        {/* Romantic Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative mb-20"
        >
          <p className="font-fairytale text-5xl md:text-7xl text-pearl-pink drop-shadow-[0_0_20px_rgba(255,136,204,0.8)]">
            Let the magic find you...
          </p>
          <Sparkles className="absolute -top-6 -right-12 text-magic-glow animate-pulse w-8 h-8" />
          <Sparkles className="absolute -bottom-4 -left-8 text-white animate-pulse delay-300 w-6 h-6" />
        </motion.div>

        {/* Flying Fairy Buttons (App Store & Google Play) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 md:gap-32 mb-32 mt-10">
          
          {/* Apple Fairy */}
          <motion.a 
            href="#" 
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative group flex flex-col items-center"
          >
            {/* The Orb (Fairy Body) */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-[#ff007f]/20 to-white/5 border border-[#ff007f]/50 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(255,0,127,0.4)] group-hover:shadow-[0_0_80px_rgba(255,0,127,0.9)] group-hover:border-[#ff007f] transition-all duration-700 z-20">
              <div className="absolute inset-0 rounded-full bg-magic-glow/30 blur-[20px] group-hover:bg-magic-glow/60 transition-colors duration-700"></div>
              {/* Apple Icon */}
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] relative z-10 group-hover:scale-110 transition-transform duration-500"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            </div>

            {/* Label */}
            <div className="mt-8 relative z-20">
              <div className="text-[11px] text-pearl-pink/70 uppercase tracking-[0.3em] mb-2 group-hover:text-magic-glow transition-colors">Download</div>
              <div className="text-xl md:text-2xl font-cinzel font-bold text-white group-hover:text-pearl-pink transition-colors tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">APP STORE</div>
            </div>
            
            {/* Trail */}
            <div className="absolute top-full w-2 h-32 bg-gradient-to-b from-magic-glow/60 to-transparent blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.a>

          {/* Android Fairy */}
          <motion.a 
            href="#" 
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="relative group flex flex-col items-center mt-12 md:mt-0"
          >
            {/* The Orb (Fairy Body) */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-[#ff88cc]/20 to-white/5 border border-[#ff88cc]/50 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(255,136,204,0.4)] group-hover:shadow-[0_0_80px_rgba(255,136,204,0.9)] group-hover:border-[#ff88cc] transition-all duration-700 z-20">
              <div className="absolute inset-0 rounded-full bg-soft-pink/30 blur-[20px] group-hover:bg-soft-pink/60 transition-colors duration-700"></div>
              {/* Android Icon */}
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-12 h-12 md:w-16 md:h-16 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] relative z-10 group-hover:scale-110 transition-transform duration-500"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            </div>

            {/* Label */}
            <div className="mt-8 relative z-20">
              <div className="text-[11px] text-pearl-pink/70 uppercase tracking-[0.3em] mb-2 group-hover:text-soft-pink transition-colors">Get it on</div>
              <div className="text-xl md:text-2xl font-cinzel font-bold text-white group-hover:text-pearl-pink transition-colors tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">GOOGLE PLAY</div>
            </div>

            {/* Trail */}
            <div className="absolute top-full w-2 h-32 bg-gradient-to-b from-soft-pink/60 to-transparent blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </motion.a>

        </div>

        {/* Ethereal Contact Seal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-3xl mb-16 flex justify-center"
        >
          <div className="relative group flex flex-col items-center px-12 md:px-24 py-16 rounded-[100px] border border-white/5 bg-white/[0.02] backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] hover:border-magic-glow/40 transition-all duration-1000 overflow-hidden cursor-pointer">
            
            {/* Sweeping Light Ray */}
            <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 group-hover:left-[200%] transition-all duration-[1.5s] ease-in-out pointer-events-none"></div>
            
            {/* Core Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,127,0.1),_transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full border border-magic-glow/30 bg-magic-glow/10 flex items-center justify-center group-hover:bg-magic-glow/30 transition-colors duration-500 shadow-[0_0_15px_rgba(255,0,127,0.4)]">
                <Mail size={20} className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,1)]" />
              </div>
              <span className="font-cinzel tracking-[0.3em] text-lg md:text-2xl font-bold text-pearl-pink group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(255,136,204,0.6)]">SEND A WHISTLE</span>
            </div>
            
            <a href="mailto:lovealarm.work@gmail.com" className="relative text-3xl md:text-5xl font-fairytale tracking-wider text-white/90 hover:text-white transition-colors duration-500 z-10 drop-shadow-[0_0_15px_rgba(255,0,127,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(255,0,127,1)]">
              lovealarm.work@gmail.com
            </a>

            {/* Bottom magical underline */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-magic-glow group-hover:w-1/2 transition-all duration-700 shadow-[0_0_15px_rgba(255,0,127,1)]"></div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-10 text-white/40 text-sm font-sans relative z-10">
          <p className="tracking-widest">© 2026 DEARU. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10 mt-6 md:mt-0 font-light tracking-wide">
            <a href="#" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
