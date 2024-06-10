import { useEffect } from "react";
import Splide from "@splidejs/splide";

const useSplide = (selector, options) => {
  useEffect(() => {
    const splide = new Splide(selector, options);
    splide.mount();
    return () => splide.destroy();
  }, [selector, options]);
};

export default useSplide;
