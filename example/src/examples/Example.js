import React from 'react';
import { Heading } from 'antd-wrapper';

export default function Example({ children, label }) {
  return (
    <div className="example">
      <Heading level={2}>{label}</Heading>

      {children}
    </div>
  );
}
