import React, { MouseEventHandler, ReactNode } from 'react';
import clsx from 'classnames';
import AntMenu, { ClickParam } from 'antd/es/menu';
import Layout from 'antd/es/layout';
import styles from './Menu.module.css';

const Menu: React.FC<{
  logo: ReactNode;
  children: ReactNode[];
  selectedKeys: string[];
  logoAltText?: string;
  onClick: (event: ClickParam) => void;
  className?: string;
}> = ({ children, className, logo, onClick, selectedKeys }) => {
  return (
    <Layout.Header className={clsx(styles.root, className)}>
      {logo}

      <div className={styles.menuContainer}>
        <AntMenu className={styles.menu} theme="dark" mode="horizontal" selectedKeys={selectedKeys} onClick={onClick}>
          {children}
        </AntMenu>
      </div>
    </Layout.Header>
  );
};

export default React.memo(Menu);
