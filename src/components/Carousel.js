import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Card from "./Card";
import { Parallax } from "react-scroll-parallax";
import picture1 from "../assets/casamientotoia-min/Foto-1383-min.jpg";
import picture2 from "../assets/casamientotoia-min/Foto-716-min.jpg";
import picture3 from "../assets/casamientotoia-min/Foto-615-min.jpg";
import picture4 from "../assets/casamientotoia-min/Foto-620-min.jpg";
import picture5 from "../assets/delfi&facu-min/Baja-124-min.jpg";
import picture6 from "../assets/delfi&facu-min/Baja-136-min.jpg";
import picture7 from "../assets/delfi&facu-min/Baja-138-min.jpg";
import picture8 from "../assets/delfi&facu-min/Baja-139-min.jpg";
import picture9 from "../assets/delfi&facu-min/Baja-141-min.jpg";
import picture10 from "../assets/delfi&facu-min/Baja-170-min.jpg";
import picture11 from "../assets/delfi&facu-min/Baja-172-min.jpg";
import picture12 from "../assets/delfi&facu-min/Baja-175-min.jpg";
import picture13 from "../assets/delfi&facu-min/Baja-179-min.jpg";
import picture14 from "../assets/delfi&facu-min/Baja-180-min.jpg";
import picture15 from "../assets/delfi&facu-min/Baja-182-min.jpg";
import picture16 from "../assets/delfi&facu-min/Baja-200-min.jpg";

const CarouselSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const medium = 900;

  return (
    <Container>
       <Parallax speed={6}>
      <EventTitle>EVENTOS</EventTitle>
      </Parallax>
      <Parallax speed={12}>
      <Carousel
        enableAutoPlay
        autoPlaySpeed={5500}
        itemsToShow={width >= medium ? 2 : 1}
        itemsToScroll={1}
      >
        <Card mode="black">
          <img
            src={picture1}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>

        <Card mode="black">
          <img
            src={picture5}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture6}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture7}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture8}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>

        <Card mode="black">
          <img
            src={picture9}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture10}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture11}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture12}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>

        <Card mode="black">
          <img
            src={picture13}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture14}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture15}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture16}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture2}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture3}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture4}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
        <Card mode="black">
          <img
            src={picture11}
            style={{ height: "100%", width: "100%" }}
            alt="casamiento"
          />
        </Card>
      </Carousel>
      </Parallax>
    </Container>
  );
};

const EventTitle = styled.h3`
font-family: "GTWalsheimPro";
font-style: normal;
  font-size: 40px;
  color: #c8c3ba;
  font-weight: 500;
  letter-spacing: 5px;

  display: flex;
  justify-content: center;

  padding-top: 50px;

  @media only screen and (max-width: 700px) {
    font-size: 50px !important;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px !important;
  }
  @media only screen and (max-width: 470px) {
    font-size: 30px !important;
  }
`;

const Container = styled.div`
  /* square buttons */
  .rec.rec-arrow {

    border-radius: none;
    background-color: #d6d0cb;
    color:white;
    margin:10px;
  }
  /* round buttons on hover */
  .rec.rec-arrow:hover {
    border-radius: none;
    color:grey
  }

  /* hide disabled buttons */
  .rec.rec-arrow:disabled {
    visibility: hidden;
  }
  /* disable default outline on focused items */
  /* add custom outline on focused items */
  .rec-carousel-item:focus {
    outline: none;
    box-shadow: inset 0 0 1px 1px lightgrey;
  }

  .rec.rec-pagination {
    display: none;
  }

  .custom {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default CarouselSection;
