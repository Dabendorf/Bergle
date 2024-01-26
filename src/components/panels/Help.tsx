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
        theme={settingsData.theme === "dark" ? darkTheme : lightTheme}
      />
    </Modal>
  );
}

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
