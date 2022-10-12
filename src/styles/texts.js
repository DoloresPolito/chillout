import styled from 'styled-components'

export const BodyL = styled.p`
  font-family: 'GTWalsheimPro';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #fcfcfc;
  @media only screen and (max-width: 700px) {
    font-size: 17px;
    line-height: 28px;
  }
  @media only screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 32px;
  }
`

export const BodyM = styled.p`
  font-family: 'GTWalsheimPro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #fcfcfc;

  @media only screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 32px;
  }
`

export const BodyS = styled.p`
  font-family: 'GTWalsheimPro';
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
`

export const LinkS = styled.a`
  font-family: 'GTWalsheimPro';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  letter-spacing: 0.75px;
  color: #fcfcfc;
  cursor: pointer;
  text-decoration: none;

  @media only screen and (min-width: 1440px) {
    font-size: 15px;
    line-height: 24px;
  }
`
export const LinkL = styled.a`
  font-family: 'Times New Roman';
  font-weight: 400;
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
`

export const Button = styled.a`
  display: inline-block;
  width: auto;
  padding: 22px 30px;
  background: #8505b1;
  border-radius: 4px;
  font-family: 'GTWalsheimProBold';
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: #ffffff;
  &:hover {
    background: red;
  }
`
export const BoldL = styled.p`
  font-family: 'GTWalsheimProBold';
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: #fcfcfc;
`

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

`
