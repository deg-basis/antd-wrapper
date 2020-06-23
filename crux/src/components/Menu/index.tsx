import React, { MouseEventHandler, ReactNode } from 'react';
import AntMenu, { ClickParam } from 'antd/es/menu';
import Layout from 'antd/es/layout';
import styles from './Menu.module.css';

const Menu: React.FC<{
  logo: ReactNode;
  children: ReactNode[];
  selectedKeys: string[];
  logoAltText?: string;
  onClick: (event: ClickParam) => void;
}> = ({ children, logo, onClick, selectedKeys }) => {
  console.log('type:', typeof AntMenu, typeof AntMenu.Item, typeof AntMenu.ItemGroup);
  return (
    <Layout.Header className={styles.root}>
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
