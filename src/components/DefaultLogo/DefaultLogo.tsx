import { CSSProperties } from 'react';

export const DefaultLogo = ({
  logoName,
  width = 49,
  height,
  onClick,
  isPointer = false,
  style,
}: {
  logoName: string;
  width: number;
  height: number;
  onClick?: () => void;
  isPointer?: boolean;
  style?: CSSProperties;
}) => {
  return (
    <img
      onClick={onClick}
      src={`/img/logo/${logoName}.svg`}
      alt='default-logo'
      width={width + 'px'}
      height={height + 'px'}
      style={{ cursor: isPointer ? 'pointer' : 'default', ...style }}
    />
  );
};
