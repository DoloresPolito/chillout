import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Card from "./Card";
import picture1 from "../assets/casamientotoia-min/Foto-610-min.jpg";
import picture2 from "../assets/casamientotoia-min/Foto-611-min.jpg";
import picture3 from "../assets/casamientotoia-min/Foto-618-min.jpg";
import picture4 from "../assets/casamientotoia-min/Foto-620-min.jpg";

const CarouselSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 850;

  return (
    <Container>
      <Carousel
        itemsToShow={width >= medium ? 1 : 1}
        itemsToScroll={width >= medium ? 1 : 1}
        pagination={width >= medium ? false : true}
      >
        <Card custom={true} mode="black">
          <img src={picture1} style={{ height: "100%", width: "100%" }} />
        </Card>
        <Card custom={true} mode="black">
          <img src={picture2} style={{ height: "100%", width: "100%" }} />
        </Card>
        <Card custom={true} mode="black">
          <img src={picture3} style={{ height: "100%", width: "100%" }} />
        </Card>
        <Card custom={true} mode="black">
          <img src={picture4} style={{ height: "100%", width: "100%" }} />
        </Card>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  .rec-carousel {
    width: 1050px;
    min-height: 700px;
    @media only screen and (max-width: 850px) {
      width: 90vw;
    }
  }
  .rec-slider-container {
    margin: 0;
  }
  .rec-arrow {
    background-color: transparent;
    color: #ffffff57;
    box-shadow: none;
  }
  .rec-arrow:hover,
  .rec-arrow:active,
  .rect-arrow:focus {
    background-color: transparent;
    color: #ffffff;
    box-shadow: none;
  }
  .custom {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default CarouselSection;
