import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import useOnScreen from "../hooks/useOnScreen";

function ScaleAndAppear({ children }) {
  const [isDone, setIsDone] = useState(false);
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useLayoutEffect(() => {
    if (onScreen && !isDone) {
      let ctx = gsap.context(() => {
        gsap.from(ref.current, {
          duration: 0.8,
          opacity: 0,
          scale: 0.9,
          stagger: 0.5,
          ease: "power2.out",
        });

        setIsDone(true);
      });
      return () => ctx.revert();
    }
  }, [onScreen]);

  return (
    <div className="scale-appear" ref={ref}>
      {children}
    </div>
  );
}

export default ScaleAndAppear;
