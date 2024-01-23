import React from "react";
import Modal from "react-modal";
import {
  GraphCanvas,
  GraphNode,
  GraphEdge,
  NodePositionArgs,
  InternalGraphPosition,
  darkTheme,
} from "reagraph";

import { mapNodes } from "../../domain/neighborhoods";
import { SettingsData } from "../../hooks/useSettings";

function getNodePosition(
  id: string,
  nodes: NodePositionArgs
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

interface HelpProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export default function Help({ isOpen, close, settingsData }: HelpProps) {
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
        theme={settingsData.theme === "dark" ? darkTheme : undefined}
      />
    </Modal>
  );
}
