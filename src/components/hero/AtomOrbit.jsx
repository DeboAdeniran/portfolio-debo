import OrbitBadge from "./OrbitBadge";

const SEMI_MAJOR = 340;
const SEMI_MINOR = 78;
const RING_1 = 30;
const RING_2 = -30;
const SVG_SIZE = (SEMI_MAJOR + 80) * 2;

const OrbitRing = ({ angle, color }) => {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return (
    <ellipse
      cx={SVG_SIZE / 2}
      cy={SVG_SIZE / 2}
      rx={SEMI_MAJOR}
      ry={SEMI_MINOR}
      transform={`rotate(${angle}, ${SVG_SIZE / 2}, ${SVG_SIZE / 2})`}
      stroke={`rgba(${r}, ${g}, ${b}, 0.18)`}
      strokeWidth="1"
      fill="none"
      strokeDasharray="5 9"
    />
  );
};

const AtomOrbit = ({ centerY = "42%" }) => (
  <div
    style={{
      position: "absolute",
      top: centerY,
      left: "50%",
      width: 0,
      height: 0,
    }}
  >
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
        width: SVG_SIZE,
        height: SVG_SIZE,
        zIndex: 5,
        pointerEvents: "none",
        overflow: "visible",
      }}
    >
      <OrbitRing angle={RING_1} color="#39FF14" />
      <OrbitRing angle={RING_2} color="#00FFCC" />
    </svg>

    <OrbitBadge
      label="Backend Developer"
      semiMajor={SEMI_MAJOR}
      semiMinor={SEMI_MINOR}
      ringAngle={RING_1}
      initialAngle={0}
      duration={11}
      color="#39FF14"
    />
    <OrbitBadge
      label="Full-Stack"
      semiMajor={SEMI_MAJOR}
      semiMinor={SEMI_MINOR}
      ringAngle={RING_2}
      initialAngle={Math.PI}
      duration={11}
      color="#00FFCC"
    />
  </div>
);

export default AtomOrbit;
