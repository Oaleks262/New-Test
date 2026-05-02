import styles from './Ticker.module.css';
import { BRAND, FONTS } from '../tokens';

interface TickerProps {
  items: string[];
  speed?: number;
  dark?: boolean;
}

export default function Ticker({ items, speed = 40, dark = false }: TickerProps) {
  const block = (
    <div className={styles.block}>
      {items.map((item, i) => (
        <span
          key={i}
          style={{
            fontFamily: FONTS.mono,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: dark ? BRAND.paper : BRAND.ink,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 12,
            whiteSpace: 'nowrap',
          }}
        >
          <span
            style={{ width: 6, height: 6, background: BRAND.signal, flexShrink: 0 }}
            aria-hidden="true"
          />
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={styles.wrapper}
      style={{
        borderTop: `1px solid ${dark ? BRAND.graphite : BRAND.ink}`,
        borderBottom: `1px solid ${dark ? BRAND.graphite : BRAND.ink}`,
        background: dark ? BRAND.ink : BRAND.paper,
      }}
      aria-hidden="true"
    >
      <div
        className={styles.track}
        style={{ animationDuration: `${speed}s` }}
      >
        {block}{block}{block}
      </div>
    </div>
  );
}
