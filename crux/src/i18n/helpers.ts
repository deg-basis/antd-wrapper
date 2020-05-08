import React from 'react';

type MessageFunction = (n: number) => string | React.ReactNode;

/**
 * Returns appropriate string in singular/plural form for a given number
 *
 * Note that this function assumes only one is a singular.
 *
 * Usage:
 * plural(n, {
 *     default: n => `${n} item`,
 *     plural: n => `${n} items`,
 *     0: `no items`,
 * });
 */
export const plural = (
  n: number,
  messages: {
    [key: number]: string | MessageFunction;
    default: string | MessageFunction;
    plural?: string | MessageFunction;
  },
): string | React.ReactNode => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const applyIfExists = (key: any): string | MessageFunction | undefined => {
    if (key in messages) {
      if (typeof messages[key] === 'function') {
        // messages[key] is a function
        // @ts-ignore
        return messages[key](n);
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
  } else if (n !== 1) {
    const pluralMessage = applyIfExists('plural');
    if (pluralMessage) {
      return pluralMessage;
    }
  }

  if (typeof messages.default === 'function') {
    return messages.default(n);
  } else {
    return messages.default;
  }
};
