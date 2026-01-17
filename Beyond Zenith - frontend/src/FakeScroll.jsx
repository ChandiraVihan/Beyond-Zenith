import { useRef, useEffect, useState } from "react";
import "./FakeScroll.css";

export default function FakeScroll({ children }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const hideTimeout = useRef(null);

  const [thumbHeight, setThumbHeight] = useState(40);
  const [thumbTop, setThumbTop] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const updateThumb = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      const heightRatio = clientHeight / scrollHeight;
      const thumbH = Math.max(clientHeight * heightRatio, 40);
      const thumbT =
        (scrollTop / (scrollHeight - clientHeight)) *
        (clientHeight - thumbH);

      setThumbHeight(thumbH);
      setThumbTop(thumbT);
    };

    const onScroll = () => {
      updateThumb();
      setVisible(true);
      clearTimeout(hideTimeout.current);
      hideTimeout.current = setTimeout(() => setVisible(false), 700);
    };

    updateThumb();
    container.addEventListener("scroll", onScroll);
    window.addEventListener("resize", updateThumb);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateThumb);
    };
  }, []);

  return (
    <div className="fake-scroll-root">
      <div ref={containerRef} className="fake-scroll-container">
        <div ref={contentRef}>{children}</div>
      </div>

      <div className={`fake-scrollbar ${visible ? "show" : ""}`}>
        <div
          className="fake-thumb"
          style={{ height: thumbHeight, transform: `translateY(${thumbTop}px)` }}
        />
      </div>
    </div>
  );
}
