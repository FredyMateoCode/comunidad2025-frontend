//Hooks para ocultar el encabezado ocultar y aparecer
import { useState, useEffect } from 'react';

const useScroll = () => {
  const [showEncabezado, setShowEncabezado] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Ocultar el encabezado cuando el scroll sea mayor a 100px
      if (window.scrollY > 100) {
        setShowEncabezado(false);
      } else {
        setShowEncabezado(true);
      }
    };

    // Agregar el listener para el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return showEncabezado; // Retornamos el estado para usarlo en el componente
};

export default useScroll;