import * as React from "react";
import { ManifestoLayout } from "layouts";
import Header from "shared/components/header";
import Seo from "shared/components/seo";
import Copyright from "shared/components/copyright";

const ManifestoPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <ManifestoLayout {...props} />
      <Copyright />
    </>
  );
};

export default ManifestoPage;
