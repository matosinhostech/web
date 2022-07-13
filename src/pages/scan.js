import * as React from "react"
import { ScannerLayout } from "layouts"
import Header from "shared/components/header"
import Seo from "shared/components/seo"

const ScanPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <ScannerLayout {...props} />
    </>
  )
}

export default ScanPage
