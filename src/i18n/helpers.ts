import React from 'react';

type MessageFunction = () => string | React.ReactNode;

export const plural = (
  n: number,
  messages: {
    [key: number]: string | MessageFunction;
    plural?: string | MessageFunction;
    default: string | MessageFunction;
  },
): string | React.ReactNode => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applyIfExists = (key: any): string | MessageFunction | undefined => {
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
