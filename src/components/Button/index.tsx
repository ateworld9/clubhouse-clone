import { FC, MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';

import styles from './Button.module.scss';

const colors = {
  green: styles.buttonGreen,
  gray: styles.buttonGray,
  blue: styles.buttonBlue,
};

interface IButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  color?: keyof typeof colors;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const Button: FC<IButtonProps> = ({ children, disabled, color, onClick, className }) => {
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
