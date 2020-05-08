import React from 'react';
import { plural } from '../helpers';

export const message = {
  message: {
    dragFilesHere: 'Drag Files Here',
    orBrowseFor: 'or Browse for',
    files: 'Files',
    or: 'or',
    folders: 'Folders',
  },
  cancel: 'Cancel',
  progress: (done: number, total: number) =>
    plural(done, {
      default: () => (
        <span>
          <strong>
            {done} of {total}
          </strong>{' '}
          file completed
        </span>
      ),
      plural: () => (
        <span>
          <strong>
            {done} of {total}
          </strong>{' '}
          files completed
        </span>
      ),
    }),
};
