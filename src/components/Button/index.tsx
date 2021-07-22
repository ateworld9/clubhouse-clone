import { FC, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

interface IButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  color?: 'green' | 'gray';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: FC<IButtonProps> = ({
  children,
  disabled,
  color,
  onClick,
  className,
}) => {
  const colors = {
    green: styles.buttonGreen,
    gray: styles.buttonGray,
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(className, styles.button, colors[color])}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
