import React from 'react';
import { Heading } from 'antd-wrapper';
import Example from './Example';
import './HeadingExample.css';

export default function HeadingExample() {
  return (
    <Example label="Heading">
      <div className="heading-list">
        <Heading level={1}>Level 1</Heading>
        <Heading level={2}>Level 2</Heading>
        <Heading level={3}>Level 3</Heading>
        <Heading level={4}>Level 4</Heading>
      </div>
    </Example>
  );
}
