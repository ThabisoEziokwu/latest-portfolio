import React from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Distance({ children, dist }) {
  const ref = useRef();

  useEffect(() => {
    const handleDistance = () => {
      //   const screenHeight = window.innerHeight;
      const { top } = ref.current.getBoundingClientRect();
      const distance = top + pageYOffset;
      return distance;
    };

    setInterval(() => {
      if (ref.current) {
        dist(handleDistance());
      }
    }, 0);
  }, [dist]);

  return (
    <div ref={ref}>
      <div>{children}</div>
    </div>
  );
}

export default Distance;
