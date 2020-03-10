import React from 'react';
import cx from 'classnames';
import styles from './IconWithLabel.module.css';
import { Icon, IconName } from '../Icon';

/**
 * Basis IDR icons with label
 */
export const IconWithLabel: React.FC<{
  name: IconName;
  label: string;
  className?: string;
}> = props => {
  return (
    <span className={cx(styles.root, props.className)}>
      <Icon className={styles.icon} name={props.name} />
      <span>{props.label}</span>
    </span>
  );
};
