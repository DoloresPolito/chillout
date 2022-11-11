import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Form from "./Form";
import Complements from "./Complements";
import CarouselSection from "./Events";
import BigCarousel from "../components/BigCarousel";
import PerfectTent from "./PerfectTent";
import VerticalCover from "./VerticalCover";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function Landing() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 700;
  return (
    <div>
      <Navbar />

      {width >= medium ? (
        <>
          <BigCarousel />
          <PerfectTent />
        </>
      ) : (
        <>
          <VerticalCover />
        </>
      )}

      <Complements />
      <CarouselSection />
      <Form />
      <Footer />
    </div>
  );
}

export default Landing;
