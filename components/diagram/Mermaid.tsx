"use client";

import mermaid from "mermaid";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

mermaid.initialize({
  startOnLoad: false,
});

type MermaidProps = {
  readonly chart: string;
};

const Mermaid = ({ chart }: MermaidProps): JSX.Element => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const uniqueId = `mermaid-${uuidv4()}`;

  useEffect(() => {
    const renderMermaidChart = async () => {
      if (chartRef.current) {
        try {
          const { svg } = await mermaid.render(uniqueId, chart);
          chartRef.current.innerHTML = svg;
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error("Mermaid rendering failed:", error);
        }
      }
    };

    renderMermaidChart();
  }, [chart, uniqueId]);

  return <div ref={chartRef} className="mermaid" />;
};

export default Mermaid;
