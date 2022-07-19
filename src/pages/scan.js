import * as React from "react";
import { ScannerLayout } from "layouts";
import Header from "shared/components/header";
import Seo from "shared/components/seo";
import Copyright from "shared/components/copyright";

const ScanPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <ScannerLayout {...props} />
      <Copyright />
    </>
  );
};

export default ScanPage;
