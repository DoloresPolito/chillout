import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <Section>
          <Title>CONTACTO</Title>
          <Text>info@carpaschillout.com</Text>
          <Text>+54 3446 584076</Text>
        </Section>
        <Section>
          <Title>SEGUINOS</Title>
          <Icon><i className="bi bi-instagram"></i></Icon>
          <Icon><i className="bi bi-facebook"></i></Icon>
        </Section>
      </InfoWrapper>


        <Cpyrigth>© 2022 | CHILLOUT CARPAS</Cpyrigth>

    </Wrapper>
  );
};

const Icon = styled.a`
color:white;
font-size: 1em;
padding-left: 20px;
`

const Text = styled.p`
  color: white;
  font-size: 0.9em;
`;

const Title = styled.h4`
  font-size: 1.2em;
  font-weight: 400;
  color: #cda044;
  text-align: center;
  margin-bottom: 40px
`;

const Cpyrigth = styled.p`
  font-size: 1em;
  text-align: center;
  color: white;
  margin-top:70px;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: black;
  padding-top:350px;
`;

const InfoWrapper = styled.section`
  padding-top: 0;
  background: black;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  padding-right: 80px;
`;
export default Footer;
