// componentes/Animaciones.jsx
import { motion } from "framer-motion";

const Animaciones = ({ children, animationType }) => {
  const animations = {
    fadeIn: { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.5 } },
    slideInLeft: { initial: { x: -100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 1.2, ease: "easeOut" } },
    slideInRight: { initial: { x: 100, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 1.2 } },
    zoomIn: { initial: { scale: 0.5, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, transition: { duration: 1 } },
    bounce: { initial: { y: -50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: { type: "spring", stiffness: 100 } },
    
    // Nuevas animaciones
    rotateIn: { initial: { rotate: 90, opacity: 0 }, whileInView: { rotate: 0, opacity: 1 }, transition: { duration: 1 } },
    flipInX: { initial: { rotateX: 90, opacity: 0 }, whileInView: { rotateX: 0, opacity: 1 }, transition: { duration: 1 } },
    flipInY: { initial: { rotateY: 90, opacity: 0 }, whileInView: { rotateY: 0, opacity: 1 }, transition: { duration: 1 } },
    pulse: { initial: { scale: 0.9, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, transition: { duration: 0.6, repeat: 1, repeatType: "reverse" } },
    wiggle: { initial: { rotate: -5 }, whileInView: { rotate: [0, -5, 5, -5, 0], opacity: 1 }, transition: { duration: 0.5 } },
    fadeInUp: { initial: { y: 50, opacity: 0 }, whileInView: { y: 0, opacity: 1 }, transition: { duration: 2.0 } },
    scaleUp: { initial: { scale: 0.8, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, transition: { type: "spring", stiffness: 80 } },

  };
  return <motion.div {...animations[animationType]} viewport={{ once: true }}>{children}</motion.div>;
};

export default Animaciones;
