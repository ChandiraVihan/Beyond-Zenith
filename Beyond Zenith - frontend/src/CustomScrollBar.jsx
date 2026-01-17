import { useEffect, useRef, useState } from "react";
import "./CustomScrollBar.css";

export default function CustomScrollBar({ children }) {
  const ref = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  let timeout;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setScrolling(false), 600);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-root">
      <div
        ref={ref}
        className={`scroll-container ${scrolling ? "scrolling" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
