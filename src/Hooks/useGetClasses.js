import { useContext } from "react";

import { SettingsContext } from "../Contexts";

const useGetClasses = (className) => {
  const [settings, setSettings] = useContext(SettingsContext);

  const classes = [className];

  if (settings.darkMode) {
    classes.push(`${className}--dark`);
  }

  return classes.join(" ");
};

export default useGetClasses;
