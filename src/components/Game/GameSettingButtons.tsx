import React from "react";
import { useTranslation } from "react-i18next";
import { useSharedGameState } from "../../shared/useGame";
import { Button } from "../Button";

/** Buttons to alter the game settings of the current game */
const GameSettingButtons = () => {
  const { t } = useTranslation();
  const {
    settings: { noMapMode, rotationMode },
    state: { gameResult },
    settingActions: {
      cancelRotationModeForCurrentGame,
      activateMapForCurrentGame,
    },
  } = useSharedGameState();

  if (gameResult !== "ONGOING") return null;
  if (noMapMode) {
    return (
      <Button
        buttonStyle="primary"
        className="my-2"
        onClick={activateMapForCurrentGame}
      >
        {t("showCountry")}
      </Button>
    );
  }
  if (rotationMode) {
    return (
      <Button
        buttonStyle="primary"
        className="my-2"
        onClick={cancelRotationModeForCurrentGame}
      >
        {t("cancelRotation")}
      </Button>
    );
  }
  return null;
};

export { GameSettingButtons };
