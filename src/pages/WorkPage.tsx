import { useState } from 'react';
import { BRAND, FONTS } from '../tokens';
import { PROJECTS } from '../data';
import type { Project } from '../types';
import MetaLabel from '../components/MetaLabel';
import Idx from '../components/Idx';
import Footer from '../components/Footer';
import styles from './WorkPage.module.css';

const FILTERS = ['Всі (47)', 'Лендинги (18)', 'Візитки (14)', 'Меню (8)', 'Магазини (4)', 'CRM (3)'];

function WorkCard({ p, idx }: { p: Project; idx: number }) {
  const [hover, setHover] = useState(false);

  return (
    <article
      className={styles.card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ border: `1px solid ${BRAND.ink}` }}
    >
      {/* Visual area */}
      <div
        className={styles.visual}
        style={{ background: p.palette[0], borderBottom: `1px solid ${BRAND.ink}` }}
      >
        {/* Browser chrome */}
        <div
          className={styles.browserBar}
          style={{ borderBottom: `1px solid ${p.palette[1]}22` }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: p.palette[1], opacity: 0.35 }} />
          ))}
          <span style={{ marginLeft: 12, fontFamily: FONTS.mono, fontSize: 11, color: p.palette[1], opacity: 0.5 }}>
            {p.client.toLowerCase().replace(/[^a-zа-я0-9]/gi, '')}.com
          </span>
        </div>

        {/* Composition */}
        <div className={styles.composition}>
          <div
            style={{
              fontFamily: FONTS.display,
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 500,
              letterSpacing: '-0.04em',
              lineHeight: 0.9,
              color: p.palette[1],
              transform: hover ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'transform 200ms',
            }}
          >
            {p.client.split(' ')[0]}
            <span style={{ color: p.palette[2] }}>.</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {p.palette.map((c, i) => (
              <div key={i} style={{ width: 36, height: 36, background: c, border: `1px solid ${p.palette[1]}22` }} />
            ))}
          </div>
        </div>
      </div>

      {/* Meta */}
      <div
        className={styles.meta}
        style={{ background: hover ? BRAND.signal : BRAND.paper, transition: 'background 140ms' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
          <Idx n={idx} />
          <span style={{ fontFamily: FONTS.mono, fontSize: 11, color: BRAND.graphite, letterSpacing: '0.04em' }}>{p.year}</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
          <h2 style={{ fontFamily: FONTS.display, fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 500, letterSpacing: '-0.025em', margin: 0, lineHeight: 1 }}>
            {p.client}
          </h2>
          <span style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', flexShrink: 0 }}>{p.kpi}</span>
        </div>
        <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: BRAND.graphite, letterSpacing: '0.04em', marginBottom: 12 }}>
          {p.type} · {p.format}
        </div>
        <p style={{ fontFamily: FONTS.display, fontSize: 15, color: BRAND.graphite, lineHeight: 1.5, margin: 0 }}>
          {p.desc}
        </p>
      </div>
    </article>
  );
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <div className="page-enter">
      <section style={{ padding: 'calc(var(--section-py) * 0.67) 0 0', borderBottom: `1px solid ${BRAND.ink}` }}>
        <div className="container">
          <MetaLabel>Архів / 04</MetaLabel>
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
            Роботи<br />
            <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontWeight: 400 }}>2019 — 2026</span>
          </h1>
          <div className={styles.filters}>
            {FILTERS.map((f, i) => (
              <button
                key={f}
                onClick={() => setActiveFilter(i)}
                aria-pressed={activeFilter === i}
                style={{
                  fontFamily: FONTS.mono,
                  fontSize: 12,
                  padding: '10px 16px',
                  background: activeFilter === i ? BRAND.ink : 'transparent',
                  color: activeFilter === i ? BRAND.paper : BRAND.ink,
                  border: `1px solid ${BRAND.ink}`,
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                  borderRadius: 0,
                  outline: 'none',
                  transition: 'background 120ms, color 120ms',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'var(--section-py) 0' }}>
        <div className="container">
          <div className={styles.grid}>
            {PROJECTS.map((p, i) => <WorkCard key={p.id} p={p} idx={i + 1} />)}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
