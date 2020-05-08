import React from 'react';
import cx from 'classnames';
import Icon, { IconName } from '../Icon';
import { Tooltip } from 'antd';
import 'antd/es/tooltip/style/css';

// The inner <span> is a workaround for "Function components cannot be given refs." error in the console.
// With this error, <Tooltip> does not work.
//
// The whole message is the following:
// Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?
//
// https://github.com/ant-design/ant-design/issues/21133#issuecomment-613808009

const IconWithTooltip: React.FC<{
  name: IconName;
  tooltip: string;
  className?: string;
}> = props => {
  return (
    <Tooltip title={props.tooltip}>
      <span>
        <Icon className={cx(props.className)} name={props.name} />
      </span>
    </Tooltip>
  );
};

export default IconWithTooltip;
