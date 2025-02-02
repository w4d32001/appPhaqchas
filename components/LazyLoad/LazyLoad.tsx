"use client"
import { useEffect, useRef, useState } from "react";

const LazyLoad = ({ children }: Readonly<{
    children: React.ReactNode;
  }>) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`${isVisible ? "visible" : "invisible"}`}>
      {isVisible && children}
    </div>
  );
};

export default LazyLoad;