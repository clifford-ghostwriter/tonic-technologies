import React from "react";
import styled from "styled-components";
import blogImage from "../../../Assets/Images/HomePageImages/blogImage.png";
const OurBlog = () => {
  return (
    <Wrapper className="container">
      <div className="section_center">
        <div className="section_header">
          <h3 className="heading"> Our Blog</h3>
          <p className="sub_heading">
            Value proposition accelerator product management venture
          </p>
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
    gap: 40px;
  }

  .section_header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;
    align-items: center;
  }

  .heading {
    font-size: 12px;
  }

  .sub_heading {
    width: 300px;
  }

  .blog_content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }

  .cta_btn {
    border: 1px solid #0a2640;
    border-radius: 56px;
    width: 150px;
    /* height: 60px; */
  }
`;
export default OurBlog;
