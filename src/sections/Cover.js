import React, { useEffect, useState } from "react";
import styled from "styled-components";
import picture from "../assets/casamientotoia-min/portada-final.jpeg";
import smallPicture from "../assets/casamientotoia-min/portada-cortada.jpeg";

const Cover = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 950;
  return (
    <CoverWrapper>
      {width >= medium ? (
        <Image src={picture}></Image>
      ) : (
        <>
          <Image src={smallPicture}></Image>
        </>
      )}
    </CoverWrapper>
  );
};

const CoverWrapper = styled.section`
  heigth: 100vh;
  background: black;
  margin-top: 40px;
`;

const Image = styled.img`
  height: 600px;
  max-width: 100%;
  object-fit: cover;

  // @media only screen and (max-width: 1200px) {
  //   height: 500px;
  //   max-width: 100%;
  // }
  // @media only screen and (max-width: 1100px) {
  //   height: 450px;
  //   max-width: 100%;
  // }
  // @media only screen and (max-width: 950px) {
  //   max-width: 100%;
  //   height: 400px;
  // }
  // @media only screen and (max-width: 500px) {
  //   max-width: 100%;
  //   height: 350px;
  // }
  // @media only screen and (min-width: 499px) {
  //   max-width: 100%;
  //   height: 300px;
  // }
`;

export default Cover;
