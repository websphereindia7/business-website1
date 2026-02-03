import { motion } from "framer-motion";

export default function FadeIn({
  children,
  delay = 0,
  x = 0, // optional horizontal offset
  y = 16, // vertical offset
  hoverScale = 1, // optional hover scaling
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      whileHover={{ scale: hoverScale }}
    >
      {children}
    </motion.div>
  );
}
