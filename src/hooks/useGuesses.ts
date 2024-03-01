import { useState } from "react";
import { Guess } from "../domain/guess";

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
