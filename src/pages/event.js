import * as React from "react"
import { EventLayout } from "layouts"
import Header from "shared/components/header"
import Seo from "shared/components/seo"

const EventPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <EventLayout {...props} />
    </>
  )
}

export default EventPage
