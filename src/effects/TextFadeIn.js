import { motion } from "framer-motion";
import React, { useState } from "react";

const delay = 100;
const duration = 400;

const animationNames = ["fontWeight", "scaleY", "scale", "wobble", "bigWobble"];
const variants = {
  fontWeight: { fontWeight: [400, 900, 400], opacity: 1 },
  scaleY: { scaleY: [1, 0.1, 1], transformOrigin: "center bottom", opacity: 1 },
  scale: { scale: [1, 0, 1], opacity: 1 },
  wobble: { y: [0, -50, 0], opacity: 1 },
  bigWobble: { y: [0, -150, 0], opacity: 1 },
  fadeIn: (i) => ({ opacity: [0, 1], transition: { delay: i * 0.1 } }),
  normal: { y: 0, opacity: 0 },
};

const TextFadeIn = ({ control, defaultValue, ...props }) => {
  const [view, setView] = useState(false);
  return (
    <motion.span
      style={{
        display: "inline-block",
        cursor: "pointer",
        userSelect: "none",
      }}
      initial="normal"
      animate={view ? "fadeIn" : "normal"}
      variants={variants}
      transition={{ type: "spring", duration: duration * 0.001 }}
      whileInView={() => setView(true)}
      viewport={{ margin: "-100px" }}
    >
      {defaultValue}
    </motion.span>
  );
};

export default TextFadeIn;
