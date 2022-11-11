import React, { useEffect, useState } from "react";
import styled from "styled-components";
import picture from "../assets/casamientotoia-min/portada-final.jpeg";
import smallPicture from "../assets/casamientotoia-min/portada-cortada.jpeg";
import Menu from '../components/Menu'
import Tabs from '../components/Tabs'
import Hamburger from 'hamburger-react'
import { Container } from '../styles/texts'

const Cover = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const medium = 950;
  return (
    <CoverWrapper>
          {/* <NavbarSection>
      <NavbarContainer className={!isOpen && 'isClosed'}> */}
        {/* {width >= medium ? (
          <Tabs mode={'large'} />
        ) : (
          <>
            <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
            <Menu open={isOpen} />
          </>
        )} */}
      {/* </NavbarContainer>
    </NavbarSection> */}

      {width >= medium ? (
        <>
         <Tabs mode={'large'} />
        <Image src={picture}></Image>
        </>
      ) : (
        <>
           <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
            <Menu open={isOpen} />
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
