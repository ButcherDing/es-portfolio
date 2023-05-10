import { useEffect, useState } from "react";

const useCursorPosition = () => {

  const [y, setY] = useState(0)
  const [x, setX] = useState(0)

  useEffect(()=> {

    const listener = (e: MouseEvent) => {
      setY(e.clientY)
      setX(e.clientX)
    }

    window.addEventListener('mousemove', listener)

    return () => window.removeEventListener('mousemove', listener)
    
  }, [])
  
  
  return {
    y,
    x,
    setY,
    setX,
  }
};

export default useCursorPosition;

// [ , , , , , ],
// [ , , , , , ],
// [ , , , , , ],
// [ , , , , , ],