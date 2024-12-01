"use client";

import mermaid from "mermaid";
import { useEffect } from "react";

mermaid.initialize({
  startOnLoad: true,
});

type MermaidProps = {
  readonly chart: string;
};

const Mermaid = ({ chart }: MermaidProps): JSX.Element => {
  useEffect(() => mermaid.contentLoaded(), []);

  return <div className="mermaid">{chart}</div>;
};

export default Mermaid;
