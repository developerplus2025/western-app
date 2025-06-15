"use client";
import { motion } from "framer-motion";

type SplitTextProps = {
  text: string;
  className?: string;
};

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.04 * i },
  }),
};

const child = {
  hidden: {
    opacity: 0,
    y: `0.25em`,
  },
  visible: {
    opacity: 1,
    y: `0em`,
    transition: {
      duration: 0.4,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export const SplitText = ({ text, className }: SplitTextProps) => {
  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline-block", overflow: "hidden" }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};
