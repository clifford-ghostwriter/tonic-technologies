import React from "react";
import styled from "styled-components";
import { HomePageHero, OurServices, OurBlog } from "./PageComponents";

const HomePage = () => {
  return (
    <Wrapper>
      <HomePageHero />
      <OurServices />
      <OurBlog />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default HomePage;
