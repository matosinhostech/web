import * as React from "react"
import Navigation from "shared/components/navigation"
import Manifesto from "./manifesto"

import "./styles.scss"

const ManifestoLayout = ({ path }) => {
  return (
    <main className="manifestoContainer">
      <div className="manifestoMain" id="scrollable">
        <Navigation path={path} page="manifestoPage" />
        <Manifesto />
      </div>
    </main>
  )
}

export default ManifestoLayout
