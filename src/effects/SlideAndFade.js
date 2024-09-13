import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import useOnScreen from "../hooks/useOnScreen";

function SlideAndFade({ children }) {
  const [isDone, setIsDone] = useState(false);
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useLayoutEffect(() => {
    if (onScreen && !isDone) {
      let ctx = gsap.context(() => {
        gsap.from(ref.current, {
          y: 20,
          opacity: 0,
          skewY: 10,
          duration: 1,
          ease: "power2.out",
          stagger: 0.5,
        });

        setIsDone(true);
      });
      return () => ctx.revert();
    }
  }, [onScreen]);

  return (
    <div className="animate-slide" ref={ref}>
      {children}
    </div>
  );
}

export default SlideAndFade;
