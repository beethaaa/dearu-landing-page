import { motion } from "framer-motion";

const butterflies = [
  { left: "6%", top: "14%", size: 42, delay: 0, duration: 14, drift: 36 },
  { left: "84%", top: "18%", size: 34, delay: 1.6, duration: 16, drift: -42 },
  { left: "18%", top: "38%", size: 28, delay: 3.2, duration: 15, drift: 48 },
  { left: "72%", top: "42%", size: 48, delay: 0.8, duration: 18, drift: -38 },
  { left: "9%", top: "66%", size: 36, delay: 2.4, duration: 17, drift: 44 },
  { left: "88%", top: "72%", size: 30, delay: 4.1, duration: 15, drift: -34 },
  { left: "48%", top: "22%", size: 24, delay: 5.1, duration: 19, drift: 30 },
  { left: "58%", top: "86%", size: 40, delay: 1.1, duration: 16, drift: -46 },
];

const FloatingButterflies = () => {
  return (
    <div className="fixed inset-0 z-[15] overflow-hidden pointer-events-none" aria-hidden="true">
      {butterflies.map((butterfly, index) => (
        <motion.img
          key={`${butterfly.left}-${butterfly.top}`}
          src="/assets/butterfly_light.webp"
          alt=""
          className="absolute object-contain opacity-0 drop-shadow-[0_0_18px_rgba(255,136,204,0.75)]"
          style={{
            left: butterfly.left,
            top: butterfly.top,
            width: butterfly.size,
            height: butterfly.size,
          }}
          animate={{
            x: [0, butterfly.drift, butterfly.drift * -0.35, 0],
            y: [0, -34, 28, 0],
            rotate: [index % 2 === 0 ? -8 : 8, index % 2 === 0 ? 16 : -16, index % 2 === 0 ? -12 : 12],
            scale: [0.88, 1.08, 0.96, 0.88],
            opacity: [0, 0.7, 0.42, 0],
          }}
          transition={{
            duration: butterfly.duration,
            delay: butterfly.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingButterflies;
