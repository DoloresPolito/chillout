import React from 'react'
import styled from 'styled-components'
import Tabs from './Tabs'

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Tabs mode="small"/>
    </StyledMenu>
  )
}

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: transparent ;
  height: 100vh;
  text-align: left;
  padding: 100px 70px 30px 30px;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};



  @media only screen and (max-width: 460px) {
    padding: 80px 40px 30px 30px;

  }
`

export default Menu
