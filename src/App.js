import React from "react";

import Board from "./Components/Board";
import Header from "./Components/Header";

import ListContextProvider from "./Providers/ListContextProvider";
import EventsProvider from "./Providers/EventsProvider";

import { SettingsContext } from "./Contexts";

import useLocalStorageState from "./Hooks/useLocalStorageState";

function App() {
  const initial_settings = {
    darkMode: true,
  };
  const [settings, setSettings] = useLocalStorageState(
    "settings",
    initial_settings
  );

  return (
    <ListContextProvider>
      <SettingsContext.Provider value={[settings, setSettings]}>
        <EventsProvider>
          <div className="app">
            <Header />
            <Board />
          </div>
        </EventsProvider>
      </SettingsContext.Provider>
    </ListContextProvider>
  );
}

export default App;
