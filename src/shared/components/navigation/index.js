import React, { useCallback, useEffect, useState } from "react";
import { Link } from "gatsby";
import Socials from "shared/components/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import useInterval from "shared/hooks/useInterval";
import scrollTo from "gatsby-plugin-smoothscroll";

import whiteLogo from "assets/images/logo-white.svg";
import darkRedLogo from "assets/images/logo-dark-red.svg";

import "./styles.scss";

const windowGlobal = typeof window !== "undefined" && window;

const Links = (path) => {
  const handleNavigate = () => (document.body.style.overflow = "");

  return (
    <>
      {/* <Link onClick={handleNavigate} to="/event">Next Event</Link> */}
      <Link onClick={handleNavigate} to="/manifesto">
        Manifesto
      </Link>
      <Link onClick={handleNavigate} to="/partners">
        Partners
      </Link>
      <Link onClick={handleNavigate} to="/videos">
        Videos
      </Link>
    </>
  );
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

const Navigation = ({ path, page = "bluePage" }) => {
  const [countdownValues, setCountdownValues] = useState({});
  const countDownDate = new Date("Oct 09, 2022 12:00:00").getTime();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [width, setWidth] = useState(windowGlobal && windowGlobal.innerWidth);

  function handleWindowSizeChange() {
    if (windowGlobal) {
      setWidth(windowGlobal.innerWidth);
      if (windowGlobal.innerWidth >= 1100) {
        window.onscroll = () => undefined;
      }
    }
  }

  function handleScroll(e) {
    if (windowGlobal) {
      document.getElementById("scrollable").scrollTop += e.deltaY;
    }
  }

  useEffect(() => {
    if (windowGlobal) {
      document
        .getElementById("navbar")
        .addEventListener("wheel", handleScroll, true);
      windowGlobal.addEventListener("resize", handleWindowSizeChange);
      return () => {
        windowGlobal.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  useEffect(() => {
    if (windowGlobal && width <= 1100) {
      let prevScrollpos = window.pageYOffset;
      window.onscroll = function () {
        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }, [path, width]);

  useInterval(() => {
    setCountdownValues(getCountdownValues(countDownDate));
  }, 1000);

  const isMobile = width <= 1100;

  const handleMenuClick = useCallback(() => {
    if (!isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen, setIsDrawerOpen, path]);

  const logo =
    page === "videosPage"
      ? darkRedLogo
      : page === "eventPage"
      ? isDrawerOpen
        ? whiteLogo
        : darkRedLogo
      : page === "homePageAlt"
      ? isMobile
        ? whiteLogo
        : darkRedLogo
      : whiteLogo;

  const showCountdown = isMobile
    ? page === "homePage" || page === "homePageAlt"
    : true;

  return (
    <>
      {showCountdown && (
        <div className="countdown" id="countdown">
          <div className="date-container">
            <div className="date-month">OUT</div>
            <div className="date-day">09</div>
            <div className="date-year">2022</div>
          </div>
          <div className="counter-container">
            <div className="counter-date">
              <div className="counter-message">
                We're getting <span className="highlight"> ready.</span>
              </div>
              <div className="counter-boxes">
                <div className="counter-box">
                  <div className="counter-value">{countdownValues.days}</div>
                  <div className="counter-label">DAYS</div>
                </div>
                <div className="counter-box">
                  <div className="counter-value">{countdownValues.hours}</div>
                  <div className="counter-label">HOURS</div>
                </div>
                <div className="counter-box">
                  <div className="counter-value">{countdownValues.minutes}</div>
                  <div className="counter-label">MINUTES</div>
                </div>
                <div className="counter-box">
                  <div className="counter-value">{countdownValues.seconds}</div>
                  <div className="counter-label">SECONDS</div>
                </div>
              </div>
            </div>
            <div className="counter-cta">
              <button onClick={() => scrollTo("#claim-ticket-anchor")}>
                Claim your ticket
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={`nav ${page}`} id="navbar">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className={`desktop ${page}`}>
          <Links />
        </div>
        <div className="mobile">
          <div
            className={`menu ${isDrawerOpen && "open"} ${page}`}
            onClick={handleMenuClick}
            onKeyDown={handleMenuClick}
            role="button"
            tabIndex="-1"
          >
            {isDrawerOpen ? "✕" : <FontAwesomeIcon icon={faBars} />}
          </div>
          <div
            className={isDrawerOpen ? `drawer open ${page}` : `drawer ${page}`}
          >
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{
                height: "100%",
                width: "50%",
                left: "100vw",
                position: "absolute",
                top: "0",
                zIndex: "-1",
                pointerEvents: "none",
              }}
            >
              <path
                d="M251.41,-48.84 C88.31,109.03 349.60,41.94 202.88,201.80 L0.00,150.00 L0.00,0.00 Z"
                style={{ stroke: "none" }}
                className={`wave ${page}`}
              ></path>
            </svg>
            <Links path={path} />
            <div className={`nav-socials ${isDrawerOpen && "open"} ${page}`}>
              <Socials
                slack="https://join.slack.com/t/matosinhostech/shared_invite/zt-mo49t1jm-QJE6skfu7Td~0yEO868HOg"
                reddit="https://www.reddit.com/r/matosinhos"
                email="mailto:hello@matosinhos.tech"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop">
        <div className={`nav-socials ${page}`}>
          <Socials
            slack="https://join.slack.com/t/matosinhostech/shared_invite/zt-mo49t1jm-QJE6skfu7Td~0yEO868HOg"
            reddit="https://www.reddit.com/r/matosinhos"
            email="mailto:hello@matosinhos.tech"
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
