import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <Link
        to="complements"
        spy={true}
        smooth={false}
        offset={-47}
        duration={800}
      >
        <LinkL>COMPLEMENTOS</LinkL>
      </Link>
      <Link to="form" spy={true} smooth={false} offset={150} duration={800}>
        <LinkL>RESERVAS</LinkL>
      </Link>
      <Link to="gallery" spy={true} smooth={false} offset={-47} duration={800}>
        <LinkL>GALERIA</LinkL>
      </Link>
    </TabsBox>
  );
};

const LinkL = styled.a`
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 28px;
  color: #fcfcfc;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: grey;
  }

  @media only screen and (max-width: 700px) {
    font-size: 15px;
    line-height: 28px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 32px;
  }
`;

const TabsBox = styled.div`
  display: ${(props) => (props.mode === "large" ? "flex" : "block")};
  align-items: center;
  text-align: center;

  a {
    padding: ${(props) => (props.mode === "large" ? "0 15px" : "15px 0")};
    display: flex;
    align-items: center;
    font-size: 13px;
    img {
      width: 35px;
      padding: 0 5px;
    }
  }
`;

export default Tabs;
