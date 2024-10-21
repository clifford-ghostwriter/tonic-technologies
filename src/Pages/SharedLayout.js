import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer, Nav } from "../SharedComponents";

const SharedLayout = () => {
  return (
    <Wrapper>
      <Nav />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default SharedLayout;
