import { BRAND, FONTS } from '../tokens';

interface IdxProps {
  n: number;
}

export default function Idx({ n }: IdxProps) {
  return (
    <span
      style={{
        fontFamily: FONTS.mono,
        fontSize: 11,
        fontWeight: 500,
        color: BRAND.ash,
        letterSpacing: '0.04em',
      }}
      aria-hidden="true"
    >
      {String(n).padStart(2, '0')}
    </span>
  );
}
