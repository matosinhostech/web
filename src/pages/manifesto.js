import * as React from "react"
import { ManifestoLayout } from "layouts"
import Header from "shared/components/header"
import Seo from "shared/components/seo"

const ManifestoPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <ManifestoLayout {...props} />
    </>
  )
}

export default ManifestoPage
