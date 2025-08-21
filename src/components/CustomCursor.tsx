import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ cx: 0, cy: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Initialize position
    positionRef.current = {
      cx: window.innerWidth / 2,
      cy: window.innerHeight / 2,
      tx: window.innerWidth / 2,
      ty: window.innerHeight / 2,
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current.tx = e.clientX;
      positionRef.current.ty = e.clientY;
    };

    const cursorLoop = () => {
      const { cx, cy, tx, ty } = positionRef.current;
      positionRef.current.cx = lerp(cx, tx, 0.2);
      positionRef.current.cy = lerp(cy, ty, 0.2);
      
      if (cursor) {
        cursor.style.transform = `translate(${positionRef.current.cx - 0.5}px, ${positionRef.current.cy - 0.5}px)`;
      }
      
      requestAnimationFrame(cursorLoop);
    };

    const amplify = (on: boolean) => {
      if (!cursor) return;
      cursor.style.width = on ? '36px' : '24px';
      cursor.style.height = on ? '36px' : '24px';
      cursor.style.transition = 'width .15s ease, height .15s ease, transform .15s ease';
    };

    const interactiveSelectors = ['button', 'a', '.cta-button', 'input', 'textarea', 'select', 'label', '[role="button"]'];
    
    const setHoverListeners = () => {
      interactiveSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          el.addEventListener('mouseenter', () => amplify(true));
          el.addEventListener('mouseleave', () => amplify(false));
        });
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    cursorLoop();
    setHoverListeners();

    // Re-initialize hover listeners when DOM changes
    const observer = new MutationObserver(setHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[9999] w-6 h-6 rounded-full pointer-events-none mix-blend-difference transition-all duration-150 ease-out"
      style={{
        background: 'radial-gradient(circle at 30% 30%, #ffffff 0%, #ffffff 35%, rgba(255,255,255,0.4) 36%, rgba(255,255,255,0) 70%)',
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};