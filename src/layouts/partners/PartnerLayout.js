import * as React from "react";
import Navigation from "shared/components/navigation";
import Socials from "shared/components/socials";

import arrowDownWhite from "assets/images/arrow-down-light-slim.svg";

import "./styles.scss";

const PartnerLayout = ({
  name,
  site,
  mission,
  social_facebook,
  social_twitter,
  social_linkedin,
  social_instagram,
  description,
  outcomes,
  logo,
  images,
  slug,
}) => {
  const renderOutcome = (outcome, index) => {
    const [number, ...text] = outcome.split(" ");

    return (
      <div className="outcomes-row" key={`outcome-${index}`}>
        <div className="outcomes-number">{number}</div>
        <div className="outcomes-text">{text.join(" ")}</div>
      </div>
    );
  };

  return (
    <main className="partnerContainer">
      <div className="partnerMain">
        <Navigation path={`/partners/${slug}`} page="partnerPage" />
        <div className="partner-content" id="scrollable">
          <div className="header">
            <div className="header-top"></div>
          </div>
          <div className="partner-name">
            <h1>{name}</h1>
          </div>
          <div className="partner-mission">
            <img src={arrowDownWhite} className="partnerArrowDown" />
            <div> {mission}</div>
          </div>
          <img className="image" src={images[0]} alt="" />
          <div className="outcomes">{outcomes.map(renderOutcome)}</div>
          <img className="image secondImage" src={images[1]} alt="" />
          <div className="partner-description">{description}</div>
          <div className="partner-footer">
            <div>
              <div className="partner-logo">
                <a href={site}>
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="partner-socials">
                <Socials
                  facebook={social_facebook}
                  twitter={social_twitter}
                  linkedin={social_linkedin}
                  instagram={social_instagram}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PartnerLayout;
