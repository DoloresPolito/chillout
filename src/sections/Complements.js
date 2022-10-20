import React, { useRef } from "react";
import useObserver from "../hooks/useObserver";
import styled from "styled-components";
import { useTransition, useSpring, animated as a } from "react-spring";
import { Parallax } from "react-scroll-parallax";
import picture from "../assets/delfi&facu-min/Baja-182-min.jpg";
import fogonero from "../assets/delfi&facu-min/Baja-269-min.jpg";




const Complements = () => {
  const triggerRefAbout = useRef();

  const dataRef = useObserver(triggerRefAbout, {
    freezeOnceVisible: true,
  });

  const pStyle = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, transform: "scale(0.1)" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });

  return (
    <>
      {" "}
 
        <SectionTitle>COMPLEMENTOS</SectionTitle>
   <div ref={triggerRefAbout} />
        <SubTitle>
          Elegí las terminaciones que más vayan con tu evento y sumale los
          complementos necesarios para lograr el confort ideal.
        </SubTitle>

      <Section id="complements">
        <Wrapper>
          <Parallax speed={7}>
            <Images>
              <img
                src={picture}
                style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: "5px",
                }}
              ></img>
            </Images>
          </Parallax>
          <Description>
            <Parallax speed={6}>
              <Title>ILUMINACIÓN</Title>
            </Parallax>
            <Parallax speed={8}>
           

              <a.div style={pStyle}>
                <Text>
                  La iluminación es uno de los elementos más importantes para
                  crear un buen ambiente. Es por esto que ofrecemos guirnaldas
                  de luces para acompañar la carpa.
                </Text>
              </a.div>
            </Parallax>
          </Description>
        </Wrapper>

        <Wrapper>
          <Description>
            <Parallax speed={6}>
              <Title>FOGONEROS Y PISOS</Title>
            </Parallax>
            <Parallax speed={8}>
              <Text>Ambientá tu fiesta con nuestros fogoneros.</Text>
            </Parallax>
          </Description>
          <Parallax speed={7}>
            <Images>
              <img
                src={fogonero}
                style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: "5px",
                }}
              ></img>
            </Images>
          </Parallax>
        </Wrapper>
      </Section>
    </>
  );
};

const SectionTitle = styled.h3`
  padding-top: 80px;
  font-family: "Raleway", sans-serif;
  font-size: 40px;
  color: white;
  font-weight: 500;
  margin-top: 40px;
  display: flex;
  justify-content: center;

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
const SubTitle = styled.h3`
  padding-top: 30px;
  font-family: "Raleway", sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 18px;
  color: white;
  font-weight: 300;
  width: 600px;
  margin: 0 auto;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    font-size: 15px !important;
    width: 500px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 15px !important;
    width: 400px;
  }
  @media only screen and (max-width: 470px) {
    font-size: 12px !important;
    width: 300px;
  }
`;

const Section = styled.div`
  background-color: #d6d2ce;
  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Images = styled.div`
  width: 600px;
  heigth: 600px;
  margin-left: 50px;
  @media only screen and (max-width: 1200px) {
    width: 550px;
    heigth: 550px;
  }

  @media only screen and (max-width: 630px) {
    width: 450px;
    heigth: 400px;
  }

  @media only screen and (max-width: 420px) {
    width: 400px;
    heigth: 400px;
  }

  @media only screen and (max-width: 350px) {
    width: 350px;
    heigth: 350px;
  }
`;

const Description = styled.div`
  width: 500px;
  heigth: 500px;
  color: white;
`;

const Text = styled.p`
  letter-spacing: 3px;
  text-transform: uppercase;
  color: grey;
  font-size: 15px;
  font-weight: 200;
  margin: 0 auto;
  margin-top: 30px;
  @media only screen and (max-width: 1200px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 630px) {
    font-size: 11px;
    width: 400px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 10px;
    width: 300px;
  }
`;

const Title = styled.h3`
  letter-spacing: 2px;
  text-transform: uppercase;
  color: grey;
  font-size: 30px;
  display: flex;
  justify-content: center;
  font-weight: 400;
  @media only screen and (max-width: 1200px) {
    font-size: 23px;
  }

  @media only screen and (max-width: 630px) {
    font-size: 18px;
  }
`;

export default Complements;
