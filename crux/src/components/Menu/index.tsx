import React, { ReactNode } from 'react';
import styles from './Menu.module.css';

const Menu: React.FC<{
  logo: ReactNode;
  children: ReactNode[];
}> = ({ children, logo }) => {
  return (
    <div className={styles.root}>
      {logo}

      <div className={styles.buttons}>{children}</div>
    </div>
  );
};

export default React.memo(Menu);
