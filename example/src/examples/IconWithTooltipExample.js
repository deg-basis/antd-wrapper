import React from 'react';
import { IconWithTooltip } from '@basistechnology/crux';
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
