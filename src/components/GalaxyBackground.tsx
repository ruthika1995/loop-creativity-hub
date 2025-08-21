import { useEffect, useRef } from 'react';

interface Star {
  r: number;
  baseAngle: number;
  arm: number;
  layer: number;
  rotSpeed: number;
  size: number;
  hue: number;
  sat: number;
  phase: number;
}

export const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w: number, h: number, dpr: number;
    const STAR_COUNT = 480;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      initStars();
    };

    const initStars = () => {
      starsRef.current = [];
      const maxR = Math.min(w, h) * 0.48;
      
      for (let i = 0; i < STAR_COUNT; i++) {
        const r = Math.pow(Math.random(), 0.36) * maxR;
        const baseAngle = Math.random() * Math.PI * 2;
        const arm = Math.random() < 0.5 ? 0 : 1;
        const layer = Math.floor(Math.random() * 3);
        const rotSpeed = (0.00005 + Math.random() * 0.00022) * 
          (layer === 0 ? 0.5 : layer === 1 ? 1 : 1.6) * 
          (Math.random() < 0.8 ? 1 : -1);
        const size = (layer === 0 ? 0.7 : layer === 1 ? 1.0 : 1.4) * 
          (0.7 + Math.random() * 0.9);
        const phase = Math.random() * Math.PI * 2;
        const coreT = r / (maxR + 1e-6);
        const hue = coreT < 0.18 ? 220 + Math.random() * 12 : 210 + Math.random() * 40;
        const sat = 25 + Math.random() * 20;
        
        starsRef.current.push({ r, baseAngle, arm, layer, rotSpeed, size, hue, sat, phase });
      }
    };

    const drawGalaxy = () => {
      ctx.fillStyle = 'rgba(5,7,12,0.45)';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const t = performance.now();

      // Core glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.7);
      grad.addColorStop(0, 'rgba(205,215,255,0.035)');
      grad.addColorStop(0.18, 'rgba(165,175,210,0.04)');
      grad.addColorStop(0.45, 'rgba(90,100,130,0.03)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Draw stars
      for (const s of starsRef.current) {
        const swirl = Math.sin(s.r * 0.045 + t * 0.0008) * 0.6;
        const armOffset = s.arm * Math.PI;
        const angle = s.baseAngle + armOffset + s.r * 0.0009 + swirl + t * s.rotSpeed;

        const ex = Math.cos(angle) * s.r;
        const ey = Math.sin(angle) * s.r * 0.78;

        const driftX = Math.sin(t * 0.00006 + s.phase) * 10 * (s.layer + 1);
        const driftY = Math.cos(t * 0.00005 + s.phase) * 8 * (s.layer + 1);

        const x = cx + ex + driftX;
        const y = cy + ey + driftY;

        const tw = 0.65 + 0.35 * Math.sin(t * 0.004 + s.phase + s.r * 0.002);
        const alpha = 0.45 * tw * (0.6 + 0.4 * (s.layer / 2));

        ctx.beginPath();
        ctx.arc(x, y, s.size * dpr, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, ${s.sat}%, 85%, ${alpha})`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(drawGalaxy);
    };

    window.addEventListener('resize', resize);
    resize();

    // Initial background
    ctx.fillStyle = 'rgba(5,7,12,1)';
    ctx.fillRect(0, 0, w, h);
    drawGalaxy();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas 
        ref={canvasRef}
        className="fixed inset-0 -z-10 pointer-events-none"
        id="particles"
      />
      
      {/* Subtle accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div 
          className="absolute -top-32 -left-32 w-[44rem] h-[44rem] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 50%, transparent 70%)'
          }}
        />
        <div 
          className="absolute -bottom-40 -right-32 w-[42rem] h-[42rem] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 50%, transparent 70%)'
          }}
        />
      </div>
    </>
  );
};