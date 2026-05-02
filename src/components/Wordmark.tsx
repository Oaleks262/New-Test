import { CSSProperties } from 'react';
import { BRAND, FONTS } from '../tokens';

interface WordmarkProps {
  size?: number;
  color?: string;
  accent?: string;
}

export default function Wordmark({ size = 20, color, accent }: WordmarkProps) {
  const c = color ?? BRAND.ink;
  const a = accent ?? BRAND.signal;

  const wrapStyle: CSSProperties = {
    fontFamily: FONTS.mono,
    fontSize: size,
    fontWeight: 500,
    letterSpacing: '-0.04em',
    color: c,
    display: 'inline-flex',
    alignItems: 'baseline',
    gap: size * 0.08,
    lineHeight: 1,
  };

  return (
    <span style={wrapStyle}>
      <span>zvirych</span>
      <span
        style={{
          display: 'inline-block',
          width: size * 0.55,
          height: size * 0.55,
          background: a,
          transform: `translateY(${size * 0.02}px)`,
          flexShrink: 0,
        }}
      />
      <span>leksandr</span>
    </span>
  );
}
