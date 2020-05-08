import React from 'react';
import { Heading } from '@basistechnology/crux';

export default function Example({ children, label }) {
  return (
    <div className="example">
      <Heading level={2}>{label}</Heading>

      {children}
    </div>
  );
}
