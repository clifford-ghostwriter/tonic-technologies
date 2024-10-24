import React from "react";
import styled from "styled-components";
import blogImage from "../../../Assets/Images/HomePageImages/blogImage.png";
import header from "../../../Assets/Images/HomePageImages/blogHeader.png";
const OurBlog = () => {
  return (
    <Wrapper className="container">
      <div className="section_center">
        <div className="section_header">
          <img src={header} alt="" className="heading" />
        </div>

        <div className="blog_content">
          <img src={blogImage} alt="" className="blog_img" />
          <button className="btn cta_btn">Learn more</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 3rem;

  .section_center {
    display: flex;
    flex-direction: column;
    gap: var(--gap-large);
  }

  .section_header {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
    text-align: center;
    align-items: center;
  }

  .heading {
    width: 842px;
    height: 184px;
  }

  .sub_heading {
    width: 300px;
  }

  .blog_content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--gap-medium);
    align-items: center;
  }

  .cta_btn {
    border: 1px solid #0a2640;
    border-radius: 56px;
    width: 150px;
  }
`;
export default OurBlog;
