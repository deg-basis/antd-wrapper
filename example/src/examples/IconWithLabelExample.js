import React from 'react';
import { IconWithLabel } from 'antd-wrapper';
import Example from './Example';

export default function IconWithLabelExample() {
  return (
    <Example label="IconWithLabel">
      <ul>
        <li>
          <IconWithLabel name="settings" label="settings" />
        </li>
        <li>
          <IconWithLabel name="help" label="help" />
        </li>
        <li>
          <IconWithLabel name="data-good" label="data-good" />
        </li>
      </ul>
    </Example>
  );
}
