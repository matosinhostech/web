import React, { useState } from "react";
import { Link } from "gatsby";
import Navigation from "shared/components/navigation";
import Subscribe from "shared/components/subscribe";
import { Waypoint } from "react-waypoint";
import arrowRightBlack from "assets/images/arrow-right-black.svg";
import arrowRightWhite from "assets/images/arrow-right-white.svg";
import Loadable from "react-loadable";
import ReactPlayer from "react-player/vimeo";
import Event from "./event";
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
          <div className="introFull">
            <div className="intro">
              <div className="top">
                a tech <span className="justBorder">community</span> for people,
                projects and companies
              </div>
              <div className="bottom">
                <img src={arrowRightWhite} className="homeArrowRight" />
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
          {/* <div className="upcomingEventFull">
            <div className="upcomingEvent">
              <div className="upcomingEventBanner">
                <ReactPlayer
                  url="https://vimeo.com/720184787"
                  controls={true}
                  config={{
                    vimeo: {
                      playerOptions: {
                        playsinline: "true",
                      },
                    },
                  }}
                />
                <div className="upcomingEventDate">last event</div>
              </div>
              <div className="upcomingEventAuthorDate">
                <div className="upcomingEventAuthor">
                  <a
                    href="https://www.linkedin.com/in/tiago-m-fernandes/"
                    target="_blank"
                  >
                    Tiago Fernandes
                  </a>
                  <span> / </span>
                  <a
                    href="https://www.linkedin.com/in/mparente/"
                    target="_blank"
                  >
                    Manuel Parente
                  </a>
                </div>
                <div className="upcomingEventHour">
                  <span>7:00 pm GMT</span>
                </div> 
              </div>
              <div className="upcomingEventName">
                Compensation as a Service & Maritime Robots
              </div>
              <div className="upcomingEventClaim">
                <Link to="/videos">
                  <span className="claimMessage">watch the videos</span>
                </Link>
                <Link to="/videos">
                  <img src={arrowRightBlack} className="claimArrowRight" />
                </Link>
              </div>
            </div>
            <div className="filler" />
            <div className="onlyDesktop">
              <Waypoint
                onEnter={() => setNavigationStyle("homePage")}
                onLeave={() => setNavigationStyle("homePageAlt")}
              />
            </div>
          </div> */}

          {/* <div className="bottomHomePlaceholder">
            <Subscribe />
          </div> */}
          <CookieBanner />
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
