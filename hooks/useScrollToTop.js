"use client";

import { useEffect, useState, useCallback } from "react";

export default function useScrollToTop(threshold) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const scrollCallback = () => {
      const scrolledFromTop = window.scrollY;
      setShown(() => scrolledFromTop > threshold);
    };
    window.addEventListener("scroll", scrollCallback);
    scrollCallback();
    return () => {
      window.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { shown, scrollToTop };
}
