import React from "react";
import styled from "styled-components";

const Tabs = ({ mode }) => {
  return (
    <TabsBox mode={mode}>
      <LinkL>COMPLEMENTOS</LinkL>
      <LinkL>RESERVAS</LinkL>
      <LinkL>GALERIA</LinkL>
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

  @media only screen and (max-width: 700px) {
    font-size: 15px;
    line-height: 28px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 14px;
    line-height: 32px;
  }
`

const TabsBox = styled.div`
  display: ${(props) => (props.mode == "large" ? "flex" : "block")};
  align-items: center;
  text-align: center;

  a {
    padding: ${(props) => (props.mode == "large" ? "0 20px" : "20px 0")};
    display: flex;
    align-items: center;
    img {
      width: 35px;
      padding: 0 5px;
    }
  }
`;

export default Tabs;
