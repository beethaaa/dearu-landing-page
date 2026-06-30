import { motion } from "framer-motion";
import { Bluetooth, Heart, Lock, Sparkles } from "lucide-react";

const features = [
  {
    id: "01",
    title: "Close-Range Technology",
    desc: "DearU senses nearby hearts through low-energy proximity signals.",
    icon: Bluetooth,
    side: "left",
    desktopClass: "lg:left-0 lg:top-10",
    lineClass: "lg:left-[330px] lg:top-[50%] lg:w-[170px]",
    accent: "from-[#ff7ab8] to-[#8f5cff]",
  },
  {
    id: "02",
    title: "Natural Connection",
    desc: "No swiping maze. A whisper only begins when the moment feels mutual.",
    icon: Heart,
    side: "right",
    desktopClass: "lg:right-0 lg:top-10",
    lineClass: "lg:right-[330px] lg:top-[50%] lg:w-[170px] lg:bg-linear-to-l",
    accent: "from-[#ffd1dc] to-[#ff4fa3]",
  },
  {
    id: "03",
    title: "Privacy & Safety",
    desc: "You decide when to appear, connect, or step quietly out of range.",
    icon: Lock,
    side: "left",
    desktopClass: "lg:left-8 lg:bottom-[8%]",
    lineClass: "lg:left-[350px] lg:top-[50%] lg:w-[145px]",
    accent: "from-[#c4b5fd] to-[#ff88cc]",
  },
  {
    id: "04",
    title: "Fairytale Experience",
    desc: "Soft motion, glowing rituals, and tiny magical cues make discovery feel alive.",
    icon: Sparkles,
    side: "right",
    desktopClass: "lg:right-10 lg:-bottom-4",
    lineClass: "lg:right-[350px] lg:top-[50%] lg:w-[145px] lg:bg-linear-to-l",
    accent: "from-[#fff1f7] to-[#ff88cc]",
  },
];

const FeatureRibbon = ({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) => {
  const textAlign = feature.side === "left" ? "lg:text-right" : "lg:text-left";
  const rowDirection =
    feature.side === "left" ? "lg:flex-row-reverse" : "lg:flex-row";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: "easeOut" }}
      className={`group relative rounded-[26px] border border-white/10 bg-[#14051f]/58 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-soft-pink/36 hover:bg-white/7.5 hover:shadow-[0_24px_80px_rgba(255,0,127,0.17)] lg:absolute lg:w-[360px] ${feature.desktopClass}`}
    >
      <div className="absolute -top-14 h-32 w-32 rounded-full bg-soft-pink/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:group-hover:opacity-80" />

      <div
        className={`relative px-4 z-10 flex items-start gap-4 ${rowDirection}`}
      >
        <div className={`min-w-0 ${textAlign}`}>
          <div
            className={`mb-2 flex items-center gap-3 ${feature.side === "left" ? "lg:justify-end" : ""}`}
          >
            <span className="font-cinzel text-sm font-bold text-soft-pink/76">
              {feature.id}
            </span>
          </div>
          <h4 className="font-cinzel text-xl font-bold leading-snug tracking-widest text-white transition-colors duration-300 group-hover:text-pearl-pink">
            {feature.title}
          </h4>
          <p className="mt-3 text-sm leading-7 text-pearl-pink/68 transition-colors duration-300 group-hover:text-pearl-pink/90">
            {feature.desc}
          </p>
        </div>
      </div>
    </motion.article>
  );
};

const FeatureSpotlight = () => {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden px-4 py-28 sm:px-6 md:py-36 lg:px-8"
    >
      <div className="absolute left-1/2 top-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-magic-glow/10 blur-[170px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4 md:gap-7">
            <img
              src="/assets/line.webp"
              alt=""
              className="h-auto w-24 rotate-180 opacity-75 drop-shadow-[0_0_12px_rgba(255,0,127,0.45)] md:w-40"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-soft-pink/82 md:text-sm">
              Why it feels different
            </p>
            <img
              src="/assets/line.webp"
              alt=""
              className="h-auto w-24 opacity-75 drop-shadow-[0_0_12px_rgba(255,0,127,0.45)] md:w-40"
            />
          </div>
          <h3 className="font-cinzel text-3xl font-bold lowercase leading-tight tracking-[0.13em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.32)] md:text-5xl">
            Love, tuned to distance.
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-pearl-pink/70 md:text-lg">
            DearU turns nearby moments into gentle signals: private, romantic,
            and designed to feel more like fate than a feed.
          </p>
        </motion.div>

        <div className="relative mt-14 lg:min-h-[660px]">
          <div className="relative z-10 mx-auto mb-6 flex min-h-[430px] max-w-[460px] items-center justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:mb-0 lg:w-[420px] lg:-translate-x-1/2 lg:-translate-y-2/3">
            <div className="absolute h-56 w-56 rounded-full bg-magic-glow/22 blur-[100px] animate-pulse" />

            <motion.img
              src="/assets/rose_light.webp"
              alt="Magic Rose"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[82%] max-w-[350px] object-contain drop-shadow-[0_0_78px_rgba(255,0,127,0.7)]"
            />

            <div className="absolute bottom-4 left-1/2 z-20 w-[70%] -translate-x-1/2 rounded-2xl border border-white/10 bg-deep-night/58 px-5 py-4 text-center backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-pearl-pink/48">
                Signal radius
              </p>
              <p className="mt-1 font-cinzel text-3xl font-bold text-white">
                10m
              </p>
            </div>
          </div>

          <div className="relative z-20 grid grid-cols-2 gap-8 -space-x-4 lg:block lg:translate-y-52">
            {features.map((feature, index) => (
              <FeatureRibbon key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSpotlight;
