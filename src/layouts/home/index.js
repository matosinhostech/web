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
            <div className="hero">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6P7L-tSUtgXsEpWzGiF_QIcCvxtnPfRtHl2i64JqAhVudhQ/viewform"
                target="_blank"
                className="mailto"
              >
                <div className="call-out-container">
                  <div className="highlight-gradient-text-dark">
                    call for papers
                  </div>
                  <div className="deadline">
                    talk submission deadline:{" "}
                    <span className="deadline-date">august 31, 2022</span>
                  </div>
                </div>
              </a>
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=matosinhos.tech%20🏖%20event%209.0&dates=20221009/20221009&details=On%20the%209th%20of%20October,%20in%20the%20Matosinhos%20fish%20market,%20we'll%20have%20a%20full%20day%20event%20of%20talks,%20network%20with%20our%20community%20and%20showcasing%20the%20companies%20around%20us%20that%20are%20growing%20our%20digital%20landscape.%20%20<br/><br/>%20Come%20join%20our%20party%20and%20share%20your%20knowledge.&location=Event%20Lochttps://goo.gl/maps/u3PTW5Vkz3h6T3uj9ation&trp=true"
                target="_blank"
                className="google-calendar"
              >
                <div className="save-the-date-container">
                  <div className="highlight-gradient-text day">9</div>
                  <div className="highlight-gradient-text month">OCT</div>
                  <div className="highlight-gradient-text year">2022</div>
                  <div className="venue">
                    <div className="">MERCADO</div>
                    <div className="">MUNICIPAL</div>
                    <div className="">MATOSINHOS</div>
                  </div>
                </div>
              </a>
            </div>
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
