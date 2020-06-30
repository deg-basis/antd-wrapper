import React, { useState } from 'react';
import { Upload } from '@basistechnology/crux';
import Example from './Example';

export default function UploadExample() {
  // track uploaded file count
  const [uploadedCount, setUploadedCount] = useState(0);

  const handleCancel = () => {};

  const handleUpload = () => {
    setUploadedCount(uploadedCount => uploadedCount + 1);
  };

  const handleReject = file => {
    throw new Error('file rejected');
  };

  const handleUploadError = file => {
    throw new Error(`upload error: ${file.error}`);
  };

  return (
    <Example label="Upload">
      <p>Uploaded Count: {uploadedCount}</p>
      <Upload
        /* /upload is configured in setupProxy.js to return 200 */
        action="/upload"
        supportedFileTypes={['image/*']}
        data={{}}
        onUpload={handleUpload}
        onReject={handleReject}
        onUploadError={handleUploadError}
        onCancel={handleCancel}
      />
    </Example>
  );
}
