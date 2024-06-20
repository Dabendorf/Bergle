import React, { useEffect, useState } from "react";
import { Infos } from "./panels/Infos";
import Help from "./panels/Help";
import { Settings } from "./panels/Settings";
import { Stats } from "./panels/Stats";
import { Bergle } from "./Bergle";
import { useSharedGameState } from "../shared/useGame";

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
    <>
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
      <div className="limit w-full" style={{ height: '0.125rem' }}>
    <div className="w-full z-50" style={{ color: '#0F172A', margin: '0', padding: '0' }}></div>
    <div className="w-full z-0 flex justify-center items-center" style={{ color: '#0F172A', margin: '0', padding: '0' }}>
      Gjett områder i Nordens viktigste by
    </div>
  </div>
    </>
  );
};

const Navbar = () => {
  const [currentOpenNavbarPanel, setCurrentOpenNavbarPanel] =
    useState<NavbarPanel>(null);

  const closeNavbarPanel = () => setCurrentOpenNavbarPanel(null);
  const {
    gameActions: { setUsedHintFunc },
  } = useSharedGameState();

  useEffect(() => {
    if (currentOpenNavbarPanel === "MAP") {
      setUsedHintFunc(true)
    }
  }, [currentOpenNavbarPanel, setUsedHintFunc]);

  return (
    <>
      <Header
        currentOpenNavbarPanel={currentOpenNavbarPanel}
        setCurrentOpenNavbarPanel={setCurrentOpenNavbarPanel}
      />
      <Infos
        isOpen={currentOpenNavbarPanel === "FAQ"}
        close={closeNavbarPanel}
      />
      <Help
        isOpen={currentOpenNavbarPanel === "MAP"}
        close={closeNavbarPanel}
      />
      <Settings
        isOpen={currentOpenNavbarPanel === "SETTINGS"}
        close={closeNavbarPanel}
      />
      <Stats
        isOpen={currentOpenNavbarPanel === "STATS"}
        close={closeNavbarPanel}
      />
    </>
  );
};

export default Navbar;
