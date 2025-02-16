// componentes/Animaciones.jsx
import { motion } from "framer-motion";

const Animaciones = ({ children, animationType }) => {
  const animations = {
    fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.5 } },
    slideInLeft: { initial: { x: -100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 1.2, ease: "easeOut" } },
    slideInRight: { initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 1.2 } },
    zoomIn: { initial: { scale: 0.5, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, transition: { duration: 1 } },
    bounce: { initial: { y: -50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: { type: "spring", stiffness: 100 } },
  };
  return <motion.div {...animations[animationType]} viewport={{ once: true }}>{children}</motion.div>;
};

export default Animaciones;
