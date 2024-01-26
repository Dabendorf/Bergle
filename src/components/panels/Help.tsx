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

class MapNode implements GraphNode {
  code: string;
  name: string;
  longitude: number;
  latitude: number;
  district: string;
  neighbours: string[];
  fill = "white";

  constructor(country: Country) {
    this.code = country.code;
    this.longitude = country.longitude;
    this.latitude = country.latitude;
    this.name = country.name;
    this.district = country.district;
    this.neighbours = country.neighbours;
  }

  get id(): string {
    return this.code;
  }

  get label(): string {
    return this.name;
  }
}

const graphNodes: GraphNode[] = countries.map(
  (country) => ({ label: country.name, id: country.code } as GraphNode)
);

const mapNodes = countries.map((country) => new MapNode(country));

function colorNodes(winner: string) {
  const todayGuesses: string[] = getTodaysGuesses().map((guess: string) =>
    guess.toLowerCase()
  );
  for (const guess of todayGuesses) {
    const findNode: MapNode | undefined = mapNodes.find(
      (node) => node.label.toLowerCase() === guess
    );
    if (findNode) {
      if (findNode.label.toLowerCase() === winner) {
        findNode.fill = "green";
        continue;
      }
      findNode.fill = "red";
    }
  }
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

const edges: GraphEdge[] = mapNodes.flatMap((node) => {
  return node.neighbours.map((nbId) => {
    console.log("mapping from ", node.id, " to ", nbId);
    const src = node.id;
    const target = nbId;
    const id = `${src}-${target}`;

    if (edges.find((e) => e.id === id)) {
      return {} as GraphEdge;
    }

    return {
      id: id,
      source: src,
      target: target,
    } as GraphEdge;
  });
});

function getTodaysGuesses(): string[] {
  const dayString = getDayString();

  const guesses = JSON.parse(localStorage.getItem("guesses") || "{}");
  if (guesses[dayString]) {
    return guesses[dayString].map((guess: Guess) => guess.name);
  }
  return [];
}

interface HelpProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

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
        nodes={graphNodes}
        edges={edges}
        onCanvasClick={() => close()}
        layoutType="custom"
        layoutOverrides={{ getNodePosition }}
        theme={settingsData.theme === "dark" ? darkTheme : lightTheme}
      />
    </Modal>
  );
}
