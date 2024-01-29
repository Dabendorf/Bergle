import React from "react";
import Modal from "react-modal";
import {
  GraphCanvas,
  GraphEdge,
  NodePositionArgs,
  InternalGraphPosition,
  GraphNode,
} from "reagraph";
import { getDayString } from "../Game";

import { countries } from "../../domain/countries";
import { SettingsData } from "../../hooks/useSettings";
import { Guess } from "../../domain/guess";
import { useCountry } from "../../hooks/useCountry";

interface MapNode extends GraphNode {
  latitude: number;
  longitude: number;
  neighbours: string[];
}

const mapNodes: MapNode[] = countries.map((country) => {
  return {
    id: country.code,
    label: country.name,
    latitude: country.latitude,
    longitude: country.longitude,
    neighbours: country.neighbours,
  } as MapNode;
});

const edges: GraphEdge[] = mapNodes.flatMap((node) => {
  return node.neighbours.map((neighbor) => {
    const source = node.id;
    const target = neighbor;
    const id = `${source}-${target}`;

    return {
      id: id,
      source: source,
      target: target,
    } as GraphEdge;
  });
});

interface HelpProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

Modal.setAppElement("#root");

export default function Help({ isOpen, close, settingsData }: HelpProps) {
  const country = useCountry(getDayString())[0].name.toLowerCase();
  colorNodes(country);

  return (
    <Modal
      isOpen={isOpen}
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0)" },
        content: { backgroundColor: "#0f172a", border: "none" },
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#0f172a",
        }}
      >
        <div className="text-slate-100 text-bold justify-end flex space-x-20 w-full ml-30 ">
          <div className=" w-full text-xl">Kart over bergen</div>
          <button className="" onClick={close}>
            ❌
          </button>
        </div>
        <div
          style={{
            border: "1px solid #fcd9bd",
            borderRadius: "2px",
            width: "1100px",
            height: "500px",
            position: "relative",
            marginBottom: "5px",
          }}
        >
          <Graph />
        </div>
      </div>
    </Modal>
  );
}

const Graph = () => (
  <GraphCanvas
    edgeArrowPosition="none"
    nodes={mapNodes}
    edges={edges}
    layoutType="custom"
    layoutOverrides={{ getNodePosition }}
    theme={graphTheme}
    // theme={settingsData.theme === "dark" ? darkTheme : lightTheme}
  />
);

const graphTheme = {
  canvas: { background: "#0f172a" }, // Navy Blue
  node: {
    fill: "#f2a900", // Yellow
    activeFill: "#1DE9AC",
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.2,
    label: {
      color: "#fff",
      stroke: "#000000",
      activeColor: "#1DE9AC",
    },
    subLabel: {
      color: "#000000",
      stroke: "transparent",
      activeColor: "#1DE9AC",
    },
  },
  lasso: {
    border: "1px solid #55aaff",
    background: "rgba(75, 160, 255, 0.1)",
  },
  ring: {
    fill: "#D8E6EA",
    activeFill: "#1DE9AC",
  },
  edge: {
    fill: "#D8E6EA",
    activeFill: "#1DE9AC",
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.1,
    label: {
      stroke: "#fff",
      color: "#2A6475",
      activeColor: "#1DE9AC",
      fontSize: 6,
    },
  },
  arrow: {
    fill: "#D8E6EA",
    activeFill: "#1DE9AC",
  },
  cluster: {
    stroke: "#D8E6EA",
    opacity: 1,
    selectedOpacity: 1,
    inactiveOpacity: 0.1,
    label: {
      stroke: "#fff",
      color: "#2A6475",
    },
  },
};
/*
 # Utility functions
 */

function getTodaysGuesses(): string[] {
  const dayString = getDayString();

  const guesses = JSON.parse(localStorage.getItem("guesses") || "{}");
  if (guesses[dayString]) {
    return guesses[dayString].map((guess: Guess) => guess.name);
  }
  return [];
}

function getNodePosition(
  id: string,
  { nodes }: NodePositionArgs
): InternalGraphPosition {
  const node = mapNodes.find((n) => n.id === id);
  if (node) {
    return {
      x: node.longitude * 12000,
      y: node.latitude * 12000,
      z: 1,
    } as InternalGraphPosition;
  }
  return {} as InternalGraphPosition;
}

function colorNodes(winner: string) {
  const todayGuesses: string[] = getTodaysGuesses().map((guess: string) =>
    guess.toLowerCase()
  );
  for (const guess of todayGuesses) {
    const findNode: MapNode | undefined = mapNodes.find((node: MapNode) => {
      if (node.label) {
        return node.label.toLowerCase() === guess;
      }
      return [];
    });
    if (findNode) {
      if (findNode.label) {
        if (findNode.label.toLowerCase() === winner) {
          findNode.fill = "green";
          continue;
        }
      }
      findNode.fill = "red";
    }
  }
}
