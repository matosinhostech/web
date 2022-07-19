import * as React from "react";
import { PartnersLayout } from "layouts";
import Header from "shared/components/header";
import Seo from "shared/components/seo";
import Copyright from "shared/components/copyright";

const PartnersPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <PartnersLayout {...props} />
      <Copyright />
    </>
  );
};

export default PartnersPage;
