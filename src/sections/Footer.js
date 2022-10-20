import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Footer = () => {

  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])
  const medium = 600
  return (
<>
    {width >= medium ? (
      <InfoWrapper>
      <Cpyrigth >© 2022 | CHILLOUT CARPAS</Cpyrigth>
      <a href="mailto:dolores.polito@gmail.com">
        <Icon>
          <i className="bi bi-envelope"></i>
        </Icon>
      </a>
      <a href="https://www.instagram.com/carpachillout" target="_blank">
        <Icon>
          <i className="bi bi-instagram"></i>
        </Icon>
      </a>
    
    </InfoWrapper>
    ) : (
      <>
            <InfoWrapperColumn>
      <Cpyrigth style={{marginLeft:"100px"}}>© 2022 | CHILLOUT CARPAS</Cpyrigth>
      <a href="mailto:dolores.polito@gmail.com">
        <Icon >
          <i className="bi bi-envelope"></i>
        </Icon>
      </a>
      <a href="https://www.instagram.com/carpachillout" target="_blank">
        <Icon>
          <i className="bi bi-instagram"></i>
        </Icon>
      </a>
    
    </InfoWrapperColumn>
      </>
    )}
   </>
  );
};

const Icon = styled.a`
  color: grey;
  font-size: 1.2em;
  padding-left: 20px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

const Cpyrigth = styled.p`
  font-size: 1em;
  text-align: center;
  color: grey;
  padding-right: 90px;
`;

const InfoWrapper = styled.section`
  font-weight: 300;
  padding-top: 15em;
  padding-bottom: 3em;
  background: #d6d0cb;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    font-size: 10px !important;
  }
`;

const InfoWrapperColumn = styled.section`
  font-weight: 300;
  padding-top: 10em;
  padding-bottom: 5em;
  background: #d6d0cb;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;

`;

export default Footer;
