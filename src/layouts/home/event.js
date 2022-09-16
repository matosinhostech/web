import React, { useCallback, useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import TicketForm, {
  DEFAULT_OPERATION_DATA,
} from "shared/components/ticket-form";
import { Waypoint } from "react-waypoint";
import scrollTo from "gatsby-plugin-smoothscroll";
import Map from "./map";

// Styles
import "./styles.scss";

// Assets
import whiteLogo from "assets/images/logo-white.png";
import mercado from "assets/images/mercado.png";
import matosinhostech from "assets/images/matosinhostech.png";

import SPEAKERS from "./speakers";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
  RED: "red",
};

const windowGlobal = typeof window !== "undefined" && window;

const INITIAL_EVENT_MENU_STATE = {
  WELCOME: false,
  SPEAKER: false,
  PROGRAM: false,
  SPONSORSHIP: false,
  ABOUT: false,
  TICKET: false,
};

const Event = ({ setTheme, theme }) => {
  const [operation, setOperation] = useState(DEFAULT_OPERATION_DATA);
  const [activeMenu, setActiveMenu] = useState(INITIAL_EVENT_MENU_STATE);
  const [ticketKey, setTicketKey] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const [isBioOpen, setBioOpen] = useState(
    SPEAKERS.reduce((_, index) => ({ ..._, [index]: false }), {})
  );

  const welcomeRef = useRef(null);
  const speakersRef = useRef(null);
  const programRef = useRef(null);
  const sponsorshipsRef = useRef(null);
  const ticketRef = useRef(null);
  const aboutRef = useRef(null);

  const isInViewport = useCallback((element) => {
    if (element) {
      const rect = element.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) / 2
      );
    }
  }, []);

  const handleClaimTicket = useCallback(
    (operation) => {
      setOperation(operation);
    },
    [operation.status]
  );

  const handleBioReadMore = useCallback(
    (index) => setBioOpen({ ...isBioOpen, [index]: !isBioOpen[index] }),
    [isBioOpen]
  );

  const handleScroll = useCallback(() => {
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => setIsScrolling(false), 1000);
    setIsScrolling(true);

    if (isInViewport(welcomeRef.current)) {
      setActiveMenu({ ...INITIAL_EVENT_MENU_STATE, WELCOME: true });
      return;
    } else if (isInViewport(speakersRef.current)) {
      setActiveMenu({ ...INITIAL_EVENT_MENU_STATE, SPEAKERS: true });
      return;
    } else if (isInViewport(programRef.current)) {
      setActiveMenu({ ...INITIAL_EVENT_MENU_STATE, PROGRAM: true });
      return;
    } else if (isInViewport(ticketRef.current)) {
      setActiveMenu({ ...INITIAL_EVENT_MENU_STATE, TICKET: true });
      return;
    } else if (isInViewport(aboutRef.current)) {
      setActiveMenu({ ...INITIAL_EVENT_MENU_STATE, ABOUT: true });
      return;
    }
  }, []);

  const handleWindowSizeChange = useCallback(() => {
    setTicketKey(ticketKey + 1);
  }, []);

  useEffect(() => {
    if (windowGlobal) {
      windowGlobal.addEventListener("resize", handleWindowSizeChange);
      document.addEventListener("scroll", handleScroll, true);
      return () => {
        document.removeEventListener("scroll", handleScroll);
        windowGlobal.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const renderSpeaker = (speaker, index) => {
    return (
      <div className="speaker" key={`speaker-${index}`}>
        <div className="speaker-image">
          <img src={speaker.imgSrc} />
          <div className="speaker-info-overlay">
            <div>
              <div className="speaker-info">
                <div className="speaker-info-label">Job Title</div>
                <div className="speaker-info-value">{speaker.jobTitle}</div>
              </div>
              <div className="speaker-info">
                <div className="speaker-info-label">Company</div>
                <div className="speaker-info-value">
                  <a
                    rel="noreferrer"
                    href={speaker.company_url}
                    target="_blank"
                  >
                    {speaker.company}
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="speaker-info">
                <div className="speaker-info-value tags">
                  {speaker.tags.map((tag, index) => (
                    <div key={`${tag.toLocaleLowerCase().split().join("-")}`}>
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="speaker-name">
          <a
            className="hyperlink"
            rel="noreferrer"
            href={speaker.speaker_url}
            target="_blank"
          >
            {speaker.speaker}
          </a>
        </div>
        <div
          className={`speaker-bio ${
            isBioOpen[index] ? "open-bio" : "closed-bio"
          }`}
        >
          <p>{speaker.bio}</p>
          <div className="read-more" onClick={() => handleBioReadMore(index)}>
            {isBioOpen[index] ? "Read less" : "Read more"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="event-layout-wrapper">
      <div className="event-layout" id="scrollable">
        <div className="event-content">
          <div className="event-menu">
            <div
              className={`event-menu-item ${activeMenu.WELCOME && "active"}`}
              onClick={() => scrollTo("#event")}
            >
              Welcome
            </div>
            <div
              className={`event-menu-item ${activeMenu.SPEAKERS && "active"}`}
              onClick={() => scrollTo("#speakers")}
            >
              Speakers
            </div>
            <div
              className={`event-menu-item ${activeMenu.PROGRAM && "active"}`}
              onClick={() => scrollTo("#schedule")}
            >
              Program
            </div>
            <div
              className={`event-menu-item ${
                activeMenu.SPONSORSHIP && "active"
              }`}
              onClick={() => scrollTo("#sponsorships")}
            >
              Sponsorships
            </div>
            <div
              className={`event-menu-item ${activeMenu.ABOUT && "active"}`}
              onClick={() => scrollTo("#about-us")}
            >
              About
            </div>
          </div>
          <div className="left">
            <div className="event-name" id="event" ref={welcomeRef}>
              <span>Welcome to the </span>
              <span className="highlight-water">Fish Market</span>
            </div>
            <div className="place-and-date">
              <div className="place">
                place: <b>Mercado Municipal de Matosinhos</b>
              </div>
              <div className="date">
                <span>09/10/2022</span>
              </div>
            </div>
            <div className="description">
              <p>
                On the 9th of October, join us for matosinhos.tech biggest event
                ever.
              </p>
              <p>
                We'll have a full day of talks from speakers around the globe
                discussing topics such as open telemetry, anti-money laundering
                tech, reliability, mobile, and the opportunity to meet and greet
                our community in person.
              </p>
              <p>
                Please consider that the event starts at 1:00 PM with a fabulous
                small lunch break, but there are limited spots, so get your
                ticket now!
              </p>
            </div>
            <div className="event-outcomes-wrapper">
              <div className="event-outcomes">
                <div className="event-outcomes-row">
                  <div className="event-outcomes-number">1</div>
                  <div className="event-outcomes-text">day</div>
                </div>
                <div className="event-outcomes-row">
                  <div className="event-outcomes-number">5</div>
                  <div className="event-outcomes-text">speakers</div>
                </div>
                <div className="event-outcomes-row">
                  <div className="event-outcomes-number">+10</div>
                  <div className="event-outcomes-text">companies</div>
                </div>
                <div className="event-outcomes-row">
                  <div className="event-outcomes-number">100</div>
                  <div className="event-outcomes-text">seats</div>
                </div>
              </div>
            </div>
            <div className="event-description">
              On the 9th of October join the matosinhos.tech community{" "}
              <span className="highlight">biggest event</span> ever! See
              international and national technical leaders showcasing their
              knowledge while you{" "}
              <span className="highlight">meet & greet</span>
              {" "}the fantastic companies that are shaping our{" "}
              <span className="highlight">digital landscape.</span>.
            </div>
            <Waypoint onEnter={() => setTheme(THEMES.LIGHT)} />
            <div className="event-image-banner" />
            <div className="title" id="speakers" ref={speakersRef}>
              Speakers
            </div>
            <div className="speaker-details">
              {SPEAKERS.map((speaker, index) => renderSpeaker(speaker, index))}
            </div>
            {/* <div className="title" id="venue">
              Venue
            </div> */}
            {/* <div className="address">
              <div>R. França Júnior, 4450-135 Matosinhos</div>
              <div>Mercado Municipal de Matosinhos</div>
            </div> */}
            <Waypoint onEnter={() => setTheme(THEMES.RED)} />
            <div className="event-description">
              <p>
                <span className="highlight">Our concept</span>,
                is to let you roam freely through the market while exploring the
                one-of-a-kind ceramic panels and beautiful arches, seeing the
                unique merchants' stalls and connecting with the companies that
                shape our tech{" "} <span className="highlight">tech ecosystem</span>
              </p>
            </div>
            <div className={`event-map-wrapper ${isScrolling && "scrolling"}`}>
              <Map />
            </div>
            <div className="event-description preceeds-menu">
              <p>
                We want to take you on a journey to the best market in our city,
                the 1952 iconic{" "}
                <span className="highlight">Mercado de Matosinhos</span>.
              </p>
            </div>
            <div className="title" id="schedule" ref={programRef}>
              Program
            </div>
            <div className="schedule preceeds-menu">
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>1:00 PM</div>
                <div className={`schedule-title ${theme}`}>Market opens</div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>2:00 PM</div>
                <div className={`schedule-title ${theme}`}>Opening keynote</div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>2:15 PM</div>
                <div className={`schedule-title ${theme}`}>Relia...bility?</div>
                <div className={`schedule-description ${theme}`}>
                  <p>
                    Technology ecosystems are complex and it is really important
                    to understand every change and how it affects our systems,
                    as well as the service provided. Users expect systems to be
                    up, responsive, fast, consistent, and reliable. Reliability
                    for systems means that they are doing what their users need
                    them to do. A system's reliability is essentially how happy
                    users are and we know those happy users are good for
                    business. If reliability is one of the most important
                    requirements of any system, users determine what reliability
                    means, and it’s okay to not be perfect all the time. We need
                    a way of thinking that can address this way of thinking
                    since we have limited resources to spend, be they financial,
                    human, or political.
                  </p>
                </div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>2:45 PM</div>
                <div className={`schedule-title ${theme}`}>
                  Building journeys for 60+ countries
                </div>
                <div className={`schedule-description ${theme}`}>
                  <p>
                    At Remote, we aim to turn complex processes into simple and
                    pleasant experiences. This talk is about our journey to
                    deliver the best experience possible, both for end-users and
                    engineers.
                  </p>
                </div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>3:15 PM</div>
                <div className={`schedule-title ${theme}`}>(TBA)</div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>3:45 PM</div>
                <div className={`schedule-title ${theme}`}>Break</div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>4:15 PM</div>
                <div className={`schedule-title ${theme}`}>
                  Observability with OpenTelemetry
                </div>
                <div className={`schedule-description ${theme}`}>
                  <p>
                    Many components are involved in monitoring and correlating
                    signals from distributed systems. OpenTelemetry comes to aid
                    with a vendor-agnostic telemetry specification that allows
                    developers in any stack to gather telemetry data. It aims to
                    be the standard for implementing and enabling effective
                    Observability. This talk will introduce its core
                    architecture components, key concepts and features, and how
                    to set them up for tracing and exporting telemetry data.
                  </p>
                </div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>4:45 PM</div>
                <div className={`schedule-title ${theme}`}>
                  Fighting money-laundering with code
                </div>
                <div className={`schedule-description ${theme}`}>
                  <p>
                    It is estimated that only 1-2% of money-laundering crime is
                    detected. How do companies fight financial crime today? What
                    happens in the first seconds while your money travels from
                    one account to another? This talk gives an overview of the
                    tech used by the analysts, the problems we face scaling it
                    globally, and how we're solving these.
                  </p>
                </div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>5:15 PM</div>
                <div className={`schedule-title ${theme}`}>
                  Tracking: Not exactly what you think
                </div>
                <div className={`schedule-description ${theme}`}>
                  <p>
                    Tracking user data is a common practice in today's tech
                    industry. Users are nowadays more concerned about their
                    privacy, but reality is that not always their data is used
                    for the bad - yes Google and Meta, I'm taking to you. How do
                    companies leverage users' behaviour to improve their
                    products, what challenges comes from tracking data and which
                    steps can we take to make the most of all data we collect.
                  </p>
                </div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>6:00 PM</div>
                <div className={`schedule-title dashed ${theme}`}>
                  Closing keynote
                </div>
              </div>
              <div className="fish" />
            </div>
            <div className="title" id="sponsorships" ref={sponsorshipsRef}>
              Sponsorships
            </div>
            <div className="sponsorship-description">
              <p>This is a community-focused conference.</p>
              <p>
                We do not have different vendor booths, sell product
                presentations, or distribute attendee contact lists. Our event
                is from developers to developers.
              </p>
              <p>
                Hence, our sponsors are encouraged to represent themselves by
                actively participating, interacting and engaging with the
                attendees during the event.
              </p>
              
            </div>
            <div className="title" id="about-us" ref={aboutRef}>
              About
            </div>
            <div className="brand-details">
              <div className="brand">
                <div className="brand-image">
                  <img src={mercado} />
                </div>
                <div className="brand-name">
                  <a
                    className="hyperlink"
                    rel="noreferrer"
                    href="https://goo.gl/maps/QQTSkA2RVjrERZ2H7"
                    target="_blank"
                  >
                    Mercado M. de Matosinhos
                  </a>
                </div>
                <div className="brand-bio">
                  The Municipal Market of Matosinhos is a market located in the
                  city of Matosinhos, classified as a Monument of Public
                  Interest. It opened on May 27, 1952. The north facade is
                  decorated with ceramic panels by Américo Soares Braga
                  (1909-1991).
                </div>
              </div>
              {/* <div className="brand">
                <div className="brand-image">
                  <img src={matosinhostech} />
                </div>
                <div className="brand-name">
                  <div className="hyperlink">Matosinhos.tech</div>
                </div>
                <div className="brand-bio">
                  In the vicinity of Porto, located in the north of Portugal,
                  Matosinhos is a booming hub for successful technology
                  businesses, and it has attracted investment by some of the
                  most innovative companies. National and international
                  organisations are setting the foundation to attract and retain
                  new talent by providing an excellent work-life balance in a
                  vibrant city by the sea.
                </div>
              </div> */}
            </div>
            <a
              rel="noreferrer"
              href="https://www.eventbrite.com/e/matosinhostech-market-edition-tickets-417443553907"
              target="_blank"
            >
              <div className="arrow-button">
                <span className="text">claim your ticket</span>
              </div>
            </a>
            <div className="arrow-button" onClick={() => scrollTo("#event")}>
              <span className="text">take me back</span>
            </div>
          </div>
          <div className="right">
            <div className="ticket safari_only" key={`ticket-${ticketKey}`}>
              <div className="ticket-top">
                <div className="ticket-header">
                  <div className="ticket-logo">
                    <img src={whiteLogo} alt="logo" />
                  </div>
                  <div className="date">
                    <div className="month">OUT</div>
                    <div className="day">09</div>
                    <div className="year">2022</div>
                  </div>
                </div>
              </div>
              <div className="ticket-center">
                <div className="ticket-name">
                  event.09
                  <br />
                  <span>market edition</span>
                </div>
              </div>
              <div className="ticket-separator">
                <div />
              </div>
              <div className="ticket-bottom">
                <div className="ticket-location">
                  <div className="label">Location</div>
                  <div className="value">Mercado Municipal de Matosinhos</div>
                </div>
                <div className="ticket-time">
                  <div className="left">
                    <div className="label">Start time</div>
                    <div className="value">1:00 PM</div>
                  </div>
                  <div className="right">
                    <div className="label">End time</div>
                    <div className="value">7:00 PM</div>
                  </div>
                </div>
                <div className="ticket-claim">
                <a
                    href="https://www.eventbrite.com/e/matosinhostech-market-edition-tickets-417443553907"
                    rel="noreferrer"
                    target="_blank"
                    disabled={operation.status !== "pristine"}
                  >
                  <button
                    disabled={operation.status !== "pristine"}
                  >
                    {operation.status === "pending" ? (
                      <FontAwesomeIcon icon={faSpinner} className="spinner" />
                    ) : operation.status === "success" ? (
                      "Check your email"
                    ) : operation.status === "error" ? (
                      "Error"
                    ) : (
                      "Claim your ticket"
                    )}
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {operation.status === "success" ||
            (operation.status === "error" && (
              <div className="status-message">
                {operation.status === "error" && (
                  <div className="getTicketError">{operation.message}</div>
                )}
                {operation.status === "success" && (
                  <div className="getTicketSuccess">{operation.message}</div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
