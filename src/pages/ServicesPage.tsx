import { BRAND, FONTS } from '../tokens';
import MetaLabel from '../components/MetaLabel';
import SectionTitle from '../components/SectionTitle';
import Idx from '../components/Idx';
import Services from '../sections/Services';
import CTA from '../sections/CTA';
import Footer from '../components/Footer';
import styles from './ServicesPage.module.css';

const ADD_ONS = [
  { t: 'Копірайтинг',     d: 'Тексти для всього сайту, тон голосу під ваш бренд.',         p: '+ ₴ 6 000' },
  { t: 'Telegram-бот',    d: 'Інтеграція бота для прийому заявок або бронювання.',          p: '+ ₴ 8 000' },
  { t: 'SEO-оптимізація', d: 'Глибоке пророблення, ключові, метадані, sitemap.',            p: '+ ₴ 5 000' },
  { t: 'Підтримка',       d: 'Місячна — оновлення, бекапи, малі правки.',                  p: '₴ 3 000 / міс' },
  { t: 'Аналітика',       d: 'GA4 + Хотджар, налаштування цілей і подій.',                 p: '+ ₴ 2 500' },
  { t: 'Brand-аудит',     d: 'Аналіз поточної айдентики та рекомендації.',                  p: '+ ₴ 4 000' },
];

export default function ServicesPage() {
  return (
    <div className="page-enter">
      <section style={{ padding: 'calc(var(--section-py) * 0.67) 0 0', borderBottom: `1px solid ${BRAND.ink}` }}>
        <div className="container">
          <MetaLabel>02 / Послуги</MetaLabel>
          <h1
            style={{
              fontFamily: FONTS.display,
              fontSize: 'clamp(56px, 11vw, 180px)',
              fontWeight: 500,
              letterSpacing: '-0.05em',
              lineHeight: 0.88,
              margin: '20px 0 0',
            }}
          >
            Що я<br />
            <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 400 }}>роблю</span> для вас.
          </h1>
        </div>
      </section>

      <Services />

      <section
        style={{ padding: 'var(--section-py) 0', background: BRAND.paperSoft, borderBottom: `1px solid ${BRAND.ink}` }}
        aria-label="Додаткові послуги"
      >
        <div className="container">
          <SectionTitle eyebrow="Додатково">
            Доповнення<br />до проєкту.
          </SectionTitle>
          <div className={styles.addonsGrid}>
            {ADD_ONS.map((a, i) => (
              <div
                key={i}
                style={{ background: BRAND.paper, border: `1px solid ${BRAND.ink}`, padding: 28 }}
              >
                <Idx n={i + 1} />
                <h3 style={{ fontFamily: FONTS.display, fontSize: 26, fontWeight: 500, letterSpacing: '-0.025em', margin: '12px 0 8px' }}>
                  {a.t}
                </h3>
                <p style={{ fontFamily: FONTS.display, fontSize: 14, color: BRAND.graphite, lineHeight: 1.5, margin: '0 0 20px' }}>
                  {a.d}
                </p>
                <div style={{ borderTop: `1px solid ${BRAND.ink}`, paddingTop: 12, fontFamily: FONTS.mono, fontSize: 13, fontWeight: 500 }}>
                  {a.p}
                </div>
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
