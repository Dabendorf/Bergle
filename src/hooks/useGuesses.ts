import { useState } from "react";
import { Guess } from "../domain/guess";

type GameResult = "VICTORY" | "LOSS" | "ONGOING";

/** Class handling storage of guesses */
class GuessStorage {
  static loadAllGuesses(): Record<string, Guess[]> {
    const storedGuesses = localStorage.getItem("guesses");
    if (storedGuesses === null) return {};
    return JSON.parse(storedGuesses);
  }

  static loadGuessesForDay(dayString: string) {
    return this.loadAllGuesses()[dayString] ?? [];
  }

  static updateSavedGuesses(dayString: string, guesses: Guess[]) {
    const allGuesses = this.loadAllGuesses();
    localStorage.setItem(
      "guesses",
      JSON.stringify({
        ...allGuesses,
        [dayString]: guesses,
      })
    );
  }

  static loadAllGameResults(): Record<string, GameResult> {
    const storedGameResults = localStorage.getItem("gameResult");
    if (storedGameResults === null) return {};
    return JSON.parse(storedGameResults);
  }

  static loadGameResultForDay(dayString: string) {
    return this.loadAllGameResults()[dayString] ?? "ONGOING";
  }

  static updateGameResults(dayString: string, gameResult: GameResult) {
    const allGameResults = this.loadAllGuesses();
    localStorage.setItem(
        "gameResult",
        JSON.stringify({
          ...allGameResults,
          [dayString]: gameResult,
        })
    );
  }
}

export function useGameResults(dayString: string) {
  const [gameResultInStorage, setTodaysGameResultInStorageSetter] = useState<GameResult>(
      GuessStorage.loadGameResultForDay(dayString)
  );

  const setTodaysGameResultToLocalStorage = (gameRes: GameResult) => {
    setTodaysGameResultInStorageSetter(gameRes);
    GuessStorage.updateGameResults(dayString, gameRes)
  };


  return {gameResultInStorage: gameResultInStorage, setTodaysGameResultToLocalStorage}

}

export function useGuesses(dayString: string) {
  const [guesses, setGuesses] = useState<Guess[]>(
    GuessStorage.loadGuessesForDay(dayString)
  );

  const addGuess = (guess: Guess) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    GuessStorage.updateSavedGuesses(dayString, newGuesses);
  };

  return {
    guesses,
    addGuess,
  };
}
