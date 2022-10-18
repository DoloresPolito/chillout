import React from "react";
import styled from "styled-components";

const Card = ({ mode, custom, children, ...rest }) => {
  return (
    <div>
      <CardContainer mode={mode} custom={custom}>
        {children}
      </CardContainer>
    </div>
  );
};

const CardContainer = styled.div`
  border: #f6f4f3;
  background:"#f6f4f3"
  border-radius: 8px;
  height: 400px;
  width: 598px;

  margin-top: 50px;

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
