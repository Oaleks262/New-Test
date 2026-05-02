import { ReactNode, CSSProperties } from 'react';
import { BRAND, FONTS } from '../tokens';

interface MetaLabelProps {
  children: ReactNode;
  color?: string;
  dot?: boolean;
}

export default function MetaLabel({ children, color, dot = true }: MetaLabelProps) {
  const style: CSSProperties = {
    fontFamily: FONTS.mono,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: color ?? 'currentColor',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
  };

  return (
    <span style={style}>
      {dot && (
        <span
          style={{ width: 6, height: 6, background: BRAND.signal, flexShrink: 0 }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
