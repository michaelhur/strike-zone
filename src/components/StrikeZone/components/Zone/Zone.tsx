type ZoneProps = {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    stroke: string;
    fill: string;
};

export const Zone = ({ xMin, xMax, yMin, yMax, stroke = 'var(--grey700)', fill }: ZoneProps) => {
    const width = xMax - xMin;
    const height = yMin - yMax;
    const yQ2 = yMin - height / 3;
    const yQ3 = yMax + height / 3;

    return (
        <>
            <line x1={width / 3} x2={width / 3} y1={yMin} y2={yMax} stroke={stroke} width={2} />
            <line x1={(width * 2) / 3} x2={(width * 2) / 3} y1={yMin} y2={yMax} stroke={stroke} width={2} />
            <line x1={0} x2={width} y1={yQ2} y2={yQ2} stroke={stroke} width={2} />
            <line x1={0} x2={width} y1={yQ3} y2={yQ3} stroke={stroke} width={2} />
            <rect x={0} y={yMax} width={width} height={height} stroke={stroke} strokeWidth={2} fill={fill} />
        </>
    );
};
