import { MutableRefObject, useEffect, useState } from "react";

 

const useCursorPosition = (ref:MutableRefObject<HTMLDivElement | null>) => {

  const [y, setY] = useState(0)
  const [x, setX] = useState(0)

  
  useEffect(()=> {
    const listener = (e: MouseEvent) => {
      if (ref === null) return
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        setY(e.clientY - rect.top)
        setX(e.clientX - rect.left)
      }
    }

    window.addEventListener('mousemove', listener)

    return () => window.removeEventListener('mousemove', listener)
    
  }, [ref])
  
  return {
    y,
    x,
    setY,
    setX,
  }
};

export default useCursorPosition;
