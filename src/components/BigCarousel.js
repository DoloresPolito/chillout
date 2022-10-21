import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import picture3 from "../assets/portada/Baja-182-1.jpeg";
import picture4 from "../assets/portada/Foto-613-min-1.jpeg";
import picture1 from "../assets/portada/Foto-611-min-1.jpeg";
import picture2 from "../assets/portada/Foto-610-min-1.jpeg";


const BigCarousel = () => {
  return (
    <Container>
      <Carousel enableAutoPlay autoPlaySpeed={5500}>
        <Image src={picture1} alt="casamiento" />
        <Image src={picture2} alt="casamiento" />
        <Image src={picture3} alt="casamiento" />
        <Image src={picture4} alt="casamiento" />
      </Carousel>
    </Container>
  );
}


const Image = styled.img`
  height: 80%;
  max-width: 100%;
  object-fit: cover;

  @media only screen and (max-width: 770px) {
    padding-top: 40px;
  }
`;

const Container = styled.div`
  .rec-arrow {
    display: none;
  }

  .rec.rec-pagination {
    display: none;
  }
`;


export default BigCarousel;