import React from "react";
import { Panel } from "./Panel";
import {
  GraphCanvas,
  GraphNode,
  GraphEdge,
  NodePositionArgs,
  InternalGraphPosition,
} from "reagraph";
import { bergenNodes } from "../../domain/neighborhoods";

const nodes: GraphNode[] = bergenNodes.map((bgnode) => ({
  id: bgnode.id,
  label: bgnode.name,
}));
const edges: GraphEdge[] = [];

function getNodeCoordinates(nodeId: string): InternalGraphPosition {
  const node = bergenNodes.find((n) => n.id === nodeId);
  if (node) {
    return {
      x: node.lon * 1500,
      y: node.lat * 1500,
      z: 1,
    } as InternalGraphPosition;
  }
  return {} as InternalGraphPosition;
}

for (const bgnode of bergenNodes) {
  for (const nbId of bgnode.neighborsIds) {
    const src = nbId;
    const target = bgnode.id;
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
            nodes={nodes}
            edges={edges}
            onCanvasClick={() => close()}
            layoutType="custom"
            layoutOverrides={{
              getNodePosition: (
                id: string,
                args: NodePositionArgs
              ): InternalGraphPosition => {
                const coords = getNodeCoordinates(id);
                return coords;
              },
            }}
          />
        </div>
      </div>
    </Panel>
  );
}
