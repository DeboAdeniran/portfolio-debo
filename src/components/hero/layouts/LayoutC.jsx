import { motion } from "framer-motion";
import FloatingBadge from "../FloatingBadge";

const TEXT_STYLE = {
  fontFamily: "'Clash Display', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(2.6rem, 10.5vw, 11rem)",
  lineHeight: 0.88,
  letterSpacing: "0.06em",
  userSelect: "none",
};

const LayoutC = () => (
  /*
    overflow-hidden is intentionally removed from the section —
    it was clipping orbit badges at the edges.
    Image crop is handled by its own inner overflow:hidden wrapper.
    overflowX: hidden on the section prevents horizontal scrollbars only.
  */
  <section
    className="relative min-h-screen flex items-center justify-center"
    style={{ overflowX: "hidden" }}
  >
    {/* ── Layer 1: solid text — centered, behind image ── */}
    <div
      className="absolute inset-0 flex flex-col justify-center px-[4vw] pointer-events-none"
      style={{ zIndex: 2 }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        style={{ ...TEXT_STYLE, color: "#ffffff" }}
      >
        ADEBOWALE
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.08 }}
        style={{ ...TEXT_STYLE }}
      >
        <span style={{ color: "#39FF14" }}>(DEBO)</span>{" "}
        <span style={{ color: "#ffffff" }}>ADENIRAN.</span>
      </motion.h1>
    </div>

    {/* ── Layer 2: fills from top offset down to section bottom ── */}
    <div
      style={{
        position: "absolute",
        top: "8vh",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "58vw",
        overflow: "hidden",
        zIndex: 10,
      }}
    >
      <img
        src="/me/profile.png"
        alt="Adebowale Adeniran"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 15%",
          display: "block",
          position: "relative",
          zIndex: 10,
        }}
      />
    </div>

    {/* ── Floating badges — top-left and bottom-right of image ── */}
    <FloatingBadge
      label="Backend Developer"
      color="#39FF14"
      delay={0}
      style={{ left: '13vw', top: '22vh' }}
    />
    <FloatingBadge
      label="Full-Stack"
      color="#00FFCC"
      delay={1.4}
      style={{ right: '13vw', bottom: '22vh' }}
    />

    {/* ── Layer 3: hollow outline text ── */}
    <div
      className="absolute inset-0 flex flex-col justify-center px-[4vw] pointer-events-none"
      style={{ zIndex: 15 }}
    >
      <h1
        style={{
          ...TEXT_STYLE,
          color: "transparent",
          WebkitTextStroke: "2.5px rgba(255,255,255,0.55)",
        }}
      >
        ADEBOWALE
      </h1>
      <h1
        style={{
          ...TEXT_STYLE,
          color: "transparent",
          WebkitTextStroke: "2.5px rgba(255,255,255,0.55)",
        }}
      >
        <span
          style={{
            WebkitTextStroke: "2.5px rgba(57,255,20,0.65)",
            color: "transparent",
          }}
        >
          (DEBO)
        </span>{" "}
        ADENIRAN.
      </h1>
    </div>

    {/* ── Bio — bottom ── */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute bottom-8 left-0 right-0 text-center"
      style={{ zIndex: 20 }}
    >
      <p
        style={{
          color: "#d1d5db",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
          letterSpacing: "0.02em",
        }}
      >
        A Full-Stack Developer skilled in{" "}
        <span style={{ color: "#00FFCC" }}>React.js</span>,{" "}
        <span style={{ color: "#00FFCC" }}>TailwindCSS</span>,{" "}
        <span style={{ color: "#00FFCC" }}>SQL</span>, and{" "}
        <span style={{ color: "#00FFCC" }}>Java</span>.
      </p>
    </motion.div>
  </section>
);

export default LayoutC;
