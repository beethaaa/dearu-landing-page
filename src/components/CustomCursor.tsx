import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[10000]"
      style={{ willChange: 'transform' }}
    >
      <img 
        src="/assets/featherPen.png" 
        alt="cursor" 
        className="w-10 md:w-14 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] brightness-110 origin-center -translate-x-1/2 -translate-y-1/2" 
      />
    </div>
  );
};

export default CustomCursor;
