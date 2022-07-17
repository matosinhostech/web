import React, { useState } from 'react';
import useMediaQuery from "shared/hooks/useMediaQuery";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 1100px)');

  return (
    <div className="accordion-item">
      <hr />
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div className="accordion-button">{isActive ? <span>&#10005;</span> : <span>&#8595;</span>}</div>
      </div>
      {(isActive || isDesktop) && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;