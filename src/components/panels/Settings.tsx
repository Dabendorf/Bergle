import React from "react";
import { useTranslation } from "react-i18next";
import { useSettings } from "../../hooks/useSettings";
import { Panel } from "./Panel";

interface SettingsProps {
  isOpen: boolean;
  close: () => void;
}

export function Settings({ isOpen, close }: SettingsProps) {
  const { t } = useTranslation();
  const [settingsData, updateSettings] = useSettings();

  return (
    <Panel title={t("settings.title")} isOpen={isOpen} close={close}>
      <div className="my-4 pl-4 pr-4">
        <header className="my-2">
          <h3 className="text-lg font-bold">
            {t("settings.difficultyModifiers")}
          </h3>
          <div className="text-sm italic text-gray-500">
            {t("settings.startsNextDay")}
          </div>
        </header>
        <div className="flex p-1 items-center">
          <input
            type="checkbox"
            id="setting-noMapMode"
            checked={settingsData.noMapMode}
            onChange={(e) => updateSettings({ noMapMode: e.target.checked })}
          />
          <label className="flex-1 ml-2" htmlFor="setting-noMapMode">
            {t("settings.noMapMode")}
          </label>
        </div>
        <div className="flex p-1 items-center">
          <input
            type="checkbox"
            id="setting-rotationMode"
            checked={settingsData.rotationMode}
            onChange={(e) => updateSettings({ rotationMode: e.target.checked })}
          />
          <label className="flex-1 ml-2" htmlFor="setting-rotationMode">
            {t("settings.rotationMode")}
          </label>
        </div>
        <div className="flex p-1 items-center">
          <input
            type="checkbox"
            id="setting-hideNamesOnMap"
            checked={settingsData.hideNamesOnMap}
            onChange={(e) => updateSettings({ hideNamesOnMap: e.target.checked })}
          />
          <label className="flex-1 ml-2" htmlFor="setting-hideNamesOnMap">
            {t("settings.hideNamesOnMap")}
          </label>
        </div>
      </div>

      <div className="my-4 pl-4 pr-4">
        <header className="my-2">
          <h3 className="text-lg font-bold">
            {t("settings.easyMode")}
          </h3>
          <div className="text-sm italic text-gray-500">
            {t("settings.easyModeDescription")}
          </div>
        </header>
        <div className="flex p-1 items-center">
          <input
            type="checkbox"
            id="setting-bydel"
            checked={settingsData.bydelHelperMode}
            onChange={(e) => updateSettings({ bydelHelperMode: e.target.checked })}
          />
          <label className="flex-1 ml-2" htmlFor="setting-bydel">
            {t("settings.bydel")}
          </label>
        </div>
      </div>
    </Panel>
  );
}
