import * as React from "react"
import Accordion from './accordion';
import { accordionData } from './content';

import "./styles.scss"

const Manifesto = () => {

  return (
    <div className="manifesto-content">
      <div className="banner banner-top"></div>
      <React.Fragment>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </React.Fragment>
      <div className="banner banner-bottom"></div>
    </div>
  )
};

export default Manifesto
