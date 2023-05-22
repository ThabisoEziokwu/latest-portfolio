import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function ScrollReveal({ children, startAnimation }) {
  const variant = {
    hidden: {
      opacity: 0,
      y: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
  };

  const { ref, inView } = useInView({
    threshold: 1,
  });
  const slideAnimation = useAnimation();
  const upAnimation = useAnimation();

  useEffect(() => {
    if (startAnimation) {
      slideAnimation.start("hidden");
    }
    if (inView) {
      upAnimation.start("visible");
    }
  });
  return (
    <div
      style={{ position: "relative", width: "fitContent", overflow: "hidden" }}
      ref={ref}
    >
      <motion.div variants={variant} initial="hidden" animate={upAnimation}>
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: "100%",
            transition: {
              duration: 0.4,
            },
          },
          visible: {
            left: 0,
          },
        }}
        initial="visible"
        animate={slideAnimation}
        style={{
          backgroundColor: "black",
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          zIndex: 6,
        }}
      ></motion.div>
    </div>
  );
}

export default ScrollReveal;
