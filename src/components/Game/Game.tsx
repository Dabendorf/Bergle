import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Guesses } from "../Guesses";
import { useSharedGameState } from "../../shared/useGame";
import { LocationOutline } from "./LocationOutline";
import { ShareGameResult } from "./ShareGameResult";
import { SubmitGuessForm } from "./SubmitGuessForm";
import { GameSettingButtons } from "./GameSettingButtons";
import { useTranslation } from "react-i18next";
import { DateTime, Interval } from "luxon";

export function Game() {
  const {
    settings,
    state: { country, guesses, gameResult, dateString },
  } = useSharedGameState();
  const { t } = useTranslation();
  const today = DateTime.now();

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
      <div className={(today >= DateTime.fromISO("2024-12-08") && today <= DateTime.fromISO("2024-12-15")) ? "p-4 text-center" : ""}>
          {today >= DateTime.fromISO("2024-12-08") && today <= DateTime.fromISO("2024-12-15") && "Hallaien irriterte Bergensere! E det nokke du er irritert over? Har du idéer eller tanker? Del dem med oss. Se kontaktinfo i FAQ"}
      </div>
      <div className={(Math.floor(Interval.fromDateTimes(DateTime.fromISO("2023-12-31"), DateTime.fromISO(dateString)).length("day"))===365) ? "p-4 text-center" : ""}>
          {(Math.floor(Interval.fromDateTimes(DateTime.fromISO("2023-12-31"), DateTime.fromISO(dateString)).length("day"))===365) && "I dag er det et år siden Bergle ble publisert! Tusen takk for at du fortsatt spiller!"}
      </div>
    </div>
  );
}
