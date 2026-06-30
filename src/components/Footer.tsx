import { motion } from 'framer-motion';
import { Mail, Sparkles } from 'lucide-react';

const Fireflies = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${i % 2 === 0 ? 'bg-magic-glow shadow-[0_0_15px_#ff007f]' : 'bg-soft-pink shadow-[0_0_15px_#ff88cc]'}`}
          initial={{ 
            opacity: 0, 
            y: "100%", 
            x: `${Math.random() * 100}vw` 
          }}
          animate={{ 
            opacity: [0, 1, 0.8, 0], 
            y: "-10%", 
            x: `${Math.random() * 100}vw` 
          }}
          transition={{ 
            duration: 10 + Math.random() * 15, 
            repeat: Infinity, 
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer id="send-a-whisper" className="relative w-full pt-32 pb-10 overflow-hidden">
      
      {/* Background magical elements */}
      <div className="absolute bottom-0 left-0 w-full h-[600px] bg-gradient-to-t from-[#090014] via-[#240036]/60 to-transparent pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[400px] bg-magic-shadow rounded-full blur-[150px] opacity-40 pointer-events-none z-0"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[300px] bg-magic-glow rounded-full blur-[120px] opacity-30 pointer-events-none z-0"></div>
      
      {/* Fireflies Layer */}
      <Fireflies />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Title / Logo with Ornate 3D Seal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 relative flex justify-center items-center mt-10 perspective-[2000px] group"
        >
          <div 
             className="relative flex justify-center items-center transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(15deg)_rotateY(-15deg)]"
             style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Giant Ornate Background Seal */}
            <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] border-[1px] border-magic-glow/20 rounded-full animate-[spin_40s_linear_infinite] shadow-[0_0_50px_rgba(255,0,127,0.1)_inset] z-0 pointer-events-none" style={{ transform: 'translateZ(-60px)' }}></div>
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-dashed border-soft-pink/30 rounded-full animate-[spin_30s_linear_infinite_reverse] z-0 pointer-events-none" style={{ transform: 'translateZ(-30px)' }}></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.15),transparent_60%)] blur-[50px] rounded-full z-0 pointer-events-none" style={{ transform: 'translateZ(-10px)' }}></div>
            
            <img 
              src="/assets/title.webp" 
              alt="DearU" 
              className="w-auto h-32 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(255,0,127,0.8)] group-hover:drop-shadow-[0_0_80px_rgba(255,0,127,1)] transition-all duration-1000 relative z-10" 
              style={{ transform: 'translateZ(60px)' }} 
            />
          </div>
        </motion.div>

        {/* Romantic Text */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="relative mb-24 perspective-[1000px] group cursor-default"
        >
          <div 
             className="relative transition-transform duration-1000 ease-out group-hover:[transform:rotateX(-20deg)_scale(1.1)]" 
             style={{ transformStyle: 'preserve-3d' }}
          >
            <p 
               className="font-fairytale text-5xl md:text-7xl text-pearl-pink drop-shadow-[0_0_20px_rgba(255,136,204,0.6)] group-hover:drop-shadow-[0_0_40px_rgba(255,136,204,1)] transition-all duration-1000"
               style={{ transform: 'translateZ(40px)' }}
            >
              Let the magic find you...
            </p>
            <Sparkles className="absolute -top-6 -right-16 text-magic-glow animate-ping w-8 h-8 opacity-70" style={{ transform: 'translateZ(60px)' }} />
            <Sparkles className="absolute -bottom-6 -left-12 text-white animate-pulse delay-300 w-6 h-6 opacity-60" style={{ transform: 'translateZ(80px)' }} />
          </div>
        </motion.div>

        {/* Wax Seal Buttons (App Store & Google Play) - COMING SOON */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-24 md:gap-40 mb-32 perspective-[2000px]">
          
          {/* Apple Seal */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -30, x: -50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group flex flex-col items-center cursor-not-allowed"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* The Seal Body */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/[0.05] to-[#090014] border-[3px] border-magic-glow/30 backdrop-blur-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,0,127,0.2)] group-hover:shadow-[0_0_60px_rgba(255,0,127,0.8),inset_0_0_40px_rgba(255,0,127,0.5)] group-hover:border-magic-glow/80 transition-all duration-700 z-20 group-hover:[transform:rotateX(25deg)_rotateY(15deg)_translateZ(40px)]" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(-15px)' }}></div>
              {/* Apple Icon */}
              <svg viewBox="0 0 384 512" fill="currentColor" className="w-14 h-14 md:w-16 md:h-16 text-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] relative z-10 transition-all duration-700" style={{ transform: 'translateZ(30px)' }}><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            </div>

            {/* Label */}
            <div className="mt-8 relative z-20 transition-transform duration-700 group-hover:[transform:translateZ(20px)_translateY(-5px)] text-center">
              <div className="text-[12px] text-pearl-pink/50 uppercase tracking-[0.3em] mb-2 group-hover:text-magic-glow transition-colors">Coming Soon</div>
              <div className="text-2xl md:text-3xl font-cinzel font-bold text-white/40 group-hover:text-pearl-pink transition-colors tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">APP STORE</div>
            </div>
            
            {/* Trail */}
            <div className="absolute top-full w-2 h-32 bg-gradient-to-b from-magic-glow/30 to-transparent blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(-10px)' }}></div>
          </motion.div>

          {/* Android Seal */}
          <motion.div 
            initial={{ opacity: 0, rotateY: 30, x: 50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative group flex flex-col items-center mt-8 md:mt-0 cursor-not-allowed"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* The Seal Body */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white/[0.05] to-[#090014] border-[3px] border-soft-pink/30 backdrop-blur-3xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_0_20px_rgba(255,136,204,0.2)] group-hover:shadow-[0_0_60px_rgba(255,136,204,0.8),inset_0_0_40px_rgba(255,136,204,0.5)] group-hover:border-soft-pink/80 transition-all duration-700 z-20 group-hover:[transform:rotateX(25deg)_rotateY(-15deg)_translateZ(40px)]" style={{ transformStyle: 'preserve-3d' }}>
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,136,204,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(-15px)' }}></div>
              {/* Android Icon */}
              <svg viewBox="0 0 512 512" fill="currentColor" className="w-14 h-14 md:w-16 md:h-16 text-white/50 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:text-white group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] relative z-10 transition-all duration-700" style={{ transform: 'translateZ(30px)' }}><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
            </div>

            {/* Label */}
            <div className="mt-8 relative z-20 transition-transform duration-700 group-hover:[transform:translateZ(20px)_translateY(-5px)] text-center">
              <div className="text-[12px] text-pearl-pink/50 uppercase tracking-[0.3em] mb-2 group-hover:text-soft-pink transition-colors">Coming Soon</div>
              <div className="text-2xl md:text-3xl font-cinzel font-bold text-white/40 group-hover:text-pearl-pink transition-colors tracking-widest drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">GOOGLE PLAY</div>
            </div>

            {/* Trail */}
            <div className="absolute top-full w-2 h-32 bg-gradient-to-b from-soft-pink/30 to-transparent blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(-10px)' }}></div>
          </motion.div>

        </div>

        {/* Magical Contact Portals (3D) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-5xl mb-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          style={{ perspective: '2000px' }}
        >
          {/* Email Portal */}
          <a 
            href="mailto:lovealarm.work@gmail.com" 
            className="group relative w-full md:w-1/2 flex flex-col items-center justify-center p-10 rounded-[40px] border-[2px] border-magic-glow/20 bg-gradient-to-br from-[#1a0026]/80 to-[#0d0014] backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] hover:border-magic-glow/80 hover:bg-gradient-to-br hover:from-[#33004d]/90 hover:to-[#1a0026]/90 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ 
              transformStyle: 'preserve-3d', 
              transform: 'rotateY(15deg) translateZ(0)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotateY(0deg) translateZ(50px) scale(1.05)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotateY(15deg) translateZ(0) scale(1)' }}
          >
            {/* 3D Depth Layer */}
            <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(-30px)' }}></div>
            
            {/* Core Content */}
            <div className="flex flex-col items-center text-center z-10" style={{ transform: 'translateZ(40px)' }}>
              <div className="w-16 h-16 rounded-full border-[2px] border-magic-glow/50 bg-magic-glow/20 flex items-center justify-center group-hover:bg-magic-glow/50 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(255,0,127,0.5)] group-hover:shadow-[0_0_40px_rgba(255,0,127,1)] mb-6">
                <Mail size={32} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]" />
              </div>
              <h3 className="font-cinzel tracking-[0.3em] text-xl font-bold text-pearl-pink group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(255,136,204,0.6)] mb-2">SEND A WHISPER</h3>
              <p className="text-2xl md:text-3xl font-fairytale tracking-wider text-white/80 group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_15px_rgba(255,0,127,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(255,0,127,1)]">
                lovealarm.work@gmail.com
              </p>
            </div>
            
            {/* Underline */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-magic-glow opacity-30 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_rgba(255,0,127,1)]" style={{ transform: 'translateZ(20px)' }}></div>
          </a>

          {/* Facebook Portal */}
          <a 
            href="https://www.facebook.com/profile.php?id=61590784142581" 
            target="_blank"
            className="group relative w-full md:w-1/2 flex flex-col items-center justify-center p-10 rounded-[40px] border-[2px] border-[#1877F2]/20 bg-gradient-to-br from-[#001026]/80 to-[#000514] backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.9)] hover:border-[#1877F2]/80 hover:bg-gradient-to-br hover:from-[#00204d]/90 hover:to-[#001026]/90 transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ 
              transformStyle: 'preserve-3d', 
              transform: 'rotateY(-15deg) translateZ(0)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotateY(0deg) translateZ(50px) scale(1.05)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'rotateY(-15deg) translateZ(0) scale(1)' }}
          >
            {/* 3D Depth Layer */}
            <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_center,rgba(24,119,242,0.3),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ transform: 'translateZ(-30px)' }}></div>
            
            {/* Core Content */}
            <div className="flex flex-col items-center text-center z-10" style={{ transform: 'translateZ(40px)' }}>
              <div className="w-16 h-16 rounded-full border-[2px] border-[#1877F2]/50 bg-[#1877F2]/20 flex items-center justify-center group-hover:bg-[#1877F2]/50 group-hover:scale-110 transition-all duration-500 shadow-[0_0_15px_rgba(24,119,242,0.5)] group-hover:shadow-[0_0_40px_rgba(24,119,242,1)] mb-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,1)]">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <h3 className="font-cinzel tracking-[0.3em] text-xl font-bold text-blue-200 group-hover:text-white transition-colors drop-shadow-[0_0_10px_rgba(24,119,242,0.6)] mb-2">JOIN THE COVEN</h3>
              <p className="text-2xl md:text-3xl font-fairytale tracking-wider text-white/80 group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_15px_rgba(24,119,242,0.4)] group-hover:drop-shadow-[0_0_30px_rgba(24,119,242,1)]">
                DearU Fanpage
              </p>
            </div>
            
            {/* Underline */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#1877F2] opacity-30 group-hover:w-1/2 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_rgba(24,119,242,1)]" style={{ transform: 'translateZ(20px)' }}></div>
          </a>
        </motion.div>

        {/* Copyright */}
        <div className="w-full max-w-7xl mx-auto border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs md:text-sm font-sans relative z-10">
          <p className="tracking-widest mb-6 md:mb-0">© 2026 DEARU. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10 font-light tracking-widest uppercase">
            <a href="#" className="hover:text-magic-glow hover:drop-shadow-[0_0_10px_rgba(255,0,127,0.8)] transition-all duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-magic-glow hover:drop-shadow-[0_0_10px_rgba(255,0,127,0.8)] transition-all duration-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
