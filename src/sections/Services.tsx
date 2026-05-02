import { BRAND, FONTS } from '../tokens';
import Idx from '../components/Idx';
import SectionTitle from '../components/SectionTitle';
import styles from './Services.module.css';

const SERVICE_LIST = [
  {
    n: 1, title: 'Лендинг', price: '₴ 15 000',
    desc: 'Односторінковий сайт з однією конверсійною ціллю.',
    feats: ['до 7 днів', 'копірайтинг', 'SEO-база', 'аналітика'],
  },
  {
    n: 2, title: 'Сайт-візитка', price: '₴ 25 000',
    desc: 'Кілька сторінок — про, послуги, контакти, відгуки.',
    feats: ['до 14 днів', 'CMS', 'блог', 'мультимова'],
  },
  {
    n: 3, title: 'Онлайн-меню', price: '₴ 18 000',
    desc: 'QR-меню для закладів з адмінкою та фото страв.',
    feats: ['до 10 днів', 'QR-генератор', 'розділи', 'телеграм-бот'],
  },
  {
    n: 4, title: 'Свій формат', price: 'обговорюємо',
    desc: 'Складніші проєкти — магазини, бронювання, CRM.',
    feats: ['brief', 'оцінка', 'етапи', 'підтримка'],
  },
];

export default function Services() {
  return (
    <section
      style={{ background: BRAND.paper, color: BRAND.ink, borderBottom: `1px solid ${BRAND.ink}`, padding: 'var(--section-py) 0' }}
      aria-label="Послуги"
    >
      <div className="container">
        <div className={styles.header}>
          <SectionTitle eyebrow="Послуги">
            Чотири формати —<br />
            <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 400 }}>жодних</span> шаблонів.
          </SectionTitle>
          <p style={{ fontFamily: FONTS.display, fontSize: 18, lineHeight: 1.5, color: BRAND.graphite, margin: 0, maxWidth: 480 }}>
            Фіксовані стартові ціни. Чесна оцінка через 24 години після брифу. Оплата етапами — 50/50.
          </p>
        </div>

        <div className={styles.grid} style={{ border: `1px solid ${BRAND.ink}` }}>
          {SERVICE_LIST.map((s, i) => (
            <article
              key={s.n}
              className={styles.card}
              style={{ borderRight: i < 3 ? `1px solid ${BRAND.ink}` : 'none' }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                  <Idx n={s.n} />
                  <span style={{ fontFamily: FONTS.mono, fontSize: 10, color: BRAND.ash, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    service
                  </span>
                </div>
                <h3 style={{ fontFamily: FONTS.display, fontSize: 40, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1, margin: 0, marginBottom: 16 }}>
                  {s.title}
                </h3>
                <p style={{ fontFamily: FONTS.display, fontSize: 15, lineHeight: 1.5, color: BRAND.graphite, margin: 0, marginBottom: 24 }}>
                  {s.desc}
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.feats.map((f) => (
                    <li
                      key={f}
                      style={{ fontFamily: FONTS.mono, fontSize: 12, color: BRAND.ink, display: 'flex', alignItems: 'center', gap: 10 }}
                    >
                      <span style={{ width: 6, height: 6, background: BRAND.signal, flexShrink: 0 }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ borderTop: `1px solid ${BRAND.ink}`, paddingTop: 20, marginTop: 32 }}>
                <div style={{ fontFamily: FONTS.mono, fontSize: 10, color: BRAND.ash, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Від</div>
                <div style={{ fontFamily: FONTS.display, fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 4 }}>
                  {s.price}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
