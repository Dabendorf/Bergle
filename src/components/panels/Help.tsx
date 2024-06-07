import React from "react";
import Modal from "react-modal";
import {
  GraphCanvas,
  GraphEdge,
  NodePositionArgs,
  GraphNode,
  InternalGraphPosition,
} from "reagraph";

import { countries } from "../../domain/countries";
import { Guess } from "../../domain/guess";
import { useSharedGameState } from "../../shared/useGame";
import { useTranslation } from "react-i18next";

interface MapNode extends GraphNode {
  latitude: number;
  longitude: number;
  neighbours: string[];
}

const mapNodes: MapNode[] = countries.map((country) => {
  if (!country.latitude || !country.longitude) {
    console.warn("WARNING! ", country);
  }
  return {
    id: country.code,
    label: country.name,
    latitude: country.latitude,
    longitude: country.longitude,
    neighbours: country.neighbours,
  };
});

const mapEdges: GraphEdge[] = [];
for (const node of mapNodes) {
  for (const neighbour of node.neighbours) {
    if (mapEdges.find((edge) => edge.id === `${neighbour}-${node.id}`)) {
      continue;
    }
    mapEdges.push({
      id: `${node.id}-${neighbour}`,
      source: node.id,
      target: neighbour,
    });
  }
}

interface HelpProps {
  isOpen: boolean;
  close: () => void;
}

export default function Help({ isOpen, close }: HelpProps) {
  const {
    state: { country, guesses },
  } = useSharedGameState();
  colorNodes(country.name.toLowerCase(), guesses);

  const { t } = useTranslation();

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
          paddingBottom: "10px",
          backgroundColor: "#0f172a",
        },
      }}
    >
      <div
        style={{
          position: "sticky",
          height: "100%",
          width: "100%",
        }}
      >
        <GraphCanvas
          edgeArrowPosition="none"
          nodes={mapNodes}
          edges={mapEdges}
          layoutType="custom"
          layoutOverrides={{ getNodePosition }}
        />
      </div>
    </Modal>
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

function colorNodes(winner: string, guesses: Guess[]) {
  const todayGuesses = guesses.map((guess: Guess) => guess.name.toLowerCase());
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

