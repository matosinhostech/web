import React, { useCallback, useState } from "react";
import Navigation from "shared/components/navigation";
import Event from "../home/event";

import "./styles.scss";

const THEMES = {
  DARK: "dark",
  LIGHT: "light",
  RED: "red",
};

const EventLayout = ({ path }) => {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const changeTheme = useCallback((t) => setTheme(t), [theme]);

  return (
    <main className="eventContainer">
      <div className={`eventMain ${theme}`}>
        <Navigation
          path={path}
          theme={theme}
          setTheme={changeTheme}
          page={theme !== THEMES.DARK ? "eventPage" : "homePage"}
        />
        <Event setTheme={changeTheme} theme={theme} />
      </div>
    </main>
  );
};

export default EventLayout;
