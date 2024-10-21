import React from "react";
import styled from "styled-components";
import navImage from "../Assets/Images/SharedImages/navImage.png";

const Nav = () => {
  return (
    <Wrapper className="container-fluid" $navbcg={navImage}>
      <div className="nav_center container"></div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  /* border: 1px solid red; */
  padding-block: 1rem;
  background-color: #0a2640;

  .nav_center {
    background: url(${(p) => p.$navbcg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 16px;
    /* border: 1px solid red; */
  }
`;
export default Nav;
