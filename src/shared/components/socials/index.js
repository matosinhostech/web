import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faSlack,
  faReddit,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "./styles.scss"

const Socials = ({ facebook, linkedin, twitter, instagram, slack, reddit, email }) => (
  <div>
    {facebook && (
      <a href={facebook}>
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </a>
    )}
    {linkedin && (
      <a href={linkedin}>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
    )}
    {instagram && (
      <a href={instagram}>
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </a>
    )}
    {twitter && (
      <a href={twitter}>
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </a>
    )}
    {slack && (
      <a href={slack}>
        <FontAwesomeIcon icon={faSlack} className="icon" />
      </a>
    )}
    {reddit && (
      <a href={reddit}>
        <FontAwesomeIcon icon={faReddit} className="icon" />
      </a>
    )}
    {email && (
      <a href={email}>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </a>
    )}
  </div>
)
export default Socials
