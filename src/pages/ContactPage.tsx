import { useState, FormEvent, CSSProperties } from 'react';
import { BRAND, FONTS } from '../tokens';
import MetaLabel from '../components/MetaLabel';
import Button from '../components/Button';
import Footer from '../components/Footer';
import styles from './ContactPage.module.css';

/* ── Field ─────────────────────────────────── */
interface FieldProps {
  label: string;
  placeholder: string;
  multiline?: boolean;
  value: string;
  onChange: (v: string) => void;
}

function Field({ label, placeholder, multiline = false, value, onChange }: FieldProps) {
  const [focus, setFocus] = useState(false);
  const inputStyle: CSSProperties = {
    width: '100%',
    border: 'none',
    borderBottom: `1px solid ${focus ? BRAND.ink : BRAND.ash}`,
    outline: 'none',
    background: 'transparent',
    padding: '8px 0',
    fontFamily: FONTS.display,
    fontSize: 18,
    color: BRAND.ink,
    resize: multiline ? 'vertical' : 'none',
    fontWeight: 400,
    transition: 'border-color 120ms',
  };

  return (
    <label style={{ display: 'block' }}>
      <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: BRAND.graphite, marginBottom: 8 }}>
        {label}
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          rows={4}
          style={inputStyle}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={placeholder}
          style={inputStyle}
        />
      )}
    </label>
  );
}

/* ── RadioField ────────────────────────────── */
interface RadioFieldProps {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

function RadioField({ label, options, value, onChange }: RadioFieldProps) {
  return (
    <div>
      <div style={{ fontFamily: FONTS.mono, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: BRAND.graphite, marginBottom: 12 }}>
        {label}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {options.map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            aria-pressed={value === o}
            style={{
              fontFamily: FONTS.mono,
              fontSize: 12,
              padding: '10px 16px',
              border: `1px solid ${BRAND.ink}`,
              background: value === o ? BRAND.ink : 'transparent',
              color: value === o ? BRAND.paper : BRAND.ink,
              borderRadius: 0,
              cursor: 'pointer',
              letterSpacing: '0.04em',
              outline: 'none',
              transition: 'background 120ms, color 120ms',
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── ContactPage ───────────────────────────── */
interface FormState {
  name: string;
  contact: string;
  business: string;
  format: string;
  budget: string;
  deadline: string;
  brief: string;
}

const INITIAL: FormState = { name: '', contact: '', business: '', format: '', budget: '', deadline: '', brief: '' };

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [sent, setSent] = useState(false);

  const set = (key: keyof FormState) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production: connect to Formspree / custom API
    setSent(true);
  };

  const CONTACTS = [
    { l: 'Email',     v: 'hi@zvirycholeksandr.com.ua', href: 'mailto:hi@zvirycholeksandr.com.ua' },
    { l: 'Telegram',  v: 't.me/zvirych',               href: 'https://t.me/zvirych' },
    { l: 'Instagram', v: '@zvirycholeksandr',           href: 'https://instagram.com/zvirycholeksandr' },
    { l: 'Phone',     v: '+380 (—) ——',                 href: undefined },
  ];

  const FAQ = [
    { q: 'Працюєте по передоплаті?', a: '50% перед стартом, 50% перед запуском.' },
    { q: 'Хто пише тексти?',         a: 'Я можу — або ваш копірайтер. Чернетки даю безкоштовно.' },
    { q: 'А якщо не сподобається?',  a: 'Дві безкоштовні ітерації на дизайн. Далі — погодинно.' },
  ];

  return (
    <div className="page-enter">
      <section style={{ padding: 'calc(var(--section-py) * 0.67) 0 0', borderBottom: `1px solid ${BRAND.ink}` }}>
        <div className="container">
          <MetaLabel>05 / Контакти</MetaLabel>
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
            Розкажіть<br />про{' '}
            <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 400 }}>проєкт</span>.
          </h1>
        </div>
      </section>

      <section style={{ padding: 'var(--section-py) 0' }}>
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div style={{ border: `1px solid ${BRAND.ink}`, padding: 48 }}>
              <MetaLabel>Бриф / 4 хв</MetaLabel>

              {sent ? (
                <div style={{ marginTop: 48 }}>
                  <div
                    style={{
                      fontFamily: FONTS.display,
                      fontSize: 48,
                      fontWeight: 500,
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      marginBottom: 16,
                    }}
                  >
                    Отримано ✓
                  </div>
                  <p style={{ fontFamily: FONTS.display, fontSize: 18, color: BRAND.graphite, lineHeight: 1.5 }}>
                    Відповідь протягом 24 годин — на email або в Telegram.
                  </p>
                  <div style={{ marginTop: 32 }}>
                    <Button variant="secondary" onClick={() => setSent(false)}>Надіслати ще</Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 32 }}>
                    <Field label="Як до вас звертатись?" placeholder="Ім'я" value={form.name} onChange={set('name')} />
                    <Field label="Як зв'язатись?" placeholder="email або @telegram" value={form.contact} onChange={set('contact')} />
                    <Field label="Чим займаєтесь?" placeholder="напр. Кав'ярня в Києві" value={form.business} onChange={set('business')} />
                    <RadioField label="Який формат?" options={['Лендинг', 'Візитка', 'Меню', 'Інше']} value={form.format} onChange={set('format')} />
                    <RadioField label="Бюджет?" options={['до 15к', '15—30к', '30—60к', '60к+']} value={form.budget} onChange={set('budget')} />
                    <Field label="Дедлайн?" placeholder="напр. до кінця травня" value={form.deadline} onChange={set('deadline')} />
                    <Field label="Кілька слів про проєкт" placeholder="Що це, для кого, які цілі..." multiline value={form.brief} onChange={set('brief')} />
                    <div style={{ paddingTop: 16 }}>
                      <Button variant="signal" arrow size="lg" type="submit">Надіслати бриф</Button>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Info column */}
            <div className={styles.infoCol}>
              {/* Direct contacts */}
              <div style={{ background: BRAND.ink, color: BRAND.paper, padding: 40 }}>
                <MetaLabel color={BRAND.signal} dot={false}>Прямий контакт</MetaLabel>
                <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
                  {CONTACTS.map((c) => (
                    <div key={c.l} style={{ borderBottom: `1px solid ${BRAND.graphite}`, paddingBottom: 16 }}>
                      <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: BRAND.ash, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {c.l}
                      </div>
                      {c.href ? (
                        <a
                          href={c.href}
                          target={c.href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 4, display: 'block', color: BRAND.paper, textDecoration: 'none' }}
                        >
                          {c.v}
                        </a>
                      ) : (
                        <div style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', marginTop: 4 }}>
                          {c.v}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div style={{ background: BRAND.signal, padding: 40 }}>
                <MetaLabel dot={false}>Стан / квітень 2026</MetaLabel>
                <div style={{ fontFamily: FONTS.display, fontSize: 34, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.1, marginTop: 24 }}>
                  Беру 1 проєкт на травень.<br />Слот на червень — відкритий.
                </div>
              </div>

              {/* FAQ */}
              <div style={{ background: BRAND.paperSoft, padding: 40 }}>
                <MetaLabel>FAQ — 3 коротких</MetaLabel>
                <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {FAQ.map((f, i) => (
                    <div key={i}>
                      <div style={{ fontFamily: FONTS.display, fontSize: 17, fontWeight: 500, letterSpacing: '-0.01em' }}>
                        — {f.q}
                      </div>
                      <div style={{ fontFamily: FONTS.display, fontSize: 15, color: BRAND.graphite, marginTop: 4, lineHeight: 1.5 }}>
                        {f.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
