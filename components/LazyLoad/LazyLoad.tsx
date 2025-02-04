"use client";
import { useEffect, useRef, useState } from "react";

const LazyLoad = ({ children }: Readonly<{ children: React.ReactNode }>) => {
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

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
