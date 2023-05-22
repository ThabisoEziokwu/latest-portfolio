import { useRef, useEffect } from "react";
import { inView, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
function UpReveal({ children, threshold }) {
  // const revealRef = useRef();
  // const isInView = useInView(revealRef, { once: true });
  const { ref, inView, entry } = useInView({
    threshold,
  });
  const visibleAnimation = useAnimation();

  const theVarients = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.1,
      },
    },
    hidden: {
      opacity: 0,
      y: 80,
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
