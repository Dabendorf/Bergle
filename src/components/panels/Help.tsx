import React, { useCallback } from "react";
import Modal from "react-modal";
import {
  GraphCanvas,
  GraphEdge,
  NodePositionArgs,
  InternalGraphPosition,
  darkTheme,
  lightTheme,
} from "reagraph";
import { getDayString } from "../Game";

import { MapNode, mapNodes } from "../../domain/neighborhoods";
import { SettingsData } from "../../hooks/useSettings";
import { Guess } from "../../domain/guess";

function colorNodes() {
  const todayGuesses: string[] = getTodaysGuesses().map((guess: string) =>
    guess.toLowerCase()
  );
  for (const guess of todayGuesses) {
    const findNode: MapNode | undefined = mapNodes.find(
      (node) => node.label.toLowerCase() === guess
    );
    if (findNode) {
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
      x: node.lon * 1500,
      y: node.lat * 1500,
      z: 1,
    } as InternalGraphPosition;
  }
  return {} as InternalGraphPosition;
}

const edges: GraphEdge[] = mapNodes.flatMap((node) => {
  return node.neighborsIds.map((nbId) => {
    const src = node.id;
    const target = nbId;
    const id = `${src}-${target}`;

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
  return guesses[dayString].map((guess: Guess) => guess.name);
}

interface HelpProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export default function Help({ isOpen, close, settingsData }: HelpProps) {
  colorNodes();
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
