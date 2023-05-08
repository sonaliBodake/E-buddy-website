import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <p><b>E-Buddy</b></p>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 8rem;
 background-color: ${({ theme }) => theme.colors.footer_bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  p{
    color: ${({ theme }) => theme.colors.white};
    font-size: 3.8rem;
    font-weight: 500;
  }

  .logo {
    height: 5rem;
  }
`;
export default Header;
