import React from "react";
import { Panel } from "./panels/Panel";

interface HelpProps {
  isOpen: boolean;
  close: () => void;
}

export function Help({ isOpen, close }: HelpProps) {
  return (
    <Panel title="hjelp" isOpen={isOpen} close={close}>
      <p>Hjelp kommer</p>
    </Panel>
  );
}
