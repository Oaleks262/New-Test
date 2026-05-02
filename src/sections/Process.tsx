import { BRAND, FONTS } from '../tokens';
import SectionTitle from '../components/SectionTitle';
import styles from './Process.module.css';

const STEPS = [
  { n: '01', t: 'Brief / аналіз', d: '30 хв дзвінок про ціль, аудиторію, приклади. Розбираємо 2—3 конкурентів.',        dur: '1 день' },
  { n: '02', t: 'Структура',      d: 'Wireframe у Figma. Карта сторінки, блоки, CTA, тексти-чернетки.',                   dur: '1—2 дні' },
  { n: '03', t: 'Дизайн',         d: 'Hi-fi макети, 2 раунди правок. Фіксуємо дизайн, переходимо до коду.',               dur: '2—3 дні' },
  { n: '04', t: 'Розробка',       d: 'Верстка, адаптив, анімації, SEO, метрики, підключення домену та хостингу.',          dur: '3—5 днів' },
  { n: '05', t: 'Запуск',         d: 'Виллив у прод, тест на 30+ сценаріях, передача доступів, інструкції.',              dur: '1 день' },
];

export default function Process() {
  return (
    <section
      style={{ background: BRAND.ink, color: BRAND.paper, padding: 'var(--section-py) 0', borderBottom: `1px solid ${BRAND.ink}` }}
      aria-label="Процес роботи"
    >
      <div className="container">
        <div className={styles.header}>
          <SectionTitle eyebrow="Процес" onDark>
            Як ми<br />працюємо.
          </SectionTitle>
          <p style={{ fontFamily: FONTS.display, fontSize: 18, lineHeight: 1.5, color: BRAND.ash, margin: 0, maxWidth: 440 }}>
            П'ять кроків, 7—14 днів, кожен етап з дедлайном і demo-посиланням.
          </p>
        </div>

        <ol className={styles.grid} style={{ border: `1px solid ${BRAND.graphite}` }}>
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={styles.step}
              style={{ borderRight: i < 4 ? `1px solid ${BRAND.graphite}` : 'none' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 32 }}>
                <div
                  style={{ fontFamily: FONTS.display, fontSize: 64, fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.9, color: BRAND.signal }}
                  aria-hidden="true"
                >
                  {s.n}
                </div>
                <div style={{ fontFamily: FONTS.mono, fontSize: 10, color: BRAND.ash, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {s.dur}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 12 }}>
                  {s.t}
                </div>
                <div style={{ fontFamily: FONTS.display, fontSize: 14, color: BRAND.ash, lineHeight: 1.6 }}>
                  {s.d}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
