import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './MenuButton.module.css';

const classes = (disabled: boolean): string =>
  cx(styles.root, {
    [styles.disabled]: disabled,
    [styles.enabled]: !disabled,
  });

const MenuButton: React.FC<{
  icon: ReactNode;
  children: ReactNode[];
  disabled: boolean;
}> = ({ disabled, children, icon }) => {
  return (
    <div className={classes(disabled)}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{children}</div>
    </div>
  );
};

export default React.memo(MenuButton);
