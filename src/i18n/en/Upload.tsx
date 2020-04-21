import React from 'react';

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

type MessageFunction = () => string | React.ReactNode;

const plural = (
  n: number,
  messages: {
    [key: number]: string | MessageFunction;
    plural?: string | MessageFunction;
    default: string | MessageFunction;
  },
): string | React.ReactNode => {
  const applyIfExists = (key: any) => {
    if (key in messages) {
      if (typeof messages[key] === 'function') {
        // messages[key] is a function
        // @ts-ignore
        return messages[key]();
      } else {
        return messages[key];
      }
    } else {
      return undefined;
    }
  };

  const message = applyIfExists(n);
  if (message) {
    return message;
  } else if (n >= 2) {
    const pluralMessage = applyIfExists('plural');
    if (pluralMessage) {
      return pluralMessage;
    }
  }

  if (typeof messages.default === 'function') {
    return messages.default();
  } else {
    return messages.default;
  }
};
