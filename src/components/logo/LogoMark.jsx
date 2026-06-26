const LogoMark = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Burgundy rounded square base */}
    <rect width="36" height="36" rx="7" fill="#7C1D34" />

    {/* Abstract D cut from the square as negative space */}
    {/* Vertical stem */}
    <rect x="10" y="9" width="4" height="18" rx="1.5" fill="#0a0a0a" />
    {/* Curved arc — D bowl, formed by a circle masked to the right half */}
    <path
      d="M14 9 Q26 9 26 18 Q26 27 14 27"
      stroke="#0a0a0a"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    {/* Small gap detail — gives it an abstract, unfinished feel */}
    <circle cx="26" cy="18" r="2.5" fill="#7C1D34" />
  </svg>
)

export default LogoMark
