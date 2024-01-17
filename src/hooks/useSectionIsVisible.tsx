import { useEffect, useState } from "react";
import { useAnimation } from "framer-motion";

export const useSectionIsVisible = (elementId: string) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(elementId);
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const isElementVisible = elementTop < window.innerHeight;

        if (isElementVisible && !isVisible) {
          setIsVisible(true);
          controls.start("visible");
        } else if (!isElementVisible && isVisible) {
          setIsVisible(false);
          controls.start("hidden");
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, elementId, isVisible]);

  return controls;
};
