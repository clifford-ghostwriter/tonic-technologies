import React from "react";
import styled from "styled-components";
import serviceImageOne from "../../../Assets/Images/HomePageImages/serviceImageOne.png";
import serviceImageTwo from "../../../Assets/Images/HomePageImages/serviceImageTwo.png";
import serviceImageThree from "../../../Assets/Images/HomePageImages/serviceImageThree.png";
import serviceImageFour from "../../../Assets/Images/HomePageImages/serviceImageFour.png";
import serviceImageFive from "../../../Assets/Images/HomePageImages/serviceImageFive.png";
import websiteTemplate from "../../../Assets/Images/HomePageImages/websiteTemplateImage.png";
import faqImageOne from "../../../Assets/Images/HomePageImages/faqImageOne.png";
import faqImageTwo from "../../../Assets/Images/HomePageImages/faqImageTwo.png";
import faqImageThree from "../../../Assets/Images/HomePageImages/faqImageThree.png";

const OurServices = () => {
  return (
    <Wrapper className="container">
      <div className="section_center">
        <div className="section_header">
          <h3 className="heading"> our services</h3>
          <p className="sub_heading">
            Handshake infographic mass market crowfunding iteration
          </p>
        </div>
        <div className="features">
          <img src={serviceImageOne} alt="" className="feature" />
          <img src={serviceImageTwo} alt="" className="feature" />
          <img src={serviceImageThree} alt="" className="feature" />
        </div>

        <div className="srvices">
          <img src={serviceImageFour} alt="" className="service" />
          <img src={serviceImageFive} alt="" className="service" />
        </div>

        <div className="website_template">
          <img src={websiteTemplate} alt="" className="service" />
        </div>

        <div className="faq_section">
          <div className="faq_image">
            <img src={faqImageOne} alt="" className="service" />
          </div>
          <div className="faq">
            <img src={faqImageTwo} alt="" className="service" />
            <img src={faqImageThree} alt="" className="service" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: 1px solid red; */
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

  .features {
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-between;
    /* gap: 16px; */
  }

  .feature {
    height: 250px;
    width: 150px;
    /* border: 1px solid red; */
    /* display: none; */
    /* object-fit: contain; */
  }
  .faq_section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .faq {
    display: flex;
    justify-content: space-between;
  }

  .faq img {
    width: 200px;
  }
`;
export default OurServices;
