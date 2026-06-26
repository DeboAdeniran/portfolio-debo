import { motion } from "framer-motion";
import AtomOrbit from "./AtomOrbit";

const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
    style={{ position: "relative", width: 480, height: 620, flexShrink: 0 }}
  >
    <AtomOrbit />

    <img
      src="/me/profile.png"
      alt="Adebowale Adeniran"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center top",
        borderRadius: "16px",
        position: "relative",
        zIndex: 10,
        display: "block",
      }}
    />
  </motion.div>
);

export default HeroImage;
