import React, { useCallback } from "react";
import { CountryInput } from "../CountryInput";
import { useTranslation } from "react-i18next";
import { useSharedGameState } from "../../shared/useGame";
import { toast } from "react-toastify";
import { Button } from "../Button";

const SubmitGuessForm = () => {
  const { t } = useTranslation();
  const {
    state: { currentGuess, gameResult, country },
    gameActions: { updateCurrentGuess, submitGuess },
  } = useSharedGameState();

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const guessResult = submitGuess();
      // TODO if invalid and it was your last attempt, show different msg
      if (guessResult === "INVALID") {
        toast.error(t("unknownCountry") as string); // Cast to string
        return;
      }
      if (guessResult === "DUPLICATE") {
        toast.error(t("alreadyGuessed") as string); // Cast to string
        return;
      }
      if (guessResult === "INCORRECT_BUT_SAME_BYDEL") {
        toast.info(`${String(t("correctBydel"))} (${country.district})`); //TODO change to something better
        return;
      }
      if (guessResult === "CORRECT") {
        toast.success(t("welldone") as string, { delay: 2000 }); // Cast to string
      }
    },
    [t, submitGuess, country.district]
  );

  if (gameResult !== "ONGOING") return null;

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <CountryInput
          currentGuess={currentGuess}
          setCurrentGuess={updateCurrentGuess}
        />
        <Button buttonStyle="primary" className="my-0.5" type="submit">
          🌍 {t("guess")}
        </Button>
      </div>
    </form>
  );
};

export { SubmitGuessForm };
