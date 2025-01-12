import { DIRECTION_ARROWS } from "../components/GuessRow";
import { DistanceUnits } from "../hooks/useSettings";
import { Country } from "./countries";
const MAX_DISTANCE_ON_EARTH = 32414.604895;

export type Direction =
  | "S"
  | "W"
  | "NE"
  | "E"
  | "SE"
  | "SW"
  | "NW"
  | "N"
  | "ERROR";

export function computeProximityPercent(distance: number): number {
  const proximity = Math.max(MAX_DISTANCE_ON_EARTH - distance, 0);
  return Math.round((proximity / MAX_DISTANCE_ON_EARTH) * 100);
}

export function getNodeDistance(guessCode: string, targetCode: string, countries: Country[]): number {
  if (guessCode === targetCode) return 0;

  const neighborMap: Record<string, string[]> = {};
  countries.forEach(country => {
    neighborMap[country.code] = country.neighbours;
  });

  const visited = new Set<string>();
  const queue: [string, number][] = [[guessCode, 0]]; // [currentNode, currentDistance]

  while (queue.length > 0) {
    const [currentNode, distance] = queue.shift()!;

    // If the current node is the destination, return the distance
    if (currentNode === targetCode) {
      return distance;
    }

    // Mark the current node as visited
    visited.add(currentNode);

    // Add unvisited neighbors to the queue
    for (const neighbor of neighborMap[currentNode] || []) {
      if (!visited.has(neighbor)) {
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  // If no path exists, return -1
  return -1;
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

export function getDirectionFromAToB(x1: number, y1: number, x2: number, y2: number) {
	const diffX = x2 - x1
	const diffY = y2 - y1
	const angleInRadians: number = Math.atan2(diffX, diffY)
	const angleInDegrees: number = (angleInRadians * (180 / Math.PI) + 360) % 360

	return degreeToDirection(angleInDegrees)
}

function degreeToDirection(degree: number): Direction {
	if (360 - 22.5 <= degree || degree < 22.5) {
		return "N"
	}
	if (22.5 <= degree && degree < 22.5 + 45 * 1) {
		return "NE"
	}
	if (22.5 + 45 * 1 <= degree && degree < 22.5 + 45 * 2) {
		return "E"
	}
	if (22.5 + 45 * 2 <= degree && degree < 22.5 + 45 * 3) {
		return "SE"
	}
	if (22.5 + 45 * 3 <= degree && degree < 22.5 + 45 * 4) {
		return "S"
	}
	if (22.5 + 45 * 4 <= degree && degree < 22.5 + 45 * 5) {
		return "SW"
	}
	if (22.5 + 45 * 5 <= degree && degree < 22.5 + 45 * 6) {
		return "W"
	}
	if (22.5 + 45 * 6 <= degree && degree < 22.5 + 45 * 7) {
		return "NW"
	}
	return "ERROR"
}