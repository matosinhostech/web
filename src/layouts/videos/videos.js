import React, { useCallback, useEffect, useState } from "react";
import BaseSwipeableViews from "react-swipeable-views";
import { virtualize, bindKeyboard } from "react-swipeable-views-utils";
import { mod } from "react-swipeable-views-core";
import ReactPlayer from "react-player/vimeo";
import { Waypoint } from "react-waypoint";
import moment from "moment";

import EVENTS from "./events";

import arrowLeft from "assets/images/arrow-left.svg";
import arrowRight from "assets/images/arrow-right.svg";

// Styles
import "./styles.scss";

const windowGlobal = typeof window !== "undefined" && window;

const SwipeableViews = bindKeyboard(virtualize(BaseSwipeableViews));

const Videos = () => {
  const [index, setIndex] = useState(0);
  const [event, setEvent] = useState();
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const isPlayingVideo = windowGlobal ? Boolean(window.location.hash) : false;

  const handleSelectEvent = useCallback((event) => {
    if (windowGlobal) {
      windowGlobal.location.hash = "playing";
    }
    setEvent(event);
  }, []);

  useEffect(() => {
    if (!isPlayingVideo) {
      setShowMiniPlayer(false);
      setEvent();
    }
  }, [isPlayingVideo]);

  const slideRenderer = (params) => {
    const { index, key } = params;
    const event = EVENTS[mod(index, EVENTS.length)];

    return (
      <div className="event" key={key}>
        <div className="eventInfo">
          <div className="eventTitle">{event.title}</div>
          <div className="eventAuthorDate">
            <div className="eventAuthor">
              <a href={event.authors[0].url}>{event.authors[0].name}</a>
              {event.authors[1] && (
                <>
                  <span> / </span>
                  <a href={event.authors[1].url}>{event.authors[1].name}</a>
                </>
              )}
            </div>
            <div className="eventDate">
              <span>{moment(event.date).format("MMMM Do YYYY")}</span>
            </div>
          </div>
          <div className="eventDescription">{event.description}</div>
          <div className="eventWatch" onClick={() => handleSelectEvent(event)}>
            Watch now
          </div>
        </div>
        <div className="eventHero">
          <img src={event.bannerImg} />
        </div>
      </div>
    );
  };

  const renderAllEvents = () => (
    <>
      <div className="allEvents">
        {EVENTS.map((event, i) => (
          <div
            className="eventButton"
            key={event.name}
            onClick={() => {
              setIndex(i);
              handleSelectEvent(event);
              window.scrollTo(0, 0);
            }}
          >
            <div className="eventButtonImage">
              <img
                src={event.bannerImg}
                className={i === mod(index, EVENTS.length) && "activeBanner"}
              />
              <div className="eventButtonDuration">{event.duration}</div>
            </div>
            <div className="eventButtonInfo">
              <div className="eventButtonAuthor">
                {event.authors[0].name}
                {event.authors[1] && (
                  <>
                    <span> / </span>
                    {event.authors[1].name}
                  </>
                )}
              </div>
              <div className="eventButtonTitle">{event.title}</div>
              <div className="eventButtonDate">
                <span>{moment(event.date).format("MMMM Do YYYY")}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottomPlaceholder" />
    </>
  );

  const renderSliderPaginations = () => (
    <div className="sliderPagination">
      {EVENTS.map((event, i) => (
        <div
          className={`sliderPaginationDot ${
            i === mod(index, EVENTS.length) && "active"
          }`}
          key={event.name}
          onClick={() => {
            setIndex(i);
            setEvent();
            window.scrollTo(0, 0);
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="videos" id="scrollable">
      <Waypoint
        onEnter={() => setShowMiniPlayer(false)}
        onLeave={() => setShowMiniPlayer(!!event && true)}
        bottomOffset="40%"
        topOffset="30%"
      >
        <div className={`topSection ${showMiniPlayer && "showMiniPlayer"}`}>
          {event ? (
            <ReactPlayer
              url={event.video}
              width={showMiniPlayer ? "25%" : "100%"}
              height={showMiniPlayer ? "25%" : "100%"}
              controls={true}
              config={{
                vimeo: {
                  playerOptions: {
                    autoplay: "true",
                    playsinline: "true",
                  },
                },
              }}
              style={
                !showMiniPlayer
                  ? {
                      background: "black",
                    }
                  : {
                      position: "fixed",
                      left: "2rem",
                      bottom: "1rem",
                    }
              }
            />
          ) : (
            <div className="slider">
              <img
                src={arrowLeft}
                className="sliderArrowLeft"
                onClick={() => setIndex(index - 1)}
              />
              <SwipeableViews
                enableMouseEvents
                index={index}
                onChangeIndex={setIndex}
                slideRenderer={slideRenderer}
                threshold={1}
              />
              <img
                src={arrowRight}
                className="sliderArrowRight"
                onClick={() => setIndex(index + 1)}
              />
              {renderSliderPaginations()}
            </div>
          )}
        </div>
      </Waypoint>
      {event ? (
        <div className="bottomSection">
          <div className="nowPlayingInfo">
            <div className="nowPlayingLeft">
              <div className="nowPlayingTitle">{event.title}</div>
              <div className="nowPlayingDescription">
                {event.longDescription}
              </div>
            </div>
            <div className="nowPlayingRight">
              {event.authors.map((author) => (
                <>
                  <div className="nowPlayingAuthorImg">
                    <img src={author.img} />
                  </div>
                  <div className="nowPlayingAuthor">
                    from <a href={author.url}>{author.name}</a>
                  </div>
                  <div className="nowPlayingDate">{event.date}</div>
                </>
              ))}
            </div>
          </div>
          {renderAllEvents()}
        </div>
      ) : (
        renderAllEvents()
      )}
    </div>
  );
};

export default Videos;
