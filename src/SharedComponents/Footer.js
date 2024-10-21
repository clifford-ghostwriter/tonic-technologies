import React from "react";
import styled from "styled-components";
import footerImage from "../Assets/Images/SharedImages/footerImage.png";

const Footer = () => {
  return (
    <Wrapper className="container_fluid">
      <div className="footer_center ">
        <img src={footerImage} alt="" className="footer_image" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding-top: 3rem;
`;
export default Footer;
