// src/hooks/useSplide.js
import { useEffect } from "react";
import Splide from "@splidejs/splide";

const useSplide = (selector, options) => {
  useEffect(() => {
    const splide = new Splide(selector, options);
    splide.mount();
  }, [selector, options]);
};

export default useSplide;
