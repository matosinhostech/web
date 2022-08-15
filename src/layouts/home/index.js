import React, { useCallback, useEffect, useState } from "react";
import Navigation from "shared/components/navigation";
import { Waypoint } from "react-waypoint";
import arrowDownLightSlim from "assets/images/arrow-down-light-slim.svg";
import arrowDownDarkSlim from "assets/images/arrow-down-dark-slim.svg";
import Loadable from "react-loadable";
import Event from "./event";
import scrollTo from "gatsby-plugin-smoothscroll";
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

const HomeLayout = ({ path }) => {
  //TODO: change theme by context...
  const [theme, setTheme] = useState(THEMES.DARK);
  const changeTheme = useCallback((t) => setTheme(t), [theme]);

  // TODO: remove this when event page is ready
  const [width, setWidth] = useState(windowGlobal && windowGlobal.innerWidth);

  function handleWindowSizeChange() {
    if (windowGlobal) {
      setWidth(windowGlobal.innerWidth);
      if (windowGlobal.innerWidth >= 1100) {
        setTheme(THEMES.LIGHT);
        window.onscroll = () => undefined;
      } else {
        setTheme(THEMES.DARK);
      }
    }
  }

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
                <img
                  src={
                    theme === THEMES.DARK
                      ? arrowDownLightSlim
                      : theme === THEMES.RED
                      ? arrowDownLightSlim
                      : arrowDownDarkSlim
                  }
                  className="homeArrowDown"
                  onClick={() =>
                    scrollTo(isMobile ? "#call-for-papers" : "#event")
                  }
                />
                <div className="serving">
                  Serving a community of engineers, students and tech
                  professionals with insights from the industry's leading
                  experts.
                </div>
              </div>
            </div>
            <div className="hero" />
            <div className="onlyDesktop">
              <Waypoint
                onEnter={() => setTheme(THEMES.DARK)}
                onLeave={() => setTheme(THEMES.LIGHT)}
              />
            </div>
          </div>
          <Event setTheme={changeTheme} theme={theme} />
          <CookieBanner />
        </div>
      </div>
      {isMobile && <Waypoint onEnter={() => setTheme(THEMES.DARK)} /> }
    </main>
  );
};

export default HomeLayout;
