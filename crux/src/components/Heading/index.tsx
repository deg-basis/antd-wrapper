import React from 'react';

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Heading with dynamic level
 *
 * @prop level heading level
 */
const Heading: React.FC<{
  /** heading level */
  level: HeadingLevel;
} & React.InputHTMLAttributes<HTMLHeadingElement>> = props => {
  const H = 'h' + props.level;
  return <H {...props}>{props.children}</H>;
};

export default Heading;
