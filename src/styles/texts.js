import styled from "styled-components";





export const H6 = styled.h6`
  font-family: "GTWalsheimPro";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 28px;
  letter-spacing: 1px;
  margin: 0;
  text-transform: uppercase;
  color: grey;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 630px) {
    font-size: 18px;
  }
`;

export const BodyL = styled.p`
  font-family: "GTWalsheimPro";
  font-style: normal;
  font-weight: 200;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  color: grey;
  font-size: 15px;
  margin-top: 30px;
  @media only screen and (max-width: 1200px) {
    font-size: 13px;
  }

  @media only screen and (max-width: 630px) {
    font-size: 11px;
  }

  @media only screen and (max-width: 350px) {
    font-size: 10px;

  }
`;


export const BodyS = styled.p`
  font-family: "GTWalsheimPro";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0.75px;
  color: #fcfcfc;

  @media only screen and (min-width: 1440px) {
    font-size: 15px;
    line-height: 24px;
  }
`;

export const LinkL = styled.a`
  font-family: "GTWalsheimProBold";
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #fcfcfc;
  cursor: pointer;
  text-decoration: none;

  @media only screen and (max-width: 700px) {
    font-size: 17px;
    line-height: 28px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 32px;
  }
`;




export const Container = styled.div`
  margin: auto;
  max-width: 1140px;
  @media only screen and (min-width: 701px) and (max-width: 1200px) {
    max-width: 90%;
  }
  @media only screen and (min-width: 1900px) {
    margin: auto;
  }
  @media only screen and (max-width: 700px) {
    margin: 0 24px;
    padding 24px 0;
  }

`;
