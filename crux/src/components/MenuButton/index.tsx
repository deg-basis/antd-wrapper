import React, { ReactNode } from 'react';
import { Menu as AntMenu } from 'antd';

const MenuButton: React.FC<{
  children: ReactNode[];
  disabled?: boolean;
  key: string;
}> = ({ children, disabled, key, ...antDProps }) => {
  return (
    <AntMenu.Item key={key} disabled={disabled} {...antDProps}>
      {children}
    </AntMenu.Item>
  );
};

export default React.memo(MenuButton);
