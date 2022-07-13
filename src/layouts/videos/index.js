import * as React from "react"
import Navigation from "shared/components/navigation"
import Videos from "./videos"

import "./styles.scss"

const VideosLayout = ({ path }) => {
  return (
    <main className="videosContainer">
      <div className="videosMain">
        <Navigation path={path} page="videosPage" />
        <Videos />
      </div>
    </main>
  )
}

export default VideosLayout
