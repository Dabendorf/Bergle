import React from "react";
import { Panel } from "./Panel";
import { GraphCanvas, GraphNode, GraphEdge } from "reagraph";

interface Node {
  id: number;
  label: string;
}

interface Edge {
  from: number;
  to: number;
  id: number;
}

const nodes: GraphNode[] = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
];

const edges: GraphEdge[] = [{ source: "1", target: "2", id: "1" }];

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
        <GraphCanvas nodes={nodes} edges={edges} />
      </div>
    </Panel>
  );
}
