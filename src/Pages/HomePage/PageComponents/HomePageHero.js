import React from "react";
import styled from "styled-components";
import heroImage from "../../../Assets/Images/HomePageImages/heroImage.png";
import heroLinks from "../../../Assets/Images/HomePageImages/heroLinks.png";

const HomePageHero = () => {
  return (
    <Wrapper className="container-fluid">
      <div className="section_center container">
        <div className="image_container">
          <img src={heroImage} alt="" className="hero_image" />
          <img src={heroLinks} alt="" className="hero_image" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #0a2640;
  color: white;
  padding-top: var(--padding-large);

  .section_center {
    padding: 0;
  }
`;
export default HomePageHero;
