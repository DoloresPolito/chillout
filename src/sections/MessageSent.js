import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MessageSent = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate("/");
    }
  return (
    <Container>
      <Text>Mensage enviado! Muchas gracias!</Text>
      <div>
        <Button onClick={handleBack}>VOLVER</Button>
      </div>
    </Container>
  );
};

const Button = styled.button`
height:100px:
width:200px;
padding:10px 20px;
background-color:transparent;
color:white;
border: 2px solid white;



`;
const Text = styled.p`
  background: trasparent;
  color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "GTWalsheimPro";
  font-style: normal;
  font-weight: 400;
  line-height: 139px;
  letter-spacing: 1.71671px;
  position: relative;
  font-size: 40px;
`;

const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d6d0cb;
`;

export default MessageSent;
