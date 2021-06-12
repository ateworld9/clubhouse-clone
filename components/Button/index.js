import clsx from 'clsx';

import styles from './Button.module.scss';

export const Button = ({ children, disabled, color, onClick, className }) => {
  const colors = {
    green: styles.buttonGreen,
    gray: styles.buttonGray,
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={clsx(className, styles.button)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
