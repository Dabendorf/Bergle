import { DIRECTION_ARROWS } from "../components/GuessRow";
import { DistanceUnits } from "../hooks/useSettings";
const MAX_DISTANCE_ON_EARTH = 32414.604895;

export type Direction =
  | "S"
  | "W"
  | "NNE"
  | "NE"
  | "ENE"
  | "E"
  | "ESE"
  | "SE"
  | "SSE"
  | "SSW"
  | "SW"
  | "WSW"
  | "WNW"
  | "NW"
  | "NNW"
  | "N";

export function computeProximityPercent(distance: number): number {
  const proximity = Math.max(MAX_DISTANCE_ON_EARTH - distance, 0);
  return Math.round((proximity / MAX_DISTANCE_ON_EARTH) * 100);
}

export function generateSquareCharacters(
  proximity: number,
  theme: "light" | "dark",
  direction: Direction
): string[] {
  const characters = new Array<string>(5);
  const greenSquareCount = Math.floor(proximity / 20);
  const yellowSquareCount = proximity - greenSquareCount * 20 >= 10 ? 1 : 0;

  characters.fill("🟩", 0, greenSquareCount);
  characters.fill("🟨", greenSquareCount, greenSquareCount + yellowSquareCount);
  characters.fill(
    theme === "light" ? "⬜" : "⬛",
    greenSquareCount + yellowSquareCount
  );
  characters.push(proximity !== 100 ? DIRECTION_ARROWS[direction] : "🎉");

  return characters;
}

const roundTo = function (num: number, places: number) {
  const factor = 10 ** places;
  return Math.round(num * factor) / factor;
};

export function formatDistance(distanceInMeters: number, unit: DistanceUnits) {
  let distance = distanceInMeters / 1000;
  if (unit === "miles") {
    distance = distanceInMeters / 1609;
  }
  return `${roundTo(distance, 2)}${unit}`;
}
