import React from "react";
import { Panel } from "./Panel";

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
      </div>
    </Panel>
  );
}
