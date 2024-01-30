import React from "react";
import Modal from "react-modal";
import {
  GraphCanvas,
  GraphEdge,
  NodePositionArgs,
  GraphNode,
  InternalGraphPosition,
  darkTheme,
} from "reagraph";
import { getDayString } from "../Game";

import { countries } from "../../domain/countries";
import { SettingsData } from "../../hooks/useSettings";
import { strict } from "assert";
import { Guess } from "../../domain/guess";

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
    size: 1,
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

// generate 20 sample nodes
const sampleNodes: GraphNode[] = Array.from({ length: 20 }, (_, i) => ({
  id: `node-${i}`,
  label: `Node ${i}`,
}));

const sampleEdges: GraphEdge[] = sampleNodes.flatMap((node) => {
  const source = node.id;
  const target = sampleNodes[Math.floor(Math.random() * sampleNodes.length)].id;
  const id = `${source}-${target}`;

  return {
    id: id,
    source: source,
    target: target,
  } as GraphEdge;
});

interface HelpProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export default function Help({ isOpen, close, settingsData }: HelpProps) {
  //const country = useCountry(getDayString())[0].name.toLowerCase();
  //colorNodes(country);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={close}
      className="modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          width: "80%",
          height: "80%",
          backgroundColor: "#0f172a",
        },
      }}
    >
      <div className="flex flew-row justify-between margin-auto">
        <h1 className="margin-auto text-bold text-slate-100">Test</h1>
        <button>❌</button>
      </div>
      <div
        style={{
          position: "sticky",
          height: "90%",
          width: "100%",
          margin: "auto",
        }}
      >
        <GraphCanvas
          edgeArrowPosition="none"
          nodes={mapNodes}
          edges={edges}
          layoutType="custom"
          layoutOverrides={{ getNodePosition }}
          // theme={graphTheme}
          theme={darkTheme}
        />
      </div>
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

// Utility functions

function getTodaysGuesses(): string[] {
  const dayString = getDayString();

  const guesses = JSON.parse(localStorage.getItem("guesses") || "{}");
  if (guesses[dayString]) {
    return guesses[dayString].map((guess: Guess) => guess.name);
  }
  return [];
}

function isMobileDevice() {
  return (
    typeof window.matchMedia !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  );
}

function getNodePosition(
  id: string,
  { nodes }: NodePositionArgs
): InternalGraphPosition {
  const node = mapNodes.find((node) => node.id === id);
  return {
    x: (node?.longitude || 0) * 15000,
    y: (node?.latitude || 0) * 15000,
    z: 0,
  } as InternalGraphPosition;
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
