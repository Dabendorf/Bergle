import React from "react";
// import { formatDistance } from "../../domain/geography";
import { getStatsData } from "../../domain/stats";
import { Panel } from "./Panel";

interface StatsProps {
  isOpen: boolean;
  close: () => void;
  distanceUnit: "km" | "miles";
}

export function Stats({ isOpen, close, distanceUnit }: StatsProps) {
  const {
    played,
    winRatio,
    currentStreak,
    maxStreak,
    // averageBestDistance,
    guessDistribution,
  } = getStatsData();

  const maxDistribution = Math.max(...Object.values(guessDistribution));
  return (
    <Panel title={"Statistikk"} isOpen={isOpen} close={close}>
      <div className="flex justify-center">
        <StatsTile value={played} name={"Ganger spilt"} />
        <StatsTile value={Math.round(winRatio * 100)} name={"Vinnerprosent"} />
        <StatsTile value={currentStreak} name={"Nåværende seiersrekke"} />
        <StatsTile value={maxStreak} name={"Lengste seiersrekke"} />
      </div>
      <div>
        <h3 className="text-xl font-bold">{"Antall forsøk"}</h3>
        <ul className="mx-1">
          {Object.entries(guessDistribution).map(([index, count]) => (
            <li key={index} className="my-2 flex">
              <div className="mr-1 font-bold">{index}</div>
              <div
                className="bg-green-600"
                style={{
                  flex: `0 1 ${Math.round((count / maxDistribution) * 100)}%`,
                }}
              />
              <div className="px-1 bg-green-600 text-slate-100 font-bold">
                {count}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="flex justify-center m-6">
        <div className="flex flex-col m-2">
          <p className="text-4xl font-bold text-center">
            {formatDistance(averageBestDistance, distanceUnit)}
          </p>
          <p className="text-lg text-center">
            {"Gjennomsnittlig korteste avstand"}
          </p>
        </div>
      </div> */}
    </Panel>
  );
}

interface StatsTileProps {
  value: number;
  name: string;
}

function StatsTile({ value, name }: StatsTileProps) {
  return (
    <div className="flex flex-col m-2 max-w-min">
      <p className="text-3xl font-bold text-center">{value}</p>
      <p className="text-center">{name}</p>
    </div>
  );
}
