import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#our-story" },
    { name: "The Magic", href: "#the-magic" },
    { name: "Send A Whisper", href: "#send-a-whisper" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        scrolled
          ? "py-3"
          : "bg-linear-to-b from-deep-night/85 via-deep-night/35 to-transparent py-5 md:py-7"
      }`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8 pt-2">
        <div
          className={`relative flex items-center justify-between overflow-hidden rounded-[24px] border px-4 shadow-[0_18px_50px_rgba(9,0,20,0.38)] backdrop-blur-2xl transition-all duration-700 md:rounded-full md:px-6 ${
            scrolled
              ? "min-h-16 border-white/12 bg-[#13071f]/72 shadow-[0_12px_38px_rgba(9,0,20,0.42)]"
              : "min-h-20 border-white/14 bg-[#1b0a28]/52"
          }`}
        >
          <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/45 to-transparent" />
          <div className="absolute inset-x-10 bottom-0 h-px bg-linear-to-r from-transparent via-magic-glow/55 to-transparent" />
          <div className="absolute -left-16 top-1/2 h-24 w-48 -translate-y-1/2 -rotate-12 bg-linear-to-r from-white/12 to-transparent blur-2xl" />

          <a
            href="/"
            aria-label="DearU home"
            className="group relative z-10 flex min-w-[126px] items-center"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src="/assets/crown.webp"
              alt="DearU"
              className={`w-auto object-contain drop-shadow-[0_8px_24px_rgba(255,0,127,0.28)] transition-all duration-500 group-hover:scale-[1.04] group-hover:drop-shadow-[0_0_28px_rgba(255,230,242,0.38)] ${
                scrolled ? "h-12 md:h-14" : "h-14 md:h-14"
              }`}
            />
          </a>

          <div className="relative z-10 hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group/item relative px-5 py-3 text-center font-cinzel text-sm font-bold uppercase tracking-[0.16em] text-pearl-pink/78 transition-all duration-300 hover:text-white xl:px-7 xl:text-base"
              >
                <span className="relative z-10 transition-all duration-300 group-hover/item:drop-shadow-[0_0_14px_rgba(255,136,204,0.95)]">
                  {item.name}
                </span>
                <span className="absolute inset-x-4 bottom-2 h-px origin-center scale-x-0 bg-linear-to-r from-transparent via-soft-pink to-transparent opacity-0 shadow-[0_0_14px_rgba(255,0,127,0.9)] transition-all duration-300 group-hover/item:scale-x-100 group-hover/item:opacity-100" />
              </a>
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-end gap-3 sm:min-w-[126px]">
            <a
              href="https://github.com/beethaaa/lovealarm-fe/releases/download/latest-android/dearu-android-latest.apk"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn hidden items-center justify-center transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
            >
              <img
                src="/assets/DownloadButton.png"
                alt="Download"
                className={`w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] translate-y-2 scale-150 pe-6 transition-all duration-500 group-hover/btn:brightness-110 group-hover/btn:drop-shadow-[0_0_28px_rgba(255,0,127,0.72)] ${
                  scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
                }`}
              />
            </a>

            <button
              type="button"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-pearl-pink shadow-[0_8px_24px_rgba(0,0,0,0.24)] transition-all duration-300 hover:border-soft-pink/45 hover:bg-white/14 hover:text-white lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="absolute left-4 right-4 top-[calc(100%+10px)] overflow-hidden rounded-[22px] border border-white/12 bg-[#13071f]/92 p-2 shadow-[0_18px_50px_rgba(9,0,20,0.5)] backdrop-blur-2xl lg:hidden"
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-2xl px-5 py-4 font-cinzel text-sm font-bold uppercase tracking-[0.14em] text-pearl-pink/82 transition-all duration-300 hover:bg-white/8 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://github.com/beethaaa/lovealarm-fe/releases/download/latest-android/dearu-android-latest.apk"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-1 flex items-center justify-center rounded-2xl border border-magic-glow/30 bg-magic-glow/12 px-5 py-3 transition-all duration-300 hover:bg-magic-glow/18"
              >
                <img
                  src="/assets/DownloadButton.png"
                  alt="Download"
                  className="h-16 w-auto object-contain drop-shadow-[0_0_22px_rgba(255,0,127,0.45)]"
                />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
