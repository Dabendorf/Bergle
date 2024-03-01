import { GuessRow } from "./GuessRow";
import React from "react";
import { useSharedGameState } from "../shared/useGame";

export function Guesses() {
  const {
    settings,
    state: { guesses },
  } = useSharedGameState();

  return (
    <div className="grid grid-cols-7 gap-1 text-center">
      {Array.from(Array(settings.maxAttempts).keys()).map((index) => (
        <GuessRow key={index} guess={guesses[index]} settingsData={settings} />
      ))}
    </div>
  );
}
