import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <InfoWrapper>
      <Cpyrigth>© 2022 | CHILLOUT CARPAS</Cpyrigth>

      <Icon>
        <i className="bi bi-envelope"></i>
      </Icon>
      <Icon>
        <i className="bi bi-instagram"></i>
      </Icon>
      <Icon>
        <i className="bi bi-facebook"></i>
      </Icon>
    </InfoWrapper>
  );
};

const Icon = styled.a`
  color: white;
  font-size: 1.2em;
  padding-left: 20px;
`;

const Cpyrigth = styled.p`
  font-size: 1em;
  text-align: center;
  color: white;
  padding-right:90px

`;



const InfoWrapper = styled.section`
  padding-top: 15em;
  padding-bottom: 3em;
  background: black;
  display: flex;
  justify-content: center;
`;

export default Footer;
