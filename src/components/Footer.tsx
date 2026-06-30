import { motion } from "framer-motion";
import { ExternalLink, Mail, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer id="send-a-whisper" className="relative w-full overflow-hidden px-4 pb-10 pt-28 sm:px-6 md:pt-36 lg:px-8">
      <div className="absolute inset-x-0 bottom-0 h-[620px] bg-[linear-gradient(180deg,rgba(9,0,20,0),rgba(36,0,54,0.32)_38%,rgba(9,0,20,0.96))] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-16 max-w-4xl text-center md:mb-20"
        >
          <div className="mb-6 flex items-center justify-center gap-4 md:gap-7">
            <img src="/assets/line.webp" alt="" className="h-auto w-24 rotate-180 opacity-75 drop-shadow-[0_0_12px_rgba(255,0,127,0.45)] md:w-40" />
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-soft-pink/82 md:text-sm">Contact</p>
            <img src="/assets/line.webp" alt="" className="h-auto w-24 opacity-75 drop-shadow-[0_0_12px_rgba(255,0,127,0.45)] md:w-40" />
          </div>
          <h3 className="font-cinzel text-3xl font-bold lowercase leading-tight tracking-[0.13em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.32)] md:text-5xl">
            Let the next story begin with a signal.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[38px] border border-white/12 bg-[#11031b]/66 shadow-[0_34px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,136,204,0.22),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_42%,rgba(255,0,127,0.08))]" />

          <div className="relative z-10 grid min-h-[560px] items-center gap-10 px-6 py-10 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-14">
            <div className="relative order-2 min-h-[360px] overflow-hidden rounded-[30px] border border-white/10 bg-deep-night/42 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34)] lg:order-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(255,136,204,0.16),transparent_40%)]" />

              <motion.img
                src="/assets/window.webp"
                alt=""
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-8 z-0 w-[72%] max-w-[360px] -translate-x-1/2 object-contain opacity-60 drop-shadow-[0_0_55px_rgba(255,136,204,0.35)]"
              />
              <img
                src="/assets/clock.webp"
                alt=""
                className="absolute bottom-4 right-4 z-50 w-20 object-contain opacity-85 drop-shadow-[0_0_30px_rgba(255,136,204,0.38)] md:w-24"
              />
              <img
                src="/assets/letter_rose.webp"
                alt=""
                className="absolute bottom-6 left-2 z-10 w-28 rotate-[-40deg] object-contain opacity-90 drop-shadow-[0_0_30px_rgba(255,0,127,0.35)] md:w-32"
              />
              <motion.img
                src="/assets/butterfly_light.webp"
                alt=""
                animate={{ x: [-12, 18, -12], y: [0, -18, 0], rotate: [-8, 14, -8] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[18%] top-[24%] z-20 w-16 object-contain drop-shadow-[0_0_24px_rgba(255,136,204,0.8)]"
              />

              <div className="absolute bottom-6 left-1/2 z-20 w-[82%] -translate-x-1/2 rounded-2xl border border-white/10 bg-deep-night/58 px-5 py-4 text-center backdrop-blur-xl">
                <p className="font-serif text-2xl italic text-white md:text-3xl">DearU is opening soon</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-soft-pink/68">stay close to the signal</p>
              </div>
            </div>

            <div className="order-1 text-center lg:order-2 lg:text-left">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-soft-pink/24 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-soft-pink/86">
                <Sparkles className="h-4 w-4" />
                Drop a message
              </div>

              <h2 className="font-cinzel text-3xl font-bold leading-tight tracking-[0.13em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.32)] md:text-5xl">
                begin your dearu story
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-pearl-pink/72 md:text-base lg:mx-0">
                Follow DearU, send us a note, or keep your place near the first wave of magic.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row lg:justify-start">
                <a
                  href="mailto:lovealarm.work@gmail.com"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-magic-glow/28 bg-magic-glow/15 px-6 py-4 font-cinzel text-sm font-bold tracking-[0.16em] text-white shadow-[0_16px_45px_rgba(255,0,127,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-magic-glow/60 hover:bg-magic-glow/20 hover:shadow-[0_24px_70px_rgba(255,0,127,0.28)]"
                >
                  <Mail className="h-5 w-5" />
                  Email us
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61590784142581"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/14 bg-white/7 px-6 py-4 font-cinzel text-sm font-bold uppercase tracking-[0.16em] text-pearl-pink transition-all duration-300 hover:-translate-y-1 hover:border-soft-pink/44 hover:bg-white/12 hover:text-white"
                >
                  <ExternalLink className="h-5 w-5" />
                  Fanpage
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 mt-9 flex flex-col items-center justify-between gap-6 text-center text-xs uppercase tracking-[0.22em] text-white/42 md:flex-row md:text-left">
          <p>© 2026 DearU. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#" className="transition-colors duration-300 hover:text-soft-pink">Privacy Policy</a>
            <a href="#" className="transition-colors duration-300 hover:text-soft-pink">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
