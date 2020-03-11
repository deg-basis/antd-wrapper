import ANTDButton from 'antd/es/button';
import 'antd/es/button/style/css';
import React from 'react';

/**
 * A sample component which uses an Ant Design component internally.
 */
const Button: React.FC<{ onClick: () => void }> = props => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  props.onClick();
  return <ANTDButton onClick={handleClick}>{props.children}</ANTDButton>;
};

export default Button;
