
import React from "react";
import styled from "styled-components";
import picture from "../assets/portada/Foto-611-min-vertical2.jpeg";

const VerticalCover = () => {
    return(<>

        <Image src={picture} alt="casamiento" style={{width:'100%'}} />
    </>)
}


const Image = styled.img`
padding-top:70px;
  height: 100%;
  width: 100%;
  object-fit: cover;

`;

export default VerticalCover;