import React, { useRef } from "react";
import useObserver from "../hooks/useObserver";
import styled from "styled-components";
import {useSpring, animated as a } from "react-spring";
import { Parallax } from "react-scroll-parallax";
import picture from "../assets/delfi&facu-min/Baja-182-min.jpg";
import fogonero from "../assets/delfi&facu-min/Baja-269-min.jpg";
import {H6, BodyL} from '../styles/texts'

const Complements = () => {
  const triggerRefAbout = useRef();
  const dataRef = useObserver(triggerRefAbout, {
    freezeOnceVisible: false,
  });

  const pStyle = useSpring({
    config: { duration: 1500 },
    from: { opacity: 0, transform: "scale(0.1)" },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });


  const triggerRefAbout1 = useRef();
  const dataRef1 = useObserver(triggerRefAbout1, {
    freezeOnceVisible: false,
  });

  const p1Style = useSpring({
    config: { duration: 1500 },
    from: { opacity: 0, transform: "scale(0.1)" },
    to: {
      opacity: dataRef1?.isIntersecting ? 1 : 0,
      transform: "scale(1)",
    },
  });
  return (
    <>
          <Parallax speed={7}>
          <SectionTitle>COMPLEMENTOS</SectionTitle>
          </Parallax>

      <Section id="complements">
        <Wrapper>
          <Parallax speed={7}>
            <Images>
              <img
              alt="Iluminación"
                src={picture}
                style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: "5px",
                }}
              ></img>
            </Images>
          </Parallax>

          <div ref={triggerRefAbout} />
          <a.div style={pStyle}>
            <Description>
              <Parallax speed={6}>
                <H6>ILUMINACIÓN</H6>
              </Parallax>
              <Parallax speed={8}>
                <BodyL>
                  La iluminación es uno de los elementos más importantes para
                  crear un buen ambiente. Es por esto que ofrecemos guirnaldas
                  de luces para acompañar la carpa.
                </BodyL>
              </Parallax>
            </Description>
          </a.div>
        </Wrapper>

        <Wrapper>
        <div ref={triggerRefAbout1} />
          <a.div style={p1Style}>
          <Description>
            <Parallax speed={6}>
              <H6>FOGONEROS Y PISOS</H6>
            </Parallax>
            <Parallax speed={8}>
              <BodyL>

                
                Ambientá tu fiesta con nuestros fogoneros para lograr el confort ideal. Dale a tu fiesta la calidez que necesita.</BodyL>
            </Parallax>
          </Description>
          </a.div>
          <Parallax speed={7}>
            <Images>
              <img
                     alt="Fogoneros"
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
font-family: "GTWalsheimPro";
font-style: normal;
  padding-top: 80px;

  font-size: 40px;
  color: white;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 40px;
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
  display:flex;
  justify-content:center;

  @media only screen and (max-width: 1200px) {
    width: 550px;
    heigth: 550px;
  }

  @media only screen and (max-width: 630px) {
    width: 450px;
    heigth: 400px;
  }

  @media only screen and (max-width: 420px) {
    width: 320px;
    heigth: 320px;
  }

  @media only screen and (max-width: 350px) {
    width: 320px;
    heigth: 320px;
  }
`;

const Description = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
width:500px;
padding: 10px 0px;

@media only screen and (max-width: 1200px) {
  width: 500px;
  heigth: 500px;
}

@media only screen and (max-width: 630px) {
  width: 440px;
  heigth: 400px;
}

@media only screen and (max-width: 420px) {
  width: 300px;
  heigth: 300px;
}

@media only screen and (max-width: 350px) {
  width: 250px;
  heigth: 250px;
}
`;



export default Complements;
