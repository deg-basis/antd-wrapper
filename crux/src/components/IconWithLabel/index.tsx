import React from 'react';
import cx from 'classnames';
import styles from './IconWithLabel.module.css';
import Icon, { IconName } from '../Icon';

const IconWithLabel: React.FC<{
  name: IconName;
  label: string;
  className?: string;
  iconPosition?: 'left' | 'right';
}> = ({ iconPosition = 'left', ...props }) => {
  const icon = (
    <Icon
      className={cx({
        [styles.left]: iconPosition === 'left',
        [styles.right]: iconPosition === 'right',
      })}
      name={props.name}
    />
  );
  return (
    <span className={cx(styles.root, props.className)}>
      {iconPosition === 'left' && icon}
      <span>{props.label}</span>
      {iconPosition === 'right' && icon}
    </span>
  );
};

export default React.memo(IconWithLabel);
