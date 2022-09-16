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
  <>
    {facebook && (
      <a rel="noreferrer" target="_blank" href={facebook}>
        <FontAwesomeIcon icon={faFacebook} className="icon" />
      </a>
    )}
    {linkedin && (
      <a rel="noreferrer" target="_blank" href={linkedin}>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
    )}
    {instagram && (
      <a rel="noreferrer" target="_blank" href={instagram}>
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </a>
    )}
    {twitter && (
      <a rel="noreferrer" target="_blank" href={twitter}>
        <FontAwesomeIcon icon={faTwitter} className="icon" />
      </a>
    )}
    {slack && (
      <a rel="noreferrer" target="_blank" href={slack}>
        <FontAwesomeIcon icon={faSlack} className="icon" />
      </a>
    )}
    {reddit && (
      <a rel="noreferrer" target="_blank" href={reddit}>
        <FontAwesomeIcon icon={faReddit} className="icon" />
      </a>
    )}
    {email && (
      <a rel="noreferrer" href={`mailto:${email}`}>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </a>
    )}
  </>
)
export default Socials
