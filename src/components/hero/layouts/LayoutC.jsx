import { motion } from "framer-motion";
import FloatingBadge from "../FloatingBadge";
import useIsMobile from "../../../hooks/useIsMobile";

const TEXT_STYLE = {
  fontFamily: "'Clash Display', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(2.6rem, 10.5vw, 11rem)",
  lineHeight: 0.88,
  letterSpacing: "0.06em",
  userSelect: "none",
};

const LayoutC = () => {
  const isMobile = useIsMobile();
  const stroke = isMobile ? "1.5px" : "2.5px";

  return (
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

      {/* ── Layer 2: image ── */}
      <div
        style={{
          position: "absolute",
          top: isMobile ? "6vh" : "8vh",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "92vw" : "58vw",
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

      {/* ── Floating badges ── */}
      <FloatingBadge
        label="Backend Developer"
        color="#39FF14"
        delay={0}
        style={
          isMobile
            ? { left: "4vw", top: "14vh" }
            : { left: "13vw", top: "22vh" }
        }
      />
      <FloatingBadge
        label="Full-Stack"
        color="#00FFCC"
        delay={1.4}
        style={
          isMobile
            ? { right: "4vw", bottom: "25vh" }
            : { right: "13vw", bottom: "22vh" }
        }
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
            WebkitTextStroke: `${stroke} rgba(255,255,255,0.55)`,
          }}
        >
          ADEBOWALE
        </h1>
        <h1
          style={{
            ...TEXT_STYLE,
            color: "transparent",
            WebkitTextStroke: `${stroke} rgba(255,255,255,0.55)`,
          }}
        >
          <span
            style={{
              WebkitTextStroke: `${stroke} rgba(57,255,20,0.65)`,
              color: "transparent",
            }}
          >
            (DEBO)
          </span>{" "}
          ADENIRAN.
        </h1>
      </div>

      {/* ── Bottom gradient — ensures bio is readable over the image ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, transparent 100%)",
          zIndex: 18,
          pointerEvents: "none",
        }}
      />

      {/* ── Bio — bottom ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-8 left-0 right-0 text-center"
        style={{ zIndex: 20, padding: isMobile ? "0 6vw" : 0 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <div style={{ width: "28px", height: "1px", background: "#39FF14" }} />
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#39FF14",
            }}
          />
          <div style={{ width: "28px", height: "1px", background: "#39FF14" }} />
        </div>
        <p
          style={{
            color: "#ffffff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "0.88rem" : "1rem",
            letterSpacing: "0.04em",
            fontWeight: 500,
          }}
        >
          Engineering the back, designing the front.
        </p>
        <p
          style={{
            color: "#e2e8f0",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: isMobile ? "0.78rem" : "0.88rem",
            letterSpacing: "0.02em",
            fontStyle: "italic",
            marginTop: "6px",
          }}
        >
          I make both ends talk to each other.
        </p>
      </motion.div>
    </section>
  );
};

export default LayoutC;
