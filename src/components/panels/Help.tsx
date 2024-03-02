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
          width: isMobileDevice() ? "100%": "80%",
          height:isMobileDevice() ? "100%": "80%",
          paddingBottom: "10px",
          backgroundColor: "#0f172a",
        },
      }}
    >
      <div className="flex flew-row justify-between margin-auto mb-0 pb-2">
        <h1 className="margin-auto font-bold text-slate-100 p-4">
        {t("mapTitle")}
        </h1>
        <button className="margin-auto p-4" onClick={close}>
          ❌
        </button>
      </div>
      <p className="text-slate-100 px-4 pb-4">
        {isMobileDevice()
          ? t("mapMobileWarning")
          : ""}
      </p>
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
          theme={graphTheme}
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
  //console.log(node);
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
