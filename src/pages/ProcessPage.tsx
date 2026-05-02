import { BRAND, FONTS } from '../tokens';
import MetaLabel from '../components/MetaLabel';
import SectionTitle from '../components/SectionTitle';
import Idx from '../components/Idx';
import Process from '../sections/Process';
import CTA from '../sections/CTA';
import Footer from '../components/Footer';
import styles from './ProcessPage.module.css';

const PRINCIPLES = [
  {
    t: 'Швидкість важливіша за досконалість',
    d: 'Краще запустити робочий MVP за 7 днів і доточити, ніж шукати ідеал 3 місяці.',
  },
  {
    t: 'Один сайт — одна ціль',
    d: 'Кожен лендинг має одну задачу. Якщо їх дві — це два проєкти.',
  },
  {
    t: 'Без шаблонних "продаючих" формул',
    d: 'Жодних "купи зараз і отримай бонус!". Чесний копірайтинг працює краще.',
  },
  {
    t: 'Дизайн = система, не вітрина',
    d: 'Я не малюю красиві картинки — я будую систему, з якою ви зможете рости далі.',
  },
];

export default function ProcessPage() {
  return (
    <div className="page-enter">
      <section style={{ padding: 'calc(var(--section-py) * 0.67) 0 0', borderBottom: `1px solid ${BRAND.ink}` }}>
        <div className="container">
          <MetaLabel>03 / Процес</MetaLabel>
          <h1
            style={{
              fontFamily: FONTS.display,
              fontSize: 'clamp(56px, 11vw, 180px)',
              fontWeight: 500,
              letterSpacing: '-0.05em',
              lineHeight: 0.88,
              margin: '20px 0 80px',
            }}
          >
            Без сюрпризів.<br />
            <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 400 }}>Без</span> туману.
          </h1>
        </div>
      </section>

      <Process />

      <section style={{ padding: 'var(--section-py) 0' }}>
        <div className="container">
          <SectionTitle eyebrow="Принципи">
            Як я приймаю<br />рішення.
          </SectionTitle>
          <div className={styles.principlesGrid} style={{ border: `1px solid ${BRAND.ink}` }}>
            {PRINCIPLES.map((p, i) => (
              <div
                key={i}
                style={{
                  padding: 40,
                  borderRight: i % 2 === 0 ? `1px solid ${BRAND.ink}` : 'none',
                  borderBottom: i < 2 ? `1px solid ${BRAND.ink}` : 'none',
                  minHeight: 240,
                }}
              >
                <Idx n={i + 1} />
                <h3 style={{ fontFamily: FONTS.display, fontSize: 28, fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1.1, margin: '16px 0 16px', maxWidth: 480 }}>
                  {p.t}
                </h3>
                <p style={{ fontFamily: FONTS.display, fontSize: 16, color: BRAND.graphite, lineHeight: 1.5, margin: 0, maxWidth: 520 }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
