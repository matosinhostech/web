import * as React from "react"
import { HomeLayout } from "layouts"
import Header from "shared/components/header"
import Seo from "shared/components/seo"

const HomePage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <HomeLayout {...props} />
    </>
  )
}

export default HomePage
