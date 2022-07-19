import * as React from "react";
import { HomeLayout } from "layouts";
import Header from "shared/components/header";
import Seo from "shared/components/seo";
import Copyright from "shared/components/copyright";

const HomePage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <HomeLayout {...props} />
      <Copyright />
    </>
  );
};

export default HomePage;
