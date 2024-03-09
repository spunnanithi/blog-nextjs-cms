"use client";

import useScrollToTop from "@hooks/useScrollToTop.js";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const { shown, scrollToTop } = useScrollToTop(300);

  return (
    <button
      aria-label="scroll to top"
      onClick={scrollToTop}
      className={`${
        shown ? "scale-100" : "scale-0"
      } fixed bottom-10 right-10 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary-dark shadow-lg shadow-gray-900 transition-transform duration-200 dark:bg-primary-light 2xl:right-96`}
    >
      {/* svg icon here*/}
      <ArrowUp strokeWidth={2.5} className="text-myImperialBlue" />
    </button>
  );
};

export default ScrollToTopButton;
