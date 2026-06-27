// Partial hexagon fragment — neon + teal sides, burgundy anchor dot
const LogoMark = ({ size = 36 }) => (
  <svg
    width={size * 0.9}
    height={size}
    viewBox="0 0 32 36"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M16 2 L30 10 L30 26 L16 34"
      stroke="#39FF14"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 2 L2 10 L2 26"
      stroke="#00FFCC"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16" cy="2" r="3" fill="#7C1D34" />
    <circle cx="16" cy="2" r="1.4" fill="#39FF14" />
  </svg>
)

export default LogoMark
