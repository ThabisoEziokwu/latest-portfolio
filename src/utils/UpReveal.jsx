import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function UpReveal({ children, threshold }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const visibleAnimation = useAnimation();

  const theVarients = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        y: 0,
        delay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      y: 2,
    },
  };
  useEffect(() => {
    if (inView) {
      visibleAnimation.start("visible");
    }
  });
  return (
    <div ref={ref}>
      <motion.div
        variants={theVarients}
        initial="hidden"
        animate={visibleAnimation}
      >
        {children}
      </motion.div>
    </div>
  );
}
export default UpReveal;
