import React from 'react';
import { Upload } from '@basistechnology/crux';
import Example from './Example';

export default function UploadExample() {
  return (
    <Example label="Upload">
      <Upload
        action="/upload"
        supportedFileTypes={['image/*']}
        data={{ prop1: 'value1' }}
        onUpload={() => {}}
        onReject={() => {}}
        onUploadError={() => {}}
        onCancel={() => {}}
      />
    </Example>
  );
}
