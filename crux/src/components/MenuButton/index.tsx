import React, { ReactNode } from 'react';
import styles from './MenuButton.module.css';

const MenuButton: React.FC<{
  logo: ReactNode;
  children: ReactNode[];
}> = ({ children, logo }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>{logo}</div>
      <div className={styles.label}>{children}</div>
    </div>
  );
};

export default React.memo(MenuButton);
