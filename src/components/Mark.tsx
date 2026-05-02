import { CSSProperties } from 'react';
import { BRAND, FONTS } from '../tokens';

interface MarkProps {
  size?: number;
  bg?: string;
  fg?: string;
  accent?: string;
}

export default function Mark({ size = 48, bg, fg, accent }: MarkProps) {
  const style: CSSProperties = {
    width: size,
    height: size,
    background: bg ?? BRAND.ink,
    color: fg ?? BRAND.paper,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: FONTS.mono,
    fontSize: size * 0.5,
    fontWeight: 500,
    letterSpacing: '-0.05em',
    flexShrink: 0,
    userSelect: 'none',
  };

  return (
    <div style={style} aria-hidden="true">
      z
      <span
        style={{
          position: 'absolute',
          right: size * 0.15,
          bottom: size * 0.15,
          width: size * 0.14,
          height: size * 0.14,
          background: accent ?? BRAND.signal,
        }}
      />
    </div>
  );
}
