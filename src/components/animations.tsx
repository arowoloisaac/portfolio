"use client";
import { motion } from "motion/react";

const first_circle_style = () => {
  return (
    <motion.div
      className="absolute z-0"
      style={{
        top: "10%",
        left: "10%",
        pointerEvents: "none",
      }}
      animate={{
        x: [0, 600, 600, 0, 0],
        y: [0, 0, 400, 400, 0],
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      }}
    >
      <motion.div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, #a78bfa 60%, #000 100%)",
          boxShadow: "0 0 40px 10px #a78bfa55",
          filter: "blur(1px)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

const second_circle_style = () => {
  return (
    <motion.div
      className="absolute z-0"
      style={{
        top: "70%",
        left: "20%",
        pointerEvents: "none",
      }}
      animate={{
        x: [0, 400, 0, -400, 0],
        y: [0, -200, -400, -200, 0],
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 12,
        ease: "linear",
      }}
    >
      <motion.div
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, #f472b6 60%, #000 100%)",
          boxShadow: "0 0 30px 8px #f472b655",
          filter: "blur(1px)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 7,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

const third_circle_style = () => {
  return (
    <motion.div
      className="absolute z-0"
      style={{
        top: "40%",
        left: "80%",
        pointerEvents: "none",
      }}
      animate={{
        x: [0, -300, -300, 0, 0],
        y: [0, 200, -200, 0, 0],
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 8,
        ease: "linear",
      }}
    >
      <motion.div
        style={{
          width: 50,
          height: 50,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 40% 40%, #34d399 60%, #000 100%)",
          boxShadow: "0 0 20px 6px #34d39955",
          filter: "blur(1px)",
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};

export { first_circle_style, second_circle_style, third_circle_style };
