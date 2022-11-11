import React from "react";
import styled from "styled-components";

const Card = ({ mode, custom, children, ...rest }) => {
  return (

      <CardContainer mode={mode} custom={custom}>
        {children}
      </CardContainer>

  );
};

const CardContainer = styled.div`
  border: #f6f4f3;
  background:"#f6f4f3"
  border-radius: 8px;
  height: 400px;
  width: 598px;
  margin-top: 50px;


  @media only screen and (max-width: 1200px) {
    width: 480px;
    heigth: 450px;
  }

  @media only screen and (max-width: 1130px) {
    width: 430px;
    heigth: 420px;
  }

  @media only screen and (max-width: 1000px) {
    width: 400px;
    heigth: 380px;
  }

  @media only screen and (max-width: 900px) {
    width: 550px;
    heigth: 380px;
  }

  @media only screen and (max-width: 600px) {
    width: 450px;
    heigth: 280px;
  }

  @media only screen and (max-width: 500px) {
    width: 450px;
    heigth: 230px;
  }



  ${(props) =>
    props.custom === true &&
    "div {text-align: center;}; display: flex; align-items: flex-start; flex-direction: column; justify-content: space-between; img {text-align: center; margin: auto; margin-bottom: 40px;}; p { margin-bottom: 70px; text-align: center;} h5 {text-align: center}"} @media only screen and (max-width: 700px) {
    margin: 0;
    padding: 15px;
    height: auto;
  }
  color: white;
  z-index: 1;
`;

export default Card;
