import React from 'react';
import { Icon } from 'antd-wrapper';
import Example from './Example';

export default function IconExample() {
  return (
    <Example label="Icon">
      <table>
        <tbody>
          <tr>
            <td>settings</td>
            <td>
              <Icon name="settings" />
            </td>
          </tr>

          <tr>
            <td>help</td>
            <td>
              <Icon name="help" />
            </td>
          </tr>

          <tr>
            <td>data-good</td>
            <td>
              <Icon name="data-good" />
            </td>
          </tr>
        </tbody>
      </table>
    </Example>
  );
}
