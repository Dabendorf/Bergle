import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Guesses } from "../Guesses";
import { useSharedGameState } from "../../shared/useGame";
import { LocationOutline } from "./LocationOutline";
import { ShareGameResult } from "./ShareGameResult";
import { SubmitGuessForm } from "./SubmitGuessForm";
import { GameSettingButtons } from "./GameSettingButtons";
import { useTranslation } from "react-i18next";

export function Game() {
  const {
    settings,
    state: { country, guesses, gameResult },
  } = useSharedGameState();
  const { t } = useTranslation();

  useEffect(() => {
    if (
      guesses.length === settings.maxAttempts &&
      guesses[guesses.length - 1].distance > 0
    ) {
      toast.info(country.name.toUpperCase(), {
        autoClose: false,
        delay: 2000,
      });
    }
  }, [country, guesses, settings.maxAttempts]);

  return (
    <div className="flex-grow flex flex-col mx-2 mb-1">
      <GameSettingButtons />
      <LocationOutline />
      <Guesses />
      <div className="my-2">
        <ShareGameResult />
        <SubmitGuessForm />
      </div>
      <div className={(guesses.length >= 3 && gameResult === "ONGOING") ? "p-4 text-center" : ""}>
          {(guesses.length >= 3 && gameResult === "ONGOING") && t("mapHelperRecommendation")}
      </div>
    </div>
  );
}
