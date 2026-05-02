import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BRAND, FONTS } from '../tokens';
import { useBreakpoint } from '../hooks/useBreakpoint';
import Wordmark from './Wordmark';
import Button from './Button';
import styles from './Nav.module.css';

const NAV_ITEMS = [
  { to: '/',         label: 'Головна',  idx: '01' },
  { to: '/services', label: 'Послуги',  idx: '02' },
  { to: '/work',     label: 'Роботи',   idx: '03' },
  { to: '/process',  label: 'Процес',   idx: '04' },
  { to: '/contact',  label: 'Контакти', idx: '05' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const bp = useBreakpoint();
  const navigate = useNavigate();
  const isMobile = bp === 'mobile';

  const handleCta = () => {
    navigate('/contact');
    setOpen(false);
  };

  return (
    <header
      className={styles.header}
      style={{ background: BRAND.paper, borderBottom: `1px solid ${BRAND.ink}` }}
    >
      <div className={`container ${styles.inner}`}>
        <NavLink to="/" aria-label="Головна" style={{ textDecoration: 'none', lineHeight: 1 }}>
          <Wordmark size={isMobile ? 16 : 20} />
        </NavLink>

        {/* Desktop nav */}
        {!isMobile && (
          <nav className={styles.desktopNav} aria-label="Основна навігація">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
                }
                style={({ isActive }) => ({
                  background: isActive ? BRAND.signal : 'transparent',
                  border: `1px solid ${isActive ? BRAND.ink : 'transparent'}`,
                  color: isActive ? BRAND.ink : BRAND.graphite,
                })}
              >
                <span
                  style={{
                    fontFamily: FONTS.mono,
                    fontSize: 11,
                    color: BRAND.ash,
                  }}
                >
                  {item.idx}
                </span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        )}

        <div className={styles.actions}>
          {!isMobile && (
            <Button variant="primary" size="sm" arrow onClick={handleCta}>
              Замовити сайт
            </Button>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button
              className={styles.burger}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
              aria-expanded={open}
              style={{ color: BRAND.ink }}
            >
              {open ? '✕' : '☰'}
            </button>
          )}
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobile && open && (
        <div
          className={styles.drawer}
          style={{ background: BRAND.paper, borderTop: `1px solid ${BRAND.ink}` }}
        >
          <nav aria-label="Мобільна навігація">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [styles.drawerLink, isActive ? styles.drawerLinkActive : ''].join(' ')
                }
                style={({ isActive }) => ({
                  background: isActive ? BRAND.signal : 'transparent',
                  color: BRAND.ink,
                  borderBottom: `1px solid ${BRAND.ink}`,
                })}
              >
                <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: BRAND.ash }}>
                  {item.idx}
                </span>
                <span style={{ fontFamily: FONTS.mono, fontSize: 13, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {item.label}
                </span>
              </NavLink>
            ))}
          </nav>
          <div style={{ padding: '24px 20px' }}>
            <Button variant="signal" arrow size="lg" onClick={handleCta}>
              Замовити сайт
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
