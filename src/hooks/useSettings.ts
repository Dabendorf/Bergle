import { useCallback, useState } from "react";

export type DistanceUnits = "km" | "miles";
export type Themes = "dark" | "light";

export type SettingsData = {
  /** If the game should be played without assistance of map */
  noMapMode: boolean;
  /**
   * If the map should be rotated
   * TODO why not just support rotations by some degree?
   * TODO refactor into "mapRotation"
   */
  rotationMode: boolean;
  /** Which distance unit the user wishes to use */
  distanceUnit: DistanceUnits;
  /** The users desired application theme */
  theme: Themes;
  hideNamesOnMap: boolean;
};

const defaultSettings: SettingsData = {
  noMapMode: false,
  rotationMode: false,
  distanceUnit: "km",
  theme: "dark",
  hideNamesOnMap: false,
};

export function loadSettings(): SettingsData {
  const localSettings = localStorage.getItem("settings");
  const localSettingsJson = localSettings ? JSON.parse(localSettings) : {};
  // TODO consider removing "theme" from defaultSettings, instead setting it from user settings
  //     theme: window.matchMedia("(prefers-color-scheme: dark)").matches
  //        ? "dark"
  //        : "light",
  return Object.assign({}, defaultSettings, localSettingsJson);
}

export function useSettings(): [
  SettingsData,
  (newSettings: Partial<SettingsData>) => void
] {
  const [settingsData, setSettingsData] = useState<SettingsData>(
    loadSettings()
  );

  const updateSettingsData = useCallback(
    (newSettings: Partial<SettingsData>) => {
      const updatedSettings = {
        ...settingsData,
        ...newSettings,
      };

      setSettingsData(updatedSettings);
      localStorage.setItem("settings", JSON.stringify(updatedSettings));
    },
    [settingsData]
  );

  return [settingsData, updateSettingsData];
}
