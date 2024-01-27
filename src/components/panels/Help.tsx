import React from "react";
import Modal from "react-modal";
import {
  GraphCanvas,
  GraphEdge,
  NodePositionArgs,
  InternalGraphPosition,
  darkTheme,
  lightTheme,
  GraphNode,
} from "reagraph";
import { getDayString } from "../Game";

import { Country, countries } from "../../domain/countries";
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
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0)" } }}
    >
      <GraphCanvas
        edgeArrowPosition="none"
        nodes={mapNodes}
        edges={edges}
        onCanvasClick={() => close()}
        layoutType="custom"
        layoutOverrides={{ getNodePosition }}
        theme={graphTheme}
        // theme={settingsData.theme === "dark" ? darkTheme : lightTheme}
      />
    </Modal>
  );
}

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
      // TODO: Formulate a different basis and apply to coordinates.
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
    const findNode: MapNode | undefined = mapNodes.find(
      (node: MapNode) => node.label!.toLowerCase() === guess
    );
    if (findNode) {
      if (findNode.label!.toLowerCase() === winner) {
        findNode.fill = "green";
        continue;
      }
      findNode.fill = "red";
    }
  }
}
