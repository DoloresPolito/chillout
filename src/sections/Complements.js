import React from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";
import picture from "../assets/casamientotoia-min/Foto-623-min.jpg";
import pisos from "../assets/pisosmin/pisos1-min.jpeg";

const Complements = () => {
  return (
    <Section>
      <Wrapper>
      {/* <Parallax speed={8}> */}
        <Images>
          <img
            src={picture}
            style={{
              width: "90%",
              height: "90%",
              marginLeft: "60px",
              borderRadius: "5px",
            }}
          ></img>
        </Images>
        {/* </Parallax> */}
        <Description>
          <Parallax speed={8}>
            <Title>ILUMINACIÓN</Title>
     
            </Parallax>
          <Parallax speed={5}>
            <Text>
              La iluminación es uno de los elementos más importantes para crear
              un buen ambiente. Es por esto que ofrecemos guirnaldas de luces
              para acompañar la carpa.
            </Text>
          </Parallax>
        </Description>
      </Wrapper>

      <Wrapper>
        <Description>
          <Parallax speed={8}>
            <Title>PISOS</Title>
          </Parallax>
          <Parallax speed={5}>
          <Text>
            Ambienta el interior de las carpas complementando con pisos de
            madera tipo deck o alfombrado.
          </Text>
          </Parallax>
        </Description>
        <Images>
          {/* <img
            src={pisos}
            style={{
                width: "470px",
                height: "560px",
                marginLeft: "60px",
                borderRadius: "5px",
              }}
          ></img> */}
        </Images>
      </Wrapper>

      <Wrapper>
        <Images>
          <img
            src={picture}
            style={{
              width: "90%",
              height: "90%",
              marginLeft: "60px",
              borderRadius: "5px",
            }}
          ></img>
        </Images>
        <Description>
          <Parallax speed={8}>
            <Title>FOGONEROS</Title>
          </Parallax>
          <Parallax speed={5}>
          <Text>
            La iluminación es uno de los elementos más importantes para crear un
            buen ambiente. Es por esto que ofrecemos guirnaldas de luces para
            acompañar la carpa.
          </Text>
          </Parallax>
        </Description>
      </Wrapper>
    </Section>
  );
};

const Section = styled.div`
padding-top:70px;
  background-color: white;
  padding-bottom:70px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  width: 100%;
  height: 380px;
  align-items: center;
`;

const Images = styled.div`
  width: 40%;
`;

const Description = styled.div`
  color: white;
  width: 40%;
`;

const Text = styled.p`
  letter-spacing: 3px;
  text-transform: uppercase;
  color: grey;
  font-size: 15px;
  font-weight: 200;
  margin: 50px;
`;

const Title = styled.h3`
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #686c5e;
  font-size: 35px;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

export default Complements;
