import React from 'react';
import { Button } from 'antd-wrapper';
import Example from './Example';
import './ButtonExample.css';

export default function ButtonExample() {
  return (
    <Example label="Button">
      <div className="button-example-button">
        <Button type="primary">Primary</Button>
      </div>
      <div className="button-example-button">
        <Button type="danger">Danger</Button>
      </div>
    </Example>
  );
}
