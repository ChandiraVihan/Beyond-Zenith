import { useEffect, useRef, useState } from "react";
import "./CustomScrollBar.css";

export default function ScrollBar({ children }) {
  const scrollRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      setScrolling(true);
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setScrolling(false);
      }, 800); // fade-out delay
    };

    el.addEventListener("scroll", onScroll);

    return () => {
      el.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="space-scroll-root">
      <div
        ref={scrollRef}
        className={`space-scroll ${scrolling ? "scrolling" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
