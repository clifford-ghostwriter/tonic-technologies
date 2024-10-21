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

        <div className="services">
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
  padding-top: var(--padding-large);

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
    font-size: 12px;
  }

  .sub_heading {
    width: 300px;
  }

  .features {
    display: flex;
    justify-content: space-between;
  }

  .feature {
    height: 250px;
    width: 150px;
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
  .services {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
  }
`;
export default OurServices;
