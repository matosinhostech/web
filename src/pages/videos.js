import * as React from "react"
import { VideosLayout } from "layouts"
import Header from "shared/components/header"
import Seo from "shared/components/seo"

const VideosPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <VideosLayout {...props} />
    </>
  )
}

export default VideosPage
