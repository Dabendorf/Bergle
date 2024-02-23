import React, { useState } from "react";
import { Infos } from "./panels/Infos";
import Help from "./panels/Help";
import { Settings } from "./panels/Settings";
import { Stats } from "./panels/Stats";
import { useSettings } from "../hooks/useSettings";
import { Bergle } from "./Bergle";

type NavbarPanel = "FAQ" | "MAP" | "SETTINGS" | "STATS" | null;

type HeaderProps = {
  currentOpenNavbarPanel: NavbarPanel;
  setCurrentOpenNavbarPanel: (currentOpenNavbarPanel: NavbarPanel) => void;
};

/**
 * Renders the page header where buttons to open navbar panels are located
 */
const Header = ({
  currentOpenNavbarPanel,
  setCurrentOpenNavbarPanel,
}: HeaderProps) => {
  /** Helper method for generating header buttons which open navbar panels */
  const HeaderButton = ({
    btnIcon,
    btnLabel,
    btnNavbarPanel,
  }: {
    btnIcon: string;
    btnLabel: string;
    btnNavbarPanel: NavbarPanel;
  }) => (
    <button
      className="mx-3 text-xl"
      type="button"
      onClick={() => setCurrentOpenNavbarPanel(btnNavbarPanel)}
      aria-label={btnLabel}
      disabled={currentOpenNavbarPanel === btnNavbarPanel}
    >
      {btnIcon}
    </button>
  );

  return (
    <header className="border-b-2 border-gray-200 flex">
      <HeaderButton
        btnIcon="❔"
        btnLabel="Frequently asked questions"
        btnNavbarPanel={"FAQ"}
      />
      <HeaderButton
        btnIcon="🗺️"
        btnLabel="Map of Bergen"
        btnNavbarPanel={"MAP"}
      />

      <h1 className="text-4xl font-bold uppercase tracking-wide text-center my-1 flex-auto">
        <Bergle />
      </h1>

      <HeaderButton
        btnIcon="📈"
        btnLabel="Statistics"
        btnNavbarPanel={"STATS"}
      />
      <HeaderButton
        btnIcon="⚙️"
        btnLabel="Settings"
        btnNavbarPanel={"SETTINGS"}
      />
    </header>
  );
};

const Navbar = () => {
  const [settingsData, updateSettings] = useSettings();
  const [currentOpenNavbarPanel, setCurrentOpenNavbarPanel] =
    useState<NavbarPanel>(null);

  const closeNavbarPanel = () => setCurrentOpenNavbarPanel(null);

  return (
    <>
      <Header
        currentOpenNavbarPanel={currentOpenNavbarPanel}
        setCurrentOpenNavbarPanel={setCurrentOpenNavbarPanel}
      />

      <Infos
        isOpen={currentOpenNavbarPanel === "FAQ"}
        close={closeNavbarPanel}
        settingsData={settingsData}
      />
      <Help
        isOpen={currentOpenNavbarPanel === "MAP"}
        close={closeNavbarPanel}
        settingsData={settingsData}
      />
      <Settings
        isOpen={currentOpenNavbarPanel === "SETTINGS"}
        close={closeNavbarPanel}
        settingsData={settingsData}
        updateSettings={updateSettings}
      />
      <Stats
        isOpen={currentOpenNavbarPanel === "STATS"}
        close={closeNavbarPanel}
        distanceUnit={settingsData.distanceUnit}
      />
    </>
  );
};

export default Navbar;
