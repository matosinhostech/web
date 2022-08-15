import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import TicketForm, {
  DEFAULT_OPERATION_DATA,
} from "shared/components/ticket-form";
import { Waypoint } from "react-waypoint";
import scrollTo from "gatsby-plugin-smoothscroll";
import arrowLight from "assets/images/arrow-link-light-slim.svg";
import arrowDark from "assets/images/arrow-link-dark-slim.svg";
import fish from "assets/images/fish.png";

// Styles
import "./styles.scss";

// Assets
import whiteLogo from "assets/images/logo-white.png";
import firstSpeaker from "assets/images/events/cyber-speaker-red.jpeg";
import secondSpeaker from "assets/images/events/cyber-speaker-red.jpeg";
import mercado from "assets/images/mercado.png";
import matosinhostech from "assets/images/matosinhostech.png";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
  RED: "red",
};

const Event = ({ setTheme, theme }) => {
  const [operation, setOperation] = useState(DEFAULT_OPERATION_DATA);

  const handleClaimTicket = useCallback(
    (operation) => {
      setOperation(operation);
    },
    [operation.status]
  );

  return (
    <div className="event-layout-wrapper">
      <div className="event-layout" id="scrollable">
        <div className="event-content">
          <div className="left">
            <div className="event-name" id="event">
              Welcome to the{" "}
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
                At our eighth event, we will bring to our stage Tiago Fernandes,
                CTO of Coverflex, to explain to us how Coverflex is building the
                future of compensation with Elixir and give us an insight into
                their mission of creating the Bank of the Employee.
              </p>
              <p>
                Afterwards, Manuel Parente, Director of Software Engineering at
                Ocean Infinity, will break down how building a fleet of robotic
                vessels at scale is a complex challenge – especially if done
                sustainably. In this talk, he’ll talk about how groundbreaking
                technology is transforming the sea and improving the planet and
                our lives.
              </p>
              <p>
                Claim your ticket and enjoy the show on the 1st of June at 7:00
                PM.
              </p>
            </div>
            <Waypoint onEnter={() => setTheme(THEMES.LIGHT)} />
            <div className="event-outcomes-wrapper">
              <div className="event-outcomes">
                <div className="event-outcomes-row">
                  <div className="event-outcomes-number">1</div>
                  <div className="event-outcomes-text">day</div>
                </div>
                <div className="event-outcomes-row">
                  <div className="event-outcomes-number">4</div>
                  <div className="event-outcomes-text">speakers</div>
                </div>
                <div className="event-outcomes-row">
                  <div className="event-outcomes-number">+10</div>
                  <div className="event-outcomes-text">companies</div>
                </div>
                <div className="event-outcomes-row">
                  <div className="event-outcomes-number">80</div>
                  <div className="event-outcomes-text">seats</div>
                </div>
              </div>
            </div>
            <div className="event-description">
              On October 9th don't miss out on the opportunity to{" "}
              <span className="highlight">get involved in the community</span>{" "}
              and network with other talented devs! Also, if you have a company,
              take the chance to <span className="highlight">show it</span>!
            </div>
            <div className="event-image-banner" />
            <div className="title">Speakers</div>
            <div className="speaker-details">
              <div className="speaker">
                <div className="speaker-image">
                  <img src={firstSpeaker} />
                </div>
                <div className="speaker-name">
                  <a
                    className="hyperlink"
                    href="https://www.linkedin.com/in/tiago-m-fernandes/"
                    target="_blank"
                  >
                    Tiago Fernandes
                  </a>
                </div>
                <div className="speaker-bio">
                  <p>
                    With more than two decades of experience building software,
                    Tiago is currently on a mission to change the way companies
                    reward employees. He leads a team of superstars, helping
                    them to embrace the role of product engineers and to deliver
                    amazing products.
                  </p>
                </div>
              </div>
              <div className="speaker">
                <div className="speaker-image">
                  <img src={secondSpeaker} />
                </div>
                <div className="speaker-name">
                  <a
                    className="hyperlink"
                    href="https://www.linkedin.com/in/mparente/"
                    target="_blank"
                  >
                    Manuel Parente
                  </a>
                </div>
                <div className="speaker-bio">
                  <p>
                    With more than two decades of experience building software,
                    Tiago is currently on a mission to change the way companies
                    reward employees. He leads a team of superstars, helping
                    them to embrace the role of product engineers and to deliver
                    amazing products.
                  </p>
                </div>
              </div>
            </div>
            <div className="title">Schedule</div>
            <div className="schedule">
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>7:00 PM</div>
                <div className={`schedule-title ${theme}`}>Hello</div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>7:15 PM</div>
                <div className={`schedule-title ${theme}`}>
                  Building the Bank of the Employee with Elixir
                </div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>7:45 PM</div>
                <div className={`schedule-title ${theme}`}>
                  Maritime Robots: Protecting our oceans with sustainable
                  technology
                </div>
              </div>
              <div className="schedule-slot">
                <div className={`schedule-time ${theme}`}>8:15 PM</div>
                <div className={`schedule-title dashed ${theme}`}>Bye</div>
              </div>
              <div className="fish">
                <img src={fish} />
              </div>
            </div>
            <Waypoint onEnter={() => setTheme(THEMES.RED)} />
            <div className="title" id="claim-ticket-anchor">
              Attend the event
            </div>
            <TicketForm operationCallback={handleClaimTicket} />
            <div className="title">About us</div>
            <div className="brand-details">
              <div className="brand">
                <div className="brand-image">
                  <img src={mercado} />
                </div>
                <div className="brand-name">
                  <a
                    className="hyperlink"
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
              <div className="brand">
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
              </div>
            </div>
            <div className="arrow-button" onClick={() => scrollTo("#event")}>
              <span className="text">take me back</span>
              <img src={theme === THEMES.LIGHT ? arrowDark : arrowLight} />
            </div>
          </div>
          <div className="right">
            <div className="ticket safari_only">
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
                <div className="ticket-name">event.fish.market</div>
              </div>
              <div className="ticket-separator"><div/></div>
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
                    <div className="value">8:00 PM</div>
                  </div>
                </div>
                <div className="ticket-claim">
                  <button
                    onClick={() => scrollTo("#claim-ticket-anchor")}
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
      <Waypoint onEnter={() => setTheme(THEMES.DARK)} />
    </div>
  );
};

export default Event;
