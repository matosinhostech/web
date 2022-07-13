import React, { useState } from "react";
import { Link } from 'gatsby'
import Navigation from "shared/components/navigation";
import Subscribe from "shared/components/subscribe";
import { Waypoint } from 'react-waypoint';
import arrowRightBlack from 'assets/images/arrow-right-black.svg';
import arrowRightWhite from 'assets/images/arrow-right-white.svg';
import defaultBanner from 'assets/images/events/placeholder.jpg';
import Loadable from 'react-loadable';
import "./styles.scss"

const CookieBanner = Loadable({
  loader: () => import('../../shared/components/cookie-banner'),
  loading: () => null,
});

const HomeLayout = ({ path }) => {
  const [navigationStyle, setNavigationStyle] = useState('homePage');

  return (
    <main className="container">
      <div className="home-main">
        <Navigation path={path} page={navigationStyle} />
        <div className="home-full">
          <div className="introFull">
            <div className="intro">
              <div className="top">
                a tech <span className="justBorder">community</span> for people, projects and companies
              </div>
              <div className="bottom">
                <img src={arrowRightWhite} className="homeArrowRight" />
                <div className="serving">
                  Serving a <span className="highlight">community</span> of engineers, students and <span className="highlight">tech</span> professionals
                  with insights from the industry's leading experts.
                </div>
              </div>
            </div>
            <div className="hero"></div>
          </div>
          <div className="upcomingEventFull">
            <div className="upcomingEvent">
              <div className="upcomingEventBanner">
                <img src={defaultBanner} />
                <div className="upcomingEventDate">
                  1st June 2022
                </div>
              </div>
              <div className="upcomingEventAuthorDate">
                <div className="upcomingEventAuthor">
                  <a href="https://www.linkedin.com/in/tiago-m-fernandes/" target="_blank">Tiago Fernandes</a>
                  <span> / </span>
                  <a href="https://www.linkedin.com/in/mparente/" target="_blank">Manuel Parente</a>
                </div>
                <div className="upcomingEventHour">
                  <span>7:00 pm GMT</span>
                </div>
              </div>
              <div className="upcomingEventName">
                Compensation as a Service & Maritime Robots
              </div>
              <div className="upcomingEventClaim">
                <Link to="/event"><span className="claimMessage">claim your ticket</span></Link>
                <Link to="/event"><img src={arrowRightBlack} className="claimArrowRight" /></Link>
              </div>
              <Subscribe />
              <div className="bottomHomePlaceholder" />
            </div>
          </div>
          <div className="onlyDesktop">
            <Waypoint
              onEnter={() => setNavigationStyle('homePageAlt')}
              onLeave={() => setNavigationStyle('homePage')}
            />
          </div>
          <CookieBanner />
        </div>
      </div>
    </main>
  )
}

export default HomeLayout
