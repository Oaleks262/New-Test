import { BRAND, FONTS } from '../tokens';
import MetaLabel from '../components/MetaLabel';
import styles from './Stats.module.css';

const ITEMS = [
  { n: '47',  unit: 'проєктів', note: 'Зданих з 2019' },
  { n: '7',   unit: 'днів',     note: 'Середній реліз лендингу' },
  { n: '4.9', unit: '/5',       note: 'Повторні клієнти' },
  { n: '0',   unit: '%',        note: 'Прихованих витрат' },
];

export default function Stats() {
  return (
    <section
      style={{ background: BRAND.ink, color: BRAND.paper, padding: 'var(--section-py) 0' }}
      aria-label="Статистика"
    >
      <div className={`container ${styles.grid}`}>
        {ITEMS.map((item, i) => (
          <div
            key={i}
            className={styles.cell}
            style={{ borderRight: i < 3 ? `1px solid ${BRAND.graphite}` : 'none' }}
          >
            <MetaLabel color={BRAND.ash}>
              {String(i + 1).padStart(2, '0')} / {item.unit}
            </MetaLabel>
            <div
              className={styles.number}
              style={{ fontFamily: FONTS.display, fontWeight: 500, color: BRAND.paper }}
            >
              {item.n}
            </div>
            <div style={{ fontFamily: FONTS.mono, fontSize: 12, color: BRAND.ash, marginTop: 8, letterSpacing: '0.04em' }}>
              {item.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
