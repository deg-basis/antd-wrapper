import React, { ReactNode } from 'react';
import styles from './MenuButton.module.css';

const MenuButton: React.FC<{
  icon: ReactNode;
  children: ReactNode[];
}> = ({ children, icon }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.label}>{children}</div>
    </div>
  );
};

export default React.memo(MenuButton);
