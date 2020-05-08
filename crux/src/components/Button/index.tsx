import ANTDButton from 'antd/es/button';
import 'antd/es/button/style/css';
import React from 'react';

export type ButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'danger' | 'link';

/**
 * A sample component which uses an Ant Design component internally.
 */
const Button: React.FC<{ type: ButtonType; onClick?: () => void }> = props => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <ANTDButton type={props.type} onClick={handleClick}>
      {props.children}
    </ANTDButton>
  );
};

export default Button;
