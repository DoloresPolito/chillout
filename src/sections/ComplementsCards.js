import React from "react";
import styled from "styled-components";
import pisos from "../assets/pisosmin/pisos1-min.jpeg";
import fogonero from "../assets/delfi&facu-min/Baja-269-min.jpg"
import picture from "../assets/casamientotoia-min/Foto-623-min.jpg";
const ComplementsCards = () => {
  return (
    <Wrapper>
        <Title>COMPLEMENTOS</Title>
      <CardWrapper>
        <Card style={{}}>
        <img
            src={picture}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px"
        
            }}
          ></img>
  
        </Card>
        <Card>
        <img
            src={fogonero}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px"
        
            }}
          ></img>
        </Card>
        <Card>
        <img
            src={pisos}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px"
        
            }}
          ></img>
        </Card>
        <Card>
        <img
            src={picture}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "20px"
        
            }}
          ></img>
        </Card>
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: white;
  height: 100%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;

  height: 100%;
`;

const Card = styled.div`
  width: 500px;
  height: 380px;
  margin: 30px;
  border-radius: 20px;

  @media only screen and (max-width: 1250px) {
    width: 700px;
    height: 480px;
  }

  

`;
const Title = styled.h2`
font-size:50px;
color:black;
padding:100px
`;


export default ComplementsCards;
