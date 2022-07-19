import * as React from "react";
import { VideosLayout } from "layouts";
import Header from "shared/components/header";
import Seo from "shared/components/seo";
import Copyright from "shared/components/copyright";

const VideosPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <VideosLayout {...props} />
      <Copyright />
    </>
  );
};

export default VideosPage;
