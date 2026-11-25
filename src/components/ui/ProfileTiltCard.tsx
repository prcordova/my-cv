import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";

interface ProfileTiltCardProps {
  src: string;
  alt: string;
  maxTilt?: number;
}

interface TiltState {
  rotateX: number;
  rotateY: number;
  glareX: number;
  glareY: number;
  active: boolean;
}

const INITIAL_TILT: TiltState = {
  rotateX: 0,
  rotateY: 0,
  glareX: 50,
  glareY: 50,
  active: false,
};

export function ProfileTiltCard({
  src,
  alt,
  maxTilt = 14,
}: ProfileTiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [tilt, setTilt] = useState<TiltState>(INITIAL_TILT);
  const [allowMotion, setAllowMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => setAllowMotion(!media.matches);
    syncMotion();
    media.addEventListener("change", syncMotion);
    return () => media.removeEventListener("change", syncMotion);
  }, []);

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const updateTilt = useCallback(
    (clientX: number, clientY: number) => {
      const card = cardRef.current;
      if (!card || !allowMotion) return;

      const rect = card.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;

      // Mouse "weighs" on the card: that side sinks, opposite edge lifts.
      const rotateY = (x - 0.5) * 2 * maxTilt;
      const rotateX = (0.5 - y) * 2 * maxTilt;

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        setTilt({
          rotateX,
          rotateY,
          glareX: x * 100,
          glareY: y * 100,
          active: true,
        });
      });
    },
    [allowMotion, maxTilt],
  );

  const handleMouseMove = (event: ReactMouseEvent<HTMLDivElement>) => {
    updateTilt(event.clientX, event.clientY);
  };

  const resetTilt = () => {
    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
    }
    setTilt(INITIAL_TILT);
  };

  return (
    <div className="relative [perspective:1100px]">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl transition-opacity duration-300"
        style={{ opacity: tilt.active ? 0.85 : 1 }}
        aria-hidden
      />

      <div
        ref={cardRef}
        onMouseMove={allowMotion ? handleMouseMove : undefined}
        onMouseLeave={allowMotion ? resetTilt : undefined}
        className="relative will-change-transform [transform-style:preserve-3d]"
        style={{
          transform: allowMotion
            ? `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
            : undefined,
          transition: tilt.active
            ? "transform 80ms ease-out"
            : "transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-soft ring-1 ring-ink-200 dark:ring-ink-700"
          width={640}
          height={800}
          draggable={false}
        />

        {/* Light catch that follows the weighted point */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 mix-blend-soft-light transition-opacity duration-200"
          style={{
            opacity: tilt.active ? 0.55 : 0,
            background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.08) 35%, transparent 62%)`,
          }}
          aria-hidden
        />

        {/* Soft contact shadow under the pressed area */}
        <div
          className="pointer-events-none absolute inset-x-6 -bottom-3 h-8 rounded-full bg-ink-950/25 blur-xl transition-opacity duration-200 dark:bg-black/45"
          style={{
            opacity: tilt.active ? 0.7 : 0.35,
            transform: `translateX(${tilt.rotateY * 0.6}px)`,
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}
