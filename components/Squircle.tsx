import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  width?: string | number;
  height?: string | number;
  color?: string;
  smoothness?: number;
}

const Squircle = ({
  width = 200,
  height = 200,
  color = "white",
  smoothness = 0,
  children,
}: Props) => {
  const w = typeof width === "number" ? width : parseInt(width || "200", 10);
  const h = typeof height === "number" ? height : parseInt(height || "200", 10);

  const clipPathId = React.useId();

  const cornerRadius = 20;

  const pathData = `
    M ${cornerRadius},0
    L ${w - cornerRadius},0 
    C ${w - cornerRadius + smoothness},0 ${w},0 ${w},${cornerRadius}
    L ${w},${h - cornerRadius}
    C ${w},${h - cornerRadius + smoothness} ${w},${h} ${w - cornerRadius},${h}
    L ${cornerRadius},${h}
    C ${cornerRadius - smoothness},${h} 0,${h} 0,${h - cornerRadius}
    L 0,${cornerRadius}
    C 0,${cornerRadius - smoothness} 0,0 ${cornerRadius},0
  `;

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={clipPathId}>
          <path d={pathData} />
        </clipPath>
      </defs>
      <rect
        width="100%"
        height="100%"
        fill={color}
        clipPath={`url(#${clipPathId})`}
      />
      <foreignObject
        x="0"
        y="0"
        width={w}
        height={h}
        clipPath={`url(#${clipPathId})`}
      >
        <div style={{ width: "100%", height: "100%" }}>{children}</div>
      </foreignObject>
    </svg>
  );
};

export default Squircle;
