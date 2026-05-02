import { useState, CSSProperties, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { BRAND, FONTS } from '../tokens';
import type { ButtonVariant, ButtonSize } from '../types';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  arrow?: boolean;
  onClick?: () => void;
  to?: string;
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const sizeMap: Record<ButtonSize, { padY: number; padX: number; fs: number }> = {
  sm: { padY: 10, padX: 16, fs: 12 },
  md: { padY: 16, padX: 24, fs: 13 },
  lg: { padY: 20, padX: 32, fs: 14 },
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  arrow = false,
  onClick,
  to,
  href,
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const [hover, setHover] = useState(false);
  const s = sizeMap[size];

  const base: CSSProperties = {
    fontFamily: FONTS.mono,
    fontSize: s.fs,
    fontWeight: 500,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    padding: `${s.padY}px ${s.padX}px`,
    borderRadius: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    transition: 'background 120ms ease, color 120ms ease, transform 120ms ease, box-shadow 120ms ease',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    outline: 'none',
    opacity: disabled ? 0.5 : 1,
  };

  const variants: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: hover ? BRAND.signal : BRAND.ink,
      color: hover ? BRAND.ink : BRAND.paper,
      border: `1px solid ${BRAND.ink}`,
    },
    secondary: {
      background: 'transparent',
      color: BRAND.ink,
      border: `1px solid ${BRAND.ink}`,
    },
    ghost: {
      background: hover ? BRAND.ink : 'transparent',
      color: hover ? BRAND.paper : BRAND.ink,
      border: `1px solid ${BRAND.ink}`,
    },
    signal: {
      background: BRAND.signal,
      color: BRAND.ink,
      border: `1px solid ${BRAND.ink}`,
      transform: hover ? 'translate(-3px, -3px)' : 'translate(0, 0)',
      boxShadow: hover ? `3px 3px 0 ${BRAND.ink}` : '0 0 0 transparent',
    },
  };

  const style: CSSProperties = { ...base, ...variants[variant] };
  const events = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  };

  const inner = (
    <>
      {children}
      {arrow && <span style={{ fontSize: s.fs + 2 }}>→</span>}
    </>
  );

  if (to) {
    return <Link to={to} style={style} {...events}>{inner}</Link>;
  }
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" style={style} {...events}>{inner}</a>;
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style} {...events}>
      {inner}
    </button>
  );
}
