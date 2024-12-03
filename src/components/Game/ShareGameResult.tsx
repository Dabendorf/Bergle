import { useTranslation } from "react-i18next";
import React, { useMemo } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import {
  Direction,
  computeProximityPercent,
  generateSquareCharacters,
} from "../../domain/geography";
import { useSharedGameState } from "../../shared/useGame";
import { toast } from "react-toastify";
import { DateTime, Interval } from "luxon";
import { Button } from "../Button";

// Start date for day counter in the shared results
const START_DATE = DateTime.fromISO("2023-12-31"); // always one day off (if 2024-01-01 wanted as day 1, write 2023-12-31)

const ShareClipboard = () => {
  const { t } = useTranslation();
  const {
    settings: { noMapMode, rotationMode, theme },
    state: { guesses, dateString, usedHint, gameResult },
  } = useSharedGameState();

  const shareText = useMemo(() => {
    const guessCount =
      guesses[guesses.length - 1]?.distance === 0 ? guesses.length : "X";
    const dayCount = Math.floor(
      Interval.fromDateTimes(START_DATE, DateTime.fromISO(dateString)).length(
        "day"
      )
    );
    const difficultyModifierEmoji = noMapMode
      ? " 🙈"
      : rotationMode
      ? " 🌀"
      : "";

    const hintEmoji = usedHint ? " 🗺️" : "";
    const title = `#Bergle #Dag${dayCount} ${guessCount}/6${difficultyModifierEmoji}${hintEmoji}`;

    const guessString = guesses
      .map((guess: { distance: number; direction: Direction }) => {
        const percent = computeProximityPercent(guess.distance);
        const direction = guess.direction;
        return generateSquareCharacters(percent, theme, direction).join("");
      })
      .join("\n");

    return [title, guessString, "https://www.bergle.no"].join("\n");
  }, [dateString, guesses, noMapMode, rotationMode, theme, usedHint]);

  return (
    <CopyToClipboard
      text={shareText}
      onCopy={() => toast(t("copy") as string)} // Cast to string
      options={{
        format: "text/plain",
      }}
    >
      <Button buttonStyle="secondary">{gameResult === "LOSS" ? t("shareFail") : t("share")}</Button>
    </CopyToClipboard>
  );
};

const ShareGameResult = () => {
  const { t } = useTranslation();
  const {
    state: { gameResult, country },
  } = useSharedGameState();

  if (gameResult === "ONGOING") return null;

  return (
    <>
      <ShareClipboard />
      <a
        className="underline w-full text-center block mt-4"
        href={`https://www.openstreetmap.org/?mlat=${country.latitude}&mlon=${country.longitude}#map=15/${country.latitude}/${country.longitude}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("showOnOSM")}
      </a>
    </>
  );
};

export { ShareGameResult };
