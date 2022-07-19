import * as React from "react";
import { EventLayout } from "layouts";
import Header from "shared/components/header";
import Seo from "shared/components/seo";
import Copyright from "shared/components/copyright";
const EventPage = (props) => {
  return (
    <>
      <Seo />
      <Header />
      <EventLayout {...props} />
      <Copyright />
    </>
  );
};

export default EventPage;
