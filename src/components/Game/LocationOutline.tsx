import React from "react";
import { useCountry } from "../../hooks/useCountry";
import { useSharedGameState } from "../../shared/useGame";

/** Shows the outline of the location we're displaying */
const LocationOutline = () => {
  const {
    settings: { noMapMode, rotationMode },
    state: { gameResult, dateString },
  } = useSharedGameState();

  const [country, randomAngle, imageScale] = useCountry(dateString);

  return (
    <img
      className={`max-h-52 my-2 mx-auto transition-transform duration-700 ease-in dark:invert ${
        noMapMode && gameResult === "ONGOING" ? "h-0" : "h-full"
      }`}
      alt="country to guess"
      src={`images/countries/${country.code.toLowerCase()}/vector.svg`}
      style={
        rotationMode && gameResult === "ONGOING"
          ? {
              transform: `rotate(${randomAngle}deg) scale(${imageScale})`,
            }
          : {}
      }
    />
  );
};

export { LocationOutline };
