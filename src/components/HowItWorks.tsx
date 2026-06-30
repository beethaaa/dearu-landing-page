import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Wake The Signal",
    desc: "Turn on DearU and let the app listen for nearby resonance around you.",
    img: "/assets/sync.webp",
  },
  {
    id: "02",
    title: "Feel A Heartbeat",
    desc: "When someone compatible is close, the interface responds with a soft Love Alarm pulse.",
    img: "/assets/heart.webp",
  },
  {
    id: "03",
    title: "Send A Whisper",
    desc: "Choose the moment, send a gentle signal, and begin a real conversation naturally.",
    img: "/assets/letter_open.webp",
  },
];

const HowItWorks = () => {
  return (
    <section id="the-magic" className="relative w-full overflow-hidden px-4 py-28 sm:px-6 md:py-36 lg:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,0,20,0),rgba(36,0,54,0.18)_45%,rgba(9,0,20,0))] pointer-events-none" />

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
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-soft-pink/82 md:text-sm">The Magic</p>
            <img src="/assets/line.webp" alt="" className="h-auto w-24 opacity-75 drop-shadow-[0_0_12px_rgba(255,0,127,0.45)] md:w-40" />
          </div>
          <h3 className="font-cinzel text-3xl font-bold lowercase leading-tight tracking-[0.13em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.32)] md:text-5xl">
            Three little rituals before fate answers.
          </h3>
        </motion.div>

        <div className="relative overflow-hidden rounded-[36px] border border-white/12 bg-[#10031a]/62 px-5 py-8 shadow-[0_32px_110px_rgba(0,0,0,0.46)] backdrop-blur-2xl md:px-8 md:py-10 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,136,204,0.18),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_34%,rgba(255,0,127,0.06))]" />

          <div className="relative z-10 grid gap-5 lg:grid-cols-3">
            {steps.map((step, index) => {

              return (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.14, ease: "easeOut" }}
                  className="group relative min-h-[430px] overflow-hidden rounded-[28px] border border-white/10 bg-deep-night/42 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-soft-pink/42 hover:bg-white/[0.07] hover:shadow-[0_26px_80px_rgba(255,0,127,0.18)]"
                >
                  <div className="absolute -right-24 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,136,204,0.18),transparent_68%)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-cinzel text-5xl font-bold leading-none text-white/6 transition-colors duration-500 group-hover:text-soft-pink/18 md:text-6xl">
                        {step.id}
                      </span>
                    </div>

                    <div className="relative my-8 flex min-h-[150px] items-center justify-center">
                      <motion.div
                        animate={{ scale: [0.86, 1.12], opacity: [0.36, 0] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: index * 0.35 }}
                        className="absolute h-36 w-36 rounded-full border border-soft-pink/34 shadow-[0_0_32px_rgba(255,136,204,0.35)]"
                      />
                      <motion.img
                        src={step.img}
                        alt=""
                        animate={{ y: [-7, 7, -7] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: index * 0.35 }}
                        className="relative z-10 h-32 w-32 object-contain drop-shadow-[0_0_36px_rgba(255,0,127,0.5)] transition-transform duration-500 group-hover:scale-110 md:h-40 md:w-40"
                      />
                    </div>

                    <div className="mt-auto">
                      <h4 className="font-cinzel text-2xl font-bold lowercase leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-pearl-pink">
                        {step.title}
                      </h4>
                      <p className="italic mt-4 text-base leading-8 text-pearl-pink/70 transition-colors duration-300 group-hover:text-pearl-pink/92">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
