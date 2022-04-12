import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

function Nav() {
  const [openDrawer, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }

      toggleDrawer(false);
    };

    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  }, []);

  return (
    <Styles.Wrapper>
      <CSSReset />
      <Navbar.Wrapper>
        <Link to="/">
          <Navbar.Logo>LUNA PERFORMANCE</Navbar.Logo>
        </Link>

        <HamburgerButton.Wrapper onClick={() => toggleDrawer(true)}>
          <HamburgerButton.Lines />
        </HamburgerButton.Wrapper>

        <Navbar.Items ref={drawerRef} openDrawer={openDrawer}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Navbar.Item>ABOUT</Navbar.Item>
          </Link>
          <hr></hr>
          <Link to="/price" style={{ textDecoration: "none" }}>
            <Navbar.Item>PRICE LIST</Navbar.Item>
          </Link>
          <hr></hr>
          <Link to="/shop" style={{ textDecoration: "none" }}>
            <Navbar.Item>SHOP</Navbar.Item>
          </Link>
          <hr></hr>
          <Link to="/faq" style={{ textDecoration: "none" }}>
            <Navbar.Item>FAQ</Navbar.Item>
          </Link>
          <hr></hr>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <Navbar.Item>CONTACT</Navbar.Item>
          </Link>
        </Navbar.Items>
      </Navbar.Wrapper>
    </Styles.Wrapper>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #fbfbff;
    height: 6vh;
  `,
};

const Navbar = {
  Wrapper: styled.nav`
    z-index: 99;
    flex: 1;
    align-self: flex-start;
    padding: 1rem 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0d0106;
    // 40em == 640px
    @media only screen and (max-width: 1024px) {
      position: fixed;
      width: 100vw;
    }
  `,
  Logo: styled.a`
    margin: auto;
    position: relative;
    padding: 0.5rem 1rem;
    font-family: "Permanent Marker", cursive;
    background-color: #fbfbff;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    text-decoration: none;
    font-size: 3rem;
    font-weight: bold;
    @media only screen and (max-width: 1024px) {
      font-size: 2.5rem;
    }
    @media only screen and (max-width: 40em) {
      font-size: 2rem;
    }
  `,

  Items: styled.ul`
    display: flex;
    list-style: none;
    padding-top: 1rem;
    text-align: center;
    color: #fbfbff;
    @media only screen and (max-width: 1024px) {
      position: fixed;
      right: 0;
      top: 5.25vh;
      width: 100%;
      height: auto;
      background-image: linear-gradient(45deg, white, slategray);
      flex-direction: column;
      background-color: white;
      padding: 1rem 2rem;
      transition: 0.2s ease-out;
      transform: ${({ openDrawer }) =>
        openDrawer ? `translateX(0)` : `translateX(100%)`};
    }
    @media only screen and (max-width: 40em) {
      top: 6.1vh;
      height: auto;
    }
  `,
  Item: styled.li`
    padding: 0 3rem;
    cursor: pointer;
    font-size: 2.5rem;
    color: #657ed4;
    font-family: "Permanent Marker", cursive;

    @media only screen and (max-width: 1024px) {
      font-size: 2.25rem;
    }
    @media only screen and (max-width: 40em) {
      font-size: 1.75rem;
    }
  `,
};

const HamburgerButton = {
  Wrapper: styled.button`
    height: 3rem;
    width: 3rem;
    position: relative;
    font-size: 12px;
    display: none;
    @media only screen and (max-width: 1024px) {
      display: block;
    }
    border: none;
    background: #0d0106;
    outline: none;
    cursor: pointer;
    &:after {
      content: "";
      display: block;
      position: absolute;
      height: 150%;
      width: 150%;
      top: -25%;
      left: -25%;
    }
  `,
  Lines: styled.div`
    top: 50%;
    margin-top: -0.125em;
    &,
    &:after,
    &:before {
      /* Create lines */
      height: 5px;
      pointer-events: none;
      display: block;
      content: "";
      width: 100%;
      background-color: #657ed4;
      position: absolute;
    }
    &:after {
      /* Move bottom line below center line */
      top: -0.8rem;
    }
    &:before {
      /* Move top line on top of center line */
      top: 0.8rem;
    }
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;      
  }  
  body {
    font-size: 1.4rem;
    font-family: sans-serif;
  }
`;

export default Nav;
