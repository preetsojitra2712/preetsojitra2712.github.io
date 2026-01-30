type MiniDiagramProps = {
  steps: string[];
};

export function MiniDiagram({ steps }: MiniDiagramProps) {
  const width = 420;
  const height = 80;
  const gap = 12;
  const boxWidth = (width - gap * (steps.length - 1)) / steps.length;

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label="Architecture diagram"
    >
      {steps.map((step, index) => {
        const x = index * (boxWidth + gap);
        return (
          <g key={step}>
            <rect
              x={x}
              y={16}
              width={boxWidth}
              height={48}
              rx={10}
              fill="rgba(34,211,238,0.08)"
              stroke="rgba(255,255,255,0.2)"
            />
            <text
              x={x + boxWidth / 2}
              y={44}
              textAnchor="middle"
              fill="rgba(255,255,255,0.8)"
              fontSize="10"
              fontFamily="sans-serif"
            >
              {step}
            </text>
            {index < steps.length - 1 ? (
              <line
                x1={x + boxWidth}
                y1={40}
                x2={x + boxWidth + gap}
                y2={40}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
              />
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
