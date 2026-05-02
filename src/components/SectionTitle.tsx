import { ReactNode } from 'react';
import { BRAND, FONTS } from '../tokens';

interface SectionTitleProps {
  eyebrow?: string;
  children: ReactNode;
  onDark?: boolean;
}

export default function SectionTitle({ eyebrow, children, onDark = false }: SectionTitleProps) {
  return (
    <div style={{ marginBottom: 48 }}>
      {eyebrow && (
        <div
          style={{
            fontFamily: FONTS.mono,
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: BRAND.ash,
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span
            style={{ width: 24, height: 1, background: BRAND.ash, flexShrink: 0 }}
            aria-hidden="true"
          />
          {eyebrow}
        </div>
      )}
      <h2
        style={{
          fontFamily: FONTS.display,
          fontSize: 'clamp(36px, 5vw, 72px)',
          fontWeight: 500,
          letterSpacing: '-0.035em',
          lineHeight: 0.95,
          color: onDark ? BRAND.paper : BRAND.ink,
          margin: 0,
        }}
      >
        {children}
      </h2>
    </div>
  );
}
