import React, { useCallback, useEffect, useState } from "react"
import { Link } from "gatsby"
import Socials from "shared/components/socials"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import whiteLogo from "assets/images/logo-white.svg"
import darkRedLogo from "assets/images/logo-dark-red.svg"

import "./styles.scss"

const windowGlobal = typeof window !== 'undefined' && window;

const Links = (path) => {
  const handleNavigate = () => document.body.style.overflow = "";

  return (
    <>
      {/* <Link onClick={handleNavigate} to="/event">Next Event</Link> */}
      <Link onClick={handleNavigate} to="/manifesto">Manifesto</Link>
      <Link onClick={handleNavigate} to="/partners">Partners</Link>
      <Link onClick={handleNavigate} to="/videos">Videos</Link>
    </>
  )
}

const Navigation = ({ path, page = 'bluePage' }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [width, setWidth] = useState(windowGlobal && windowGlobal.innerWidth);

  function handleWindowSizeChange() {
    if (windowGlobal) {
      setWidth(windowGlobal.innerWidth);
    }
  }

  useEffect(() => {
    if (windowGlobal) {
      windowGlobal.addEventListener('resize', handleWindowSizeChange);
      return () => {
        windowGlobal.removeEventListener('resize', handleWindowSizeChange);
      }
    }
  }, []);

  const isMobile = width <= 1025;

  const handleMenuClick = useCallback(() => {
    if (!isDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    setIsDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen, setIsDrawerOpen]);

  const logo = page === 'videosPage' || page === 'eventPage' ?
    (isDrawerOpen ? whiteLogo : darkRedLogo) :
    page === 'homePageAlt' ?
      (isMobile ? whiteLogo : darkRedLogo) :
      whiteLogo;

  return (
    <div className={`nav ${page}`}>
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div className={`desktop ${page}`}>
        <Links />
        <div className={`nav-socials ${page}`}>
          <Socials
            slack="https://join.slack.com/t/matosinhostech/shared_invite/zt-mo49t1jm-QJE6skfu7Td~0yEO868HOg"
            reddit="https://www.reddit.com/r/matosinhos"
            email="mailto:hello@matosinhos.tech" />
        </div>
      </div>
      <div className="mobile">
        <div
          className={`menu ${isDrawerOpen && 'open'} ${page}`}
          onClick={handleMenuClick}
          onKeyDown={handleMenuClick}
          role="button"
          tabIndex="-1">
          {isDrawerOpen ? '✕' : <FontAwesomeIcon icon={faBars} />}
        </div>
        <div className={isDrawerOpen ? `drawer open ${page}` : `drawer ${page}`}>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{
            height: '100%',
            width: '50%',
            left: '100vw',
            position: 'absolute',
            top: '0',
            zIndex: '-1',
            pointerEvents: 'none',
          }}><path d="M251.41,-48.84 C88.31,109.03 349.60,41.94 202.88,201.80 L0.00,150.00 L0.00,0.00 Z" style={{ stroke: "none" }} className={`wave ${page}`}></path></svg>
          <Links path={path} />
          <div className={`nav-socials ${isDrawerOpen && 'open'} ${page}`}>
            <Socials
              slack="https://join.slack.com/t/matosinhostech/shared_invite/zt-mo49t1jm-QJE6skfu7Td~0yEO868HOg"
              reddit="https://www.reddit.com/r/matosinhos"
              email="mailto:hello@matosinhos.tech" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
