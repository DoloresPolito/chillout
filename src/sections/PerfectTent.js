import React from "react";
import styled from "styled-components";
import Trail from "../components/Trail";
import { Parallax } from "react-scroll-parallax";

const PerfectTent = () => {
  return (
    <PerfectSection>
      <Parallax speed={-17}>
        <Trail data={["TENEMOS LA CARPA PERFECTA PARA VOS"]} />
      </Parallax>
    </PerfectSection>
  );
};

const PerfectSection = styled.section`
  position: absolute;
  z-index: 2;
  left: 300px;
  top: 100px;
  background: trasparent;
  color: white;
  @media only screen and (max-width: 1200px) {
    left: 100px;
    top: 100px;
  }

  .letter-changer {
    animation: changeLetter 8s linear;
  }
`;



export default PerfectTent;
