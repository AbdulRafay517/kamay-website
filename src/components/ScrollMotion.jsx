// components/ScrollMotion.jsx
'use client';

import { motion } from "framer-motion";

export const ScrollMotion = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ 
      type: "spring",
      stiffness: 100,
      damping: 20,
      delay
    }}
  >
    {children}
  </motion.div>
);