import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Game } from "./components/Game";
import React, { useEffect, useState } from "react";
import { Infos } from "./components/panels/Infos";
import { useTranslation } from "react-i18next";
import { Settings } from "./components/panels/Settings";
import { useSettings } from "./hooks/useSettings";
import { Stats } from "./components/panels/Stats";
import { Bergle } from "./components/Bergle";

function App() {
  const { t, i18n } = useTranslation();

  const [infoOpen, setInfoOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);

  const [settingsData, updateSettings] = useSettings();

  useEffect(() => {
    if (settingsData.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [settingsData.theme]);

  return (
    <>
      <ToastContainer
        hideProgressBar
        position="top-center"
        transition={Flip}
        theme={settingsData.theme}
        autoClose={2000}
        bodyClassName="font-bold text-center"
      />
       <Infos
        isOpen={infoOpen}
        close={() => setInfoOpen(false)}
        settingsData={settingsData}
      />
      <Settings
        isOpen={settingsOpen}
        close={() => setSettingsOpen(false)}
        settingsData={settingsData}
        updateSettings={updateSettings}
      />
       <Stats
        isOpen={statsOpen}
        close={() => setStatsOpen(false)}
        distanceUnit={settingsData.distanceUnit}
      />
      <div className="flex justify-center flex-auto dark:bg-slate-900 dark:text-slate-50"> {/* Background Colour of main game */}
        <div className="w-full max-w-lg flex flex-col">
          <header className="border-b-2 border-gray-200 flex">
            <button
              className="mx-3 text-xl"
              type="button"
              onClick={() => setInfoOpen(true)}
            >
              ❔
            </button>
            <h1 className="text-4xl font-bold uppercase tracking-wide text-center my-1 flex-auto">
            <span className="text-amber-700">B</span><span className="text-yellow-600">E</span><span className="text-rose-700">R</span>
            <span className="text-orange-500">G</span><span className="text-orange-200">L</span><span className="text-white-600">E</span>
            </h1>
            <button
              className="ml-3 text-xl"
              type="button"
              onClick={() => setStatsOpen(true)}
            >
              📈
            </button>
            <button
              className="mx-3 text-xl"
              type="button"
              onClick={() => setSettingsOpen(true)}
            >
              ⚙️
            </button>
          </header>
          <Game settingsData={settingsData} />
          <footer className="flex justify-center text-sm mt-8 mb-1">
            ❤️ <Bergle />? -
            <a
              className="underline pl-1"
              href="https://github.com/Dabendorf/Bergle"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contributeOnGitHub")}
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
