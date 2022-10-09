import React, { useCallback, useEffect, useState } from "react";
import Navigation from "shared/components/navigation";
import { Waypoint } from "react-waypoint";
import arrowDownLightSlim from "assets/images/arrow-down-light-slim.svg";
import arrowDownDarkSlim from "assets/images/arrow-down-dark-slim.svg";
import Loadable from "react-loadable";
import { Link } from "gatsby";
import useInterval from "shared/hooks/useInterval";
import "./styles.scss";

const CookieBanner = Loadable({
  loader: () => import("../../shared/components/cookie-banner"),
  loading: () => null,
});

const windowGlobal = typeof window !== "undefined" && window;

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
  RED: "red",
};

const getCountdownValues = (date) => {
  const now = new Date().getTime();
  const timeleft = date - now;

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

const HomeLayout = ({ path }) => {
  //TODO: change theme by context...
  const [theme, setTheme] = useState(THEMES.DARK);
  const changeTheme = useCallback((t) => setTheme(t), [theme]);
  // const [countdownValues, setCountdownValues] = useState({});
  // const countDownDate = new Date("Oct 09, 2022 12:00:00").getTime();

  // TODO: remove this when event page is ready
  const [width, setWidth] = useState(windowGlobal && windowGlobal.innerWidth);

  function handleWindowSizeChange() {
    if (windowGlobal) {
      setWidth(windowGlobal.innerWidth);
      if (windowGlobal.innerWidth >= 1100) {
        window.onscroll = () => undefined;
      }
    }
  }

  // useInterval(() => {
  //   setCountdownValues(getCountdownValues(countDownDate));
  // }, 1000);

  useEffect(() => {
    if (windowGlobal) {
      windowGlobal.addEventListener("resize", handleWindowSizeChange);
      return () => {
        windowGlobal.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isMobile = width <= 1100;

  return (
    <main className="container">
      <div className={`home-main ${theme}`}>
        <Navigation
          path={path}
          // TODO: Make themes standard in nav component
          page={theme === THEMES.LIGHT ? "homePageAlt" : "homePage"}
        />
        <div className="home-full" id="scrollable">
          <div className={`intro-full ${theme}`}>
            <div className="intro">
              <div className="top">
                a tech <span className={`outline ${theme}`}>community</span> for
                people, projects and companies
              </div>
              <div className="bottom">
                <Link className="homeArrowLink" to="/event">
                  <img
                    src={
                      theme === THEMES.DARK
                        ? arrowDownLightSlim
                        : theme === THEMES.RED
                        ? arrowDownLightSlim
                        : arrowDownDarkSlim
                    }
                    className="homeArrowDown"
                  />
                </Link>
                <div className="serving">
                  Serving a community of engineers, students and tech
                  professionals with insights from the industry's leading
                  experts.
                </div>
              </div>
            </div>
            <div className="hero" />
          </div>
          <Link to="/event">
            <div className="countdown" id="countdown">
              <div className="date-container">
                <div className="date-month">OUT</div>
                <div className="date-day">09</div>
                <div className="date-year">2022</div>
              </div>
              <div className="counter-container">
                <div className="counter-date">
                  <div className="counter-message">
                    Welcome to the <span className="highlight"> Fish Market!</span>
                  </div>
                  {/* <div className="counter-boxes">
                    <div className="counter-box">
                      <div className="counter-value">
                        {countdownValues.days}
                      </div>
                      <div className="counter-label">DAYS</div>
                    </div>
                    <div className="counter-box">
                      <div className="counter-value">
                        {countdownValues.hours}
                      </div>
                      <div className="counter-label">HOURS</div>
                    </div>
                    <div className="counter-box">
                      <div className="counter-value">
                        {countdownValues.minutes}
                      </div>
                      <div className="counter-label">MINUTES</div>
                    </div>
                    <div className="counter-box">
                      <div className="counter-value">
                        {countdownValues.seconds}
                      </div>
                      <div className="counter-label">SECONDS</div>
                    </div>
                  </div> */}
                </div>
                {/* <div className="counter-cta">
                <button>
                  <Link to="/event">Claim your ticket</Link>
                </button>
              </div> */}
              </div>
            </div>
          </Link>
          {/* <Event setTheme={changeTheme} theme={theme} /> */}
          <CookieBanner />
        </div>
      </div>
      {isMobile && <Waypoint onEnter={() => setTheme(THEMES.DARK)} />}
    </main>
  );
};

export default HomeLayout;
