import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BRAND, FONTS } from '../tokens';
import MetaLabel from '../components/MetaLabel';
import Button from '../components/Button';
import Ticker from '../components/Ticker';
import styles from './Hero.module.css';

const TICKER_ITEMS = [
  'Масажисти', "Кав'ярні", 'Дизайнери', 'Нейл-майстри',
  'Барбершопи', 'Стоматології', 'Флористи', 'Фото-студії', 'Ремонт', 'Тренери',
];

export default function Hero() {
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('uk-UA', {
      hour: '2-digit', minute: '2-digit', second: '2-digit',
      timeZone: 'Europe/Kyiv', hour12: false,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      style={{ background: BRAND.paper, color: BRAND.ink, borderBottom: `1px solid ${BRAND.ink}` }}
      aria-label="Hero"
    >
      {/* Meta strip */}
      <div
        className={`container ${styles.metaStrip}`}
        style={{
          borderBottom: `1px solid ${BRAND.ink}`,
          fontFamily: FONTS.mono,
          fontSize: 11,
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
          <span
            style={{ width: 8, height: 8, background: BRAND.signal, animation: 'pulse 1.6s ease-in-out infinite', flexShrink: 0 }}
            aria-hidden="true"
          />
          Доступний для 1 проєкту в травні
        </span>
        <span style={{ color: BRAND.ash }}>Kyiv, UA — {time}</span>
        <span className={styles.hideOnMobile}>ind. 2019 — 47 проєктів</span>
      </div>

      {/* Main content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.eyebrow}>
          <MetaLabel>Ребрендинг / 2026</MetaLabel>
          <p
            className={styles.tagline}
            style={{ fontFamily: FONTS.mono, fontSize: 12, color: BRAND.graphite, lineHeight: 1.6 }}
          >
            Веб-розробка для малого<br />бізнесу в Україні —<br />напряму, без агенцій
          </p>
        </div>

        <h1 className={styles.headline} style={{ fontFamily: FONTS.display, fontWeight: 500 }}>
          Сайти, які<br />
          <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 400 }}>заробляють</span>
          <span style={{ display: 'inline-block', width: '0.08em' }} />
          <span
            style={{ display: 'inline-block', background: BRAND.signal, padding: '0 0.08em', lineHeight: 0.85 }}
          >—</span>
          <br />
          не просто<br />виглядають.
        </h1>

        <div className={styles.lower} style={{ borderTop: `1px solid ${BRAND.ink}` }}>
          <div>
            <MetaLabel>Підхід</MetaLabel>
            <p style={{ fontFamily: FONTS.display, fontSize: 18, lineHeight: 1.5, color: BRAND.ink, margin: '16px 0 0' }}>
              Кожен сайт — інструмент. Перш ніж писати код, я розбираю вашу аудиторію, конкурентів і ціль заявки.
            </p>
          </div>
          <div>
            <MetaLabel>Формат</MetaLabel>
            <p style={{ fontFamily: FONTS.display, fontSize: 18, lineHeight: 1.5, color: BRAND.ink, margin: '16px 0 0' }}>
              Лендинг, візитка, онлайн-меню або внутрішня CRM. Без нав'язаних шаблонів та "підписок на підтримку".
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
            <Button variant="primary" arrow size="lg" onClick={() => navigate('/contact')}>
              Почати проєкт
            </Button>
            <Button variant="secondary" size="lg" onClick={() => navigate('/work')}>
              Дивитись роботи
            </Button>
          </div>
        </div>
      </div>

      <Ticker items={TICKER_ITEMS} />
    </section>
  );
}
