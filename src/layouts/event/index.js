import * as React from "react"
import Navigation from "shared/components/navigation"
import Event from "./event"

import "./styles.scss"

const EventLayout = ({ path }) => {
  return (
    <main className="eventContainer">
      <div className="eventMain">
        <Navigation path={path} page="eventPage" />
        <Event />
      </div>
    </main>
  )
}

export default EventLayout
