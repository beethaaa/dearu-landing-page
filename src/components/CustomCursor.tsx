import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Divide by 0.75 to counteract the body { zoom: 75% }
        cursorRef.current.style.transform = `translate3d(${e.clientX / 0.75}px, ${e.clientY / 0.75}px, 0)`;
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
        className="w-10 md:w-14 h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] brightness-110 -translate-y-full" 
      />
    </div>
  );
};

export default CustomCursor;
