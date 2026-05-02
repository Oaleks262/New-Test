import { useNavigate } from 'react-router-dom';
import { BRAND, FONTS } from '../tokens';
import MetaLabel from '../components/MetaLabel';
import Button from '../components/Button';
import styles from './CTA.module.css';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section
      style={{ background: BRAND.signal, color: BRAND.ink, padding: 'var(--section-py) 0', borderBottom: `1px solid ${BRAND.ink}` }}
      aria-label="Заклик до дії"
    >
      <div className={`container ${styles.inner}`}>
        <h2
          style={{
            fontFamily: FONTS.display,
            fontSize: 'clamp(52px, 9vw, 160px)',
            fontWeight: 500,
            letterSpacing: '-0.05em',
            lineHeight: 0.88,
            margin: 0,
          }}
        >
          Готові<br />почати?
        </h2>
        <div className={styles.aside}>
          <MetaLabel dot={false}>Відповідь — протягом 24 годин</MetaLabel>
          <Button variant="primary" arrow size="lg" onClick={() => navigate('/contact')}>
            Почати брифінг
          </Button>
        </div>
      </div>
    </section>
  );
}
