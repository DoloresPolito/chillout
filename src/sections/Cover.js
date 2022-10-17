import React from "react";
import styled from "styled-components";
import picture from "../assets/casamientotoia-min/portada.jpeg";

const Cover = () => {
  return (
    <CoverWrapper>
      <img src={picture} style={{ height: "100%", width: "100%" }}></img>
    </CoverWrapper>
  );
};

const CoverWrapper = styled.section`
  heigth: 100vh;
  background: black;
  margin-top:15px;
`;
export default Cover;
