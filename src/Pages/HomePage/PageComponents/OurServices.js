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
import header from "../../../Assets/Images/HomePageImages/ourServicesHeader.png";

const OurServices = () => {
  return (
    <Wrapper className="container">
      <div className="section_center">
        <div className="section_header">
          <img src={header} alt="heading" className="heading" />
        </div>
        <div className="features">
          <img src={serviceImageOne} alt="faeture" className="feature" />
          <img src={serviceImageTwo} alt="faeture" className="feature" />
          <img src={serviceImageThree} alt="faeture" className="feature" />
        </div>

        <div className="services">
          <img src={serviceImageFour} alt="service" className="service" />
          <img src={serviceImageFive} alt="service" className="service" />
        </div>

        <div className="website_template">
          <img src={websiteTemplate} alt="service" className="service" />
        </div>

        <div className="faq_section">
          <div className="faq_image">
            <img src={faqImageOne} alt="service" className="service" />
          </div>
          <div className="faq">
            <img src={faqImageTwo} alt="service" className="service" />
            <img src={faqImageThree} alt="service" className="service" />
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
    gap: 1.5rem;
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

  .features {
    display: flex;
    justify-content: space-between;
  }

  .feature {
    height: 575px;
    width: 300px;
  }
  .faq_section {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .faq {
    display: flex;
    justify-content: space-between;
  }

  .faq img {
    width: 500px;
    height: 168px;
  }
  .services {
    display: flex;
    flex-direction: column;
    gap: var(--gap-small);
  }
`;
export default OurServices;
