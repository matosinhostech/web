import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'

import "./styles.scss"

const Card = ({ slug, image }) => (
  <div className="card">
    <div className="content">
      <FontAwesomeIcon className="arrow" icon={faArrowRight} />
      <div className="center">
        <img src={image} />
      </div>
      <div className="card-title">
        {slug}
      </div>
      <div className="card-link">
        <Link className="card-link" to={`/partners/${slug}`}>
          About {slug}
        </Link>
      </div>
    </div>
  </div>
)

export default Card
