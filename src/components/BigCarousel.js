import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import picture6 from "../assets/portada/Baja-182.jpeg";
import picture7 from "../assets/portada/Foto-613-min.jpeg";
import picture4 from "../assets/portada/Foto-611-min.jpeg";
import picture5 from "../assets/portada/Foto-610-min.jpeg";

export default () => (
  <Container>
    <Carousel enableAutoPlay autoPlaySpeed={5500}>
      <img
        src={picture4}
        style={{ height: "800px", width: "100%", objectFit: "cover"}}
        alt="casamiento"
      />

      <img
        src={picture5}
        style={{ height: "800px", maxWidth: "100%", objectFit: "cover" }}
        alt="casamiento"
      />

      <img
        src={picture6}
        style={{ height: "800px", maxWidth: "100%", objectFit: "cover" }}
        alt="casamiento"
      />
      <img
        src={picture7}
        style={{ height: "800px", maxWidth: "100%", objectFit: "cover" }}
        alt="casamiento"
      />

    </Carousel>
  </Container>
);

const Container = styled.div`

  .rec-arrow {
    display: none;
  }

  .rec.rec-pagination {
    display: none;
  }
`;
