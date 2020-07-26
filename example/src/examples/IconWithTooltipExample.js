import React from 'react';
import { IconWithTooltip } from 'antd-wrapper';
import Example from './Example';

export default function IconWithTooltipExample() {
  return (
    <Example label="IconWithTooltip">
      <ul>
        <li>
          <IconWithTooltip name="settings" tooltip="settings" />
        </li>
        <li>
          <IconWithTooltip name="help" tooltip="help" />
        </li>
        <li>
          <IconWithTooltip name="data-good" tooltip="data-good" />
        </li>
      </ul>
    </Example>
  );
}
