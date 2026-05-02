import { Link } from 'react-router-dom';
import { BRAND, FONTS } from '../tokens';
import Wordmark from './Wordmark';
import MetaLabel from './MetaLabel';
import styles from './Footer.module.css';

const SERVICES = ['Лендинг', 'Візитка', 'Онлайн-меню', 'CRM'];
const NAV = [
  { to: '/',         label: 'Головна' },
  { to: '/services', label: 'Послуги' },
  { to: '/work',     label: 'Роботи' },
  { to: '/process',  label: 'Процес' },
];

const linkStyle = {
  fontFamily: FONTS.mono,
  fontSize: 13,
  color: BRAND.paper,
  textDecoration: 'none',
};

export default function Footer() {
  return (
    <footer style={{ background: BRAND.ink, color: BRAND.paper }}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Wordmark size={22} color={BRAND.paper} accent={BRAND.signal} />
            <p style={{ fontFamily: FONTS.display, fontSize: 15, lineHeight: 1.55, color: BRAND.ash, marginTop: 20, maxWidth: 360 }}>
              Веб-розробка для малого бізнесу.<br />Прямо, без посередників.
            </p>
          </div>

          <div>
            <MetaLabel color={BRAND.ash} dot={false}>Послуги</MetaLabel>
            <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link to="/services" style={linkStyle}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <MetaLabel color={BRAND.ash} dot={false}>Контакти</MetaLabel>
            <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><a href="mailto:hi@zvirycholeksandr.com.ua" style={linkStyle}>hi@zvirycholeksandr.com.ua</a></li>
              <li><a href="https://t.me/zvirych" target="_blank" rel="noopener noreferrer" style={linkStyle}>t.me/zvirych</a></li>
              <li><a href="https://instagram.com/zvirycholeksandr" target="_blank" rel="noopener noreferrer" style={linkStyle}>@zvirycholeksandr</a></li>
            </ul>
          </div>

          <div>
            <MetaLabel color={BRAND.ash} dot={false}>Навігація</MetaLabel>
            <ul style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {NAV.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={linkStyle}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={styles.bottom}
          style={{
            borderTop: `1px solid ${BRAND.graphite}`,
            fontFamily: FONTS.mono,
            fontSize: 11,
            color: BRAND.ash,
            letterSpacing: '0.04em',
          }}
        >
          <span>© 2019—2026 zvirycholeksandr · Kyiv, UA</span>
          <span>v.2026.04 — rebrand build</span>
          <span>Зроблено в Україні 🇺🇦</span>
        </div>
      </div>
    </footer>
  );
}
