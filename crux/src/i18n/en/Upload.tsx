import React, { ReactNode } from 'react';
import { plural } from '../helpers';

export const message = {
  message: {
    single: (icon: ReactNode, file: (message: string) => ReactNode) => (
      <>
        <span>Drag a File Here</span>
        {icon}
        <span>or Browse for a</span>
        {file('File')}
      </>
    ),
    multiple: (icon: ReactNode, files: (message: string) => ReactNode, folders?: (message: string) => ReactNode) => (
      <>
        <span>Drag Files Here</span>
        {icon}
        <span>or Browse for</span>
        {files('Files')}
        {folders != null && (
          <>
            <span>or</span>
            {folders('Folders')}
          </>
        )}
      </>
    ),
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
