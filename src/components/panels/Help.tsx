import React from "react";
import { Panel } from "./Panel";
import {
  GraphCanvas,
  GraphNode,
  GraphEdge,
  NodePositionArgs,
  InternalGraphPosition,
} from "reagraph";

import { mapNodes } from "../../domain/neighborhoods";

const edges: GraphEdge[] = [];

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

for (const mapNode of mapNodes) {
  for (const nbId of mapNode.neighborsIds) {
    const src = nbId;
    const target = mapNode.id;
    const id = `${src}-${target}`;
    const revId = `${target}-${src}`;

    if (!edges.find((e) => e.id === id)) {
      edges.push({
        id: id,
        source: src,
        target: target,
      });
    }

    if (!edges.find((e) => e.id === revId)) {
      edges.push({
        id: revId,
        source: target,
        target: src,
      });
    }
  }
}

interface HelpProps {
  isOpen: boolean;
  close: () => void;
}

export default function Help({ isOpen, close }: HelpProps) {
  return (
    <Panel title="Help" isOpen={isOpen} close={close}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Hjelp</h1>
        <p className="text-lg">Hjelp kommer</p>
        <div style={{ width: "500px", height: "500px" }}>
          <GraphCanvas
            nodes={mapNodes}
            edges={edges}
            onCanvasClick={() => close()}
            layoutType="custom"
            layoutOverrides={{ getNodePosition }}
          />
        </div>
      </div>
    </Panel>
  );
}
