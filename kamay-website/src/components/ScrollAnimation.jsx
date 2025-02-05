// components/ScrollAnimation.jsx
'use client';

import { motion } from "framer-motion";

export const ScrollAnimation = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.98 }}
    whileInView={{
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: delay
      }
    }}
    viewport={{ once: false, margin: "-100px" }}
  >
    {children}
  </motion.div>
);