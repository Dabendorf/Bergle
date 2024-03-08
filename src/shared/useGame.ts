import {useState, useCallback, useEffect} from "react";
import { SettingsData, useSettings } from "../hooks/useSettings";
// Developer note: `useBetween` lets us create hooks which share state between components.
// This is useful to avoid prop-drilling (from passing the state to child-components), increasing efficiency.
// Note that this could've been implemented with a "Context" or state-management libraries such as redux,
// .. but both options (especially redux) requires a lot of code
// For more details see https://www.npmjs.com/package/use-between
import { useBetween } from "use-between";
import {useGameResults, useGuesses} from "../hooks/useGuesses";
import { DateTime } from "luxon";
import { useCountry } from "../hooks/useCountry";
import {
  Country,
  countries,
  getCountryName,
  sanitizeCountryName,
} from "../domain/countries";
import i18n from "../i18n";
import { getCompassDirection, getDistance } from "geolib";
import { Guess } from "../domain/guess";

type GuessSubmitResult = "CORRECT" | "INCORRECT" | "INVALID" | "DUPLICATE";
type GameResult = "VICTORY" | "LOSS" | "ONGOING";

/** The state of the current game */
export type GameState = {
  /** The guesses of the user */
  guesses: Guess[];
  /** The users current guess */
  currentGuess: string;
  /** Which attempt the user is at (counting from 1)*/
  currentAttempt: number;
  /** Which phase the game is in */
  gameResult: GameResult; // TODO change name, not happy with it
  /** Date of the current game */
  dateString: string;
  /** The district the current player must locate */
  country: Country;
};

/** The actions a user can make in a game */
export type GameActions = {
  /** Handles when the user attempts to submit a guess */
  submitGuess: () => GuessSubmitResult;
  /** Update the current guess (e.g. when the user writes their guess) */
  updateCurrentGuess: (currentGuess: string) => void;
};

/** Actions which only affect the setting of the current game */
type SettingActions = {
  /** Activates the map for the current game (useful if the map was initially turned of as a challenge) */
  activateMapForCurrentGame: () => void;
  /** Cancels rotation mode for hte current game */
  cancelRotationModeForCurrentGame: () => void;
};

/** Settings for the current game */
type GameSettings = SettingsData & {
  /** Maximum allowed attempts */
  maxAttempts: number;
};

/** The state, actions and settings corresponding to a game */
export type Game = {
  state: GameState;
  settings: GameSettings;
  gameActions: GameActions;
  settingActions: SettingActions;
};

const createGameSettings = (globalSettings: SettingsData, maxAttempts = 6) =>
  Object.assign(globalSettings, {
    maxAttempts,
  });

const _useGameState = (): Game => {
  const [_globalSettingsData] = useSettings();
  const [currentGameSettings, setCurrentGameSettings] = useState<GameSettings>(
    createGameSettings(_globalSettingsData)
  );
  const dateString = DateTime.now().toFormat("yyyy-MM-dd");
  const [country] = useCountry(dateString);
  const { guesses, addGuess } = useGuesses(dateString);
  const {gameResultInStorage, setTodaysGameResultToLocalStorage} = useGameResults(dateString)
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameResult, setCurrentGameResult] = useState<GameResult>(gameResultInStorage || "ONGOING");

  const updateCurrentGuess = useCallback((updatedGuess) => {
    setCurrentGuess(updatedGuess);
  }, []);

  const activateMapForCurrentGame = useCallback(() => {
    setCurrentGameSettings(
      Object.assign({}, currentGameSettings, { noMapMode: false })
    );
  }, [currentGameSettings]);

  const cancelRotationModeForCurrentGame = useCallback(() => {
    setCurrentGameSettings(
      Object.assign({}, currentGameSettings, { rotationMode: false })
    );
  }, [currentGameSettings]);

  const calculateGameResult = (guesses: Guess[], maxGuesses: number) => {
    const lastGuessIdx = guesses.length;
    if(lastGuessIdx === 0) {
      return "ONGOING"
    }

    const lastGuess = guesses[lastGuessIdx];
    if (lastGuess.distance === 0) {
      return "VICTORY";
    }
    if (lastGuessIdx + 1 === maxGuesses) {
      return "LOSS";
    }
    return "ONGOING";
  };



  /** Submit a guess, returning if it was correct, incorrect, or invalid */
  const submitGuess = useCallback<() => GuessSubmitResult>(() => {
    const guessedCountry = countries.find(
        (country) =>
            sanitizeCountryName(getCountryName(i18n.language, country)) ===
            sanitizeCountryName(currentGuess)
    );
    if (guessedCountry == null) {
      return "INVALID";
    }

    const newGuess = {
      name: currentGuess,
      distance: getDistance(guessedCountry, country),
      direction: getCompassDirection(guessedCountry, country),
    };
    addGuess(newGuess);

    if (newGuess.distance === 0) {
      return "CORRECT";
    }

    return "INCORRECT";
  }, [country, addGuess, currentGuess]);

  useEffect(() => {
    const newRes = calculateGameResult(guesses, currentGameSettings.maxAttempts)
    setCurrentGameResult(newRes);
    setTodaysGameResultToLocalStorage(newRes);
  }, [guesses, currentGameSettings, setTodaysGameResultToLocalStorage]);

  return {
    state: {
      guesses,
      currentGuess,
      currentAttempt: guesses.length + 1,
      gameResult,
      dateString,
      country, // TODO refakturer
    },
    settings: currentGameSettings,
    gameActions: {
      submitGuess,
      updateCurrentGuess,
    },
    settingActions: {
      activateMapForCurrentGame,
      cancelRotationModeForCurrentGame,
    },
  };
};

const useSharedGameState = () => useBetween(_useGameState);
export { useSharedGameState };
