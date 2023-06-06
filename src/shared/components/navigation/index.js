import React, { useCallback, useEffect, useState } from "react";
import { Link } from "gatsby";
import Socials from "shared/components/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import whiteLogo from "assets/images/logo-white.svg";
import darkRedLogo from "assets/images/logo-dark-red.svg";

import "./styles.scss";

const windowGlobal = typeof window !== "undefined" && window;

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
  RED: "red",
};

const Links = (path) => {
  const handleNavigate = () => (document.body.style.overflow = "");

  return (
    <>
      {/* <Link onClick={handleNavigate} to="/event">Next Event</Link> */}
      {/* <Link onClick={handleNavigate} to="/event">Event</Link> */}
      {/* <a href="https://www.eventbrite.com/e/event11-medical-ai-performance-culture-tickets-592568778167">Next Event</a> */}
      {/* <Link onClick={handleNavigate} to="/partners">Partners</Link> */}
      {/* <Link onClick={handleNavigate} to="/videos">Videos</Link> */}
      
      <Link onClick={handleNavigate} to="/manifesto">
        Manifesto
      </Link>
      <a href="https://vimeo.com/matosinhostech">
        Videos
      </a>
      <a href="https://vimeo.com/showcase/10220120">
        smallBytes
      </a>
      <a href="https://forms.gle/6TTAkcffPqZhGGkN9">
        Call for speakers!
      </a>
    </>
  );
};

// TODO: remove this when theme is set via context
const voidFunc = () => "";

const Navigation = ({ path, page, theme = "", setTheme = voidFunc }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [width, setWidth] = useState(windowGlobal && windowGlobal.innerWidth);

  function handleWindowSizeChange() {
    if (windowGlobal) {
      setWidth(windowGlobal.innerWidth);

      if (windowGlobal.innerWidth >= 1100) {
        window.onscroll = () => undefined;
      } else {
        setTheme(THEMES.LIGHT);
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
        if (
          prevScrollpos < 100 ||
          prevScrollpos > currentScrollPos ||
          currentScrollPos === 0
        ) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
      };
    }
  }, [path, width]);

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
        : isMobile
        ? darkRedLogo
        : theme === "light"
        ? darkRedLogo
        : whiteLogo
      : page === "homePageAlt"
      ? isMobile
        ? whiteLogo
        : darkRedLogo
      : whiteLogo;

  return (
    <>
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
                email="mailto:hello@matosinhos.tech"
                instagram="https://www.instagram.com/matosinhos.tech/"
                linkedin="https://www.linkedin.com/company/matosinhos-tech/"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="desktop">
        <div className={`nav-socials ${page}`}>
          <Socials
            slack="https://join.slack.com/t/matosinhostech/shared_invite/zt-mo49t1jm-QJE6skfu7Td~0yEO868HOg"
            email="mailto:hello@matosinhos.tech"
            instagram="https://www.instagram.com/matosinhos.tech/"
            linkedin="https://www.linkedin.com/company/matosinhos-tech/"
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;
