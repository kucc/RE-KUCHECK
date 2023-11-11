import { CSSProperties } from 'react';

export const DefaultLogo = ({
  logoName,
  width = 49,
  height,
  onClick,
  isPointer = false,
  style,
  ariaLabel,
}: {
  logoName: string;
  width: number;
  height: number;
  onClick?: () => void;
  isPointer?: boolean;
  style?: CSSProperties;
  ariaLabel?: string;
}) => {
  return (
    <img
      onClick={onClick}
      aria-label={ariaLabel}
      src={`/img/logo/${logoName}.svg`}
      alt='KUCC 로고'
      width={width + 'px'}
      height={height + 'px'}
      style={{ cursor: isPointer ? 'pointer' : 'default', ...style }}
    />
  );
};
