import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BRAND, FONTS } from '../tokens';
import { PROJECTS } from '../data';
import type { Project } from '../types';
import Idx from '../components/Idx';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import styles from './WorkStrip.module.css';

function ProjectRow({ p, idx }: { p: Project; idx: number }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      role="listitem"
      className={styles.row}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        borderBottom: `1px solid ${BRAND.ink}`,
        background: hover ? BRAND.signal : BRAND.paper,
      }}
    >
      <Idx n={idx} />
      <div>
        <div style={{ fontFamily: FONTS.display, fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 500, letterSpacing: '-0.025em', lineHeight: 1 }}>
          {p.client}
        </div>
        <div style={{ fontFamily: FONTS.mono, fontSize: 11, color: BRAND.graphite, marginTop: 6, letterSpacing: '0.04em' }}>
          {p.type} · {p.year}
        </div>
      </div>
      <div className={styles.desc} style={{ fontFamily: FONTS.display, fontSize: 15, color: BRAND.graphite, lineHeight: 1.5 }}>
        {p.desc}
      </div>
      <div className={styles.tags} style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {p.tags.map((t) => (
          <span
            key={t}
            style={{ fontFamily: FONTS.mono, fontSize: 10, padding: '4px 8px', border: `1px solid ${BRAND.ink}`, background: hover ? BRAND.paper : 'transparent', letterSpacing: '0.04em' }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className={styles.kpi} style={{ fontFamily: FONTS.display, fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em' }}>
        {p.kpi}
      </div>
      <div
        className={styles.arrow}
        style={{ fontSize: 26, transform: hover ? 'translateX(6px)' : 'translateX(0)', transition: 'transform 140ms' }}
        aria-hidden="true"
      >
        →
      </div>
    </div>
  );
}

export default function WorkStrip() {
  const navigate = useNavigate();

  return (
    <section
      style={{ background: BRAND.paper, color: BRAND.ink, padding: 'var(--section-py) 0', borderBottom: `1px solid ${BRAND.ink}` }}
      aria-label="Вибрані проєкти"
    >
      <div className="container">
        <div className={styles.header}>
          <SectionTitle eyebrow="Роботи / 2025—2026">
            Вибрані<br />проєкти.
          </SectionTitle>
          <div>
            <Button variant="secondary" arrow onClick={() => navigate('/work')}>Всі роботи</Button>
          </div>
        </div>

        <div role="list" style={{ border: `1px solid ${BRAND.ink}` }}>
          {PROJECTS.map((p, i) => <ProjectRow key={p.id} p={p} idx={i + 1} />)}
        </div>
      </div>
    </section>
  );
}
