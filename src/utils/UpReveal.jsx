import { useRef, useEffect } from "react";
import { motion, useInView, useAnimate } from "framer-motion";
function UpReveal({ children }) {
  const varient = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const revealRef = useRef();
  const isInView = useInView(revealRef, { once: true });
  const visibleAnimation = useAnimate();

  useEffect(() => {
    if (isInView) {
      visibleAnimation.start("visible");
    }
  });
  return (
    <div ref={revealRef}>
      <motion.div
        variants={varient}
        initial="hidden"
        animate={visibleAnimation}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default UpReveal;
