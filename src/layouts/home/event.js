import React, { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import TicketForm, {
  DEFAULT_OPERATION_DATA,
} from "shared/components/ticket-form";

// Styles
import "./styles.scss";

// Assets
import venue from "assets/images/events/07/venue.jpg";
import whiteLogo from "assets/images/logo-white.png";
import firstSpeaker from 'assets/images/events/cyber-speaker-red.jpeg';
import secondSpeaker from 'assets/images/events/cyber-speaker-red.jpeg';
import nelsonSpeaker from "assets/images/events/nelson-speaker-red.jpeg";
import mercado from "assets/images/mercado.png";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]');
}

const Event = () => {
  const [operation, setOperation] = useState(DEFAULT_OPERATION_DATA);

  const handleClaimTicket = useCallback(
    (operation) => {
      setOperation(operation);
    },
    [operation.status]
  );

  return (
    <div className="eventLayoutWrapper">
      <div className="eventLayout" id="scrollable">
        <div className="eventContent">
          <div className="left">
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
            <hr />
            <div className="title">Where to find us</div>
            <div className="map">
              <div className="map-details">
                <div className="map-address">
                  <div>R. França Júnior, 4450-135 Matosinhos</div>
                  <div>Mercado Municipal de Matosinhos</div>
                </div>
                <div className="map-direction">
                  <div>41.187431, -8.693362</div>
                  <div>
                    Estação de metro <b>Mercado</b> - Linha A
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="title">Schedule</div>
            <div className="schedule">
              <div className="schedule-slot">
                <div className="schedule-time">7:00 PM</div>
                <div className="schedule-title">Hello</div>
              </div>
              <div className="schedule-slot">
                <div className="schedule-time">7:15 PM</div>
                <div className="schedule-title">
                  Building the Bank of the Employee with Elixir
                </div>
              </div>
              <div className="schedule-slot">
                <div className="schedule-time">7:45 PM</div>
                <div className="schedule-title">
                  Maritime Robots: Protecting our oceans with sustainable
                  technology
                </div>
              </div>
              <div className="schedule-slot">
                <div className="schedule-time">8:15 PM</div>
                <div className="schedule-title dashed">Bye</div>
              </div>
            </div>
            <hr />
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
            <hr />
            <div className="title">Hosts</div>
            <div className="host-details">
              <div className="host">
                <div className="host-image">
                  <img src={nelsonSpeaker} />
                </div>
                <div className="host-name">
                  <a
                    className="hyperlink"
                    href="https://www.linkedin.com/in/nelsonsachse/"
                    target="_blank"
                  >
                    Nelson Sachse
                  </a>
                </div>
                <div className="host-bio">Founder, matosinhos.tech</div>
              </div>
            </div>
            <hr />
            <div className="title">Attend the event</div>
            <TicketForm
              id="claim-ticket-form"
              operationCallback={handleClaimTicket}
            />
            <hr />
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
                    Mercado Municipal de Matosinhos
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
                    <div className="day">9</div>
                    <div className="year">2022</div>
                  </div>
                </div>
              </div>
              <div className="ticket-center">
                <div className="ticket-name">event.market</div>
              </div>
              <div className="ticket-bottom">
                <div className="ticket-location">
                  <div className="label">Location</div>
                  <div className="value">Mercado Municipal de Matosinhos</div>
                </div>
                <div className="ticket-time">
                  <div className="left">
                    <div className="label">Start time</div>
                    <div className="value">7:00 PM</div>
                  </div>
                  <div className="right">
                    <div className="label">End time</div>
                    <div className="value">8:00 PM</div>
                  </div>
                </div>
                <div className="ticket-claim">
                  <button
                    type="submit"
                    disabled={operation.status !== "pristine"}
                    form="claim-ticket-form"
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
    </div>
  );
};

export default Event;
