import React, { useState } from "react";
import Navigation from "shared/components/navigation";
import { Waypoint } from "react-waypoint";
import arrowDownWhiteSlim from "assets/images/arrow-down-white-slim.svg";
import Loadable from "react-loadable";
import Event from "./event";
import scrollTo from "gatsby-plugin-smoothscroll";
import "./styles.scss";

const CookieBanner = Loadable({
  loader: () => import("../../shared/components/cookie-banner"),
  loading: () => null,
});

const HomeLayout = ({ path }) => {
  const [navigationStyle, setNavigationStyle] = useState("homePage");

  return (
    <main className="container">
      <div className="home-main">
        <Navigation path={path} page={navigationStyle} />
        <div className="home-full" id="scrollable">
          <div className="intro-full">
            <div className="intro">
              <div className="top">
                a tech <span className="justBorder">community</span> for people,
                projects and companies
              </div>
              <div className="bottom">
                <img
                  src={arrowDownWhiteSlim}
                  className="homeArrowDown"
                  onClick={() => scrollTo("#event")}
                />
                <div className="serving">
                  Serving a <span className="highlight">community</span> of
                  engineers, students and{" "}
                  <span className="highlight">tech</span> professionals with
                  insights from the industry's leading experts.
                </div>
              </div>
            </div>
            <div className="hero" />
          </div>
          <div className="onlyDesktop">
            <Waypoint
              onEnter={() => setNavigationStyle("homePage")}
              onLeave={() => setNavigationStyle("homePageAlt")}
            />
          </div>
          <Event />
          <CookieBanner />
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
