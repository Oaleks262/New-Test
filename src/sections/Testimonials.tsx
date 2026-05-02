import { BRAND, FONTS } from '../tokens';
import SectionTitle from '../components/SectionTitle';
import styles from './Testimonials.module.css';

const QUOTES = [
  {
    t: '"Олександр зробив нам лендинг за 6 днів. На третій день вже йшли заявки з реклами."',
    a: 'Анна К.',
    r: 'Власниця, Studio Mano',
  },
  {
    t: '"Не доводиться тягнути клешнями — сам ставить питання, які я б не поставила дизайнерці."',
    a: 'Ольга Ш.',
    r: 'Масажна практика "Відновлення"',
  },
  {
    t: '"Єдиний розробник, який після релізу сам подзвонив і запитав про цифри."',
    a: 'Ілля М.',
    r: "Кав'ярня \"Цех\"",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{ background: BRAND.paper, color: BRAND.ink, padding: 'var(--section-py) 0', borderBottom: `1px solid ${BRAND.ink}` }}
      aria-label="Відгуки клієнтів"
    >
      <div className="container">
        <SectionTitle eyebrow="Відгуки">
          <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 400 }}>Слово</span> клієнтів.
        </SectionTitle>

        <div className={styles.grid}>
          {QUOTES.map((q, i) => (
            <blockquote
              key={i}
              className={styles.card}
              style={{ background: i === 1 ? BRAND.signal : BRAND.paper, border: `1px solid ${BRAND.ink}` }}
            >
              <p style={{ fontFamily: FONTS.serif, fontSize: 'clamp(20px, 2vw, 28px)', fontStyle: 'italic', lineHeight: 1.3, letterSpacing: '-0.01em', margin: 0 }}>
                {q.t}
              </p>
              <footer style={{ borderTop: `1px solid ${BRAND.ink}`, paddingTop: 20, marginTop: 32 }}>
                <cite style={{ fontStyle: 'normal' }}>
                  <div style={{ fontFamily: FONTS.display, fontSize: 18, fontWeight: 500, letterSpacing: '-0.02em' }}>{q.a}</div>
                  <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: BRAND.graphite, marginTop: 4, letterSpacing: '0.04em' }}>{q.r}</div>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
