import * as React from "react"
import { PartnersLayout } from "layouts"
import Header from "shared/components/header"
import Seo from "shared/components/seo"

const PartnersPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <PartnersLayout {...props} />
    </>
  )
}

export default PartnersPage
