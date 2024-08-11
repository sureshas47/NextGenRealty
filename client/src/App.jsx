import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/js/splide.min.js";
import "aos/dist/aos.css";
import "../src/Content/fonts/icomoon/style.css";
import "../src/Content/css/style.css";
import "@splidejs/splide/dist/css/splide.min.css";
// import "..src/Content/fonts/flaticon/font/flaticon.css";
// import "..src/Content/css/tiny-slider.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import React from "react";
import MyRoutes from "./Routes/routes";

AOS.init();
function App() {
  return (
    <>
      <MyRoutes />
    </>
  );
}

export default App;
