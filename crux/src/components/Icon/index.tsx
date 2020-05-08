import React from 'react';
import cx from 'classnames';
import styles from './Icon.module.css';

const NAME_CODE_MAP = {
  edit: '\u{e900}',
  back: '\u{e901}',
  delete: '\u{e902}',
  'user-alert': '\u{e903}',
  'dd-arrow-down': '\u{e904}',
  'dd-arrow-right': '\u{e905}',
  'external-link': '\u{e906}',
  search: '\u{e907}',
  'search-adv': '\u{e908}',
  settings: '\u{e909}',
  refresh: '\u{e90a}',
  'go-right': '\u{e90b}',
  'zoom-in': '\u{e90c}',
  close2: '\u{e90d}',
  'th-list': '\u{e90e}',
  'zoom-out': '\u{e90f}',
  'data-good': '\u{e910}',
  help: '\u{e911}',
  'data-none': '\u{e912}',
  'data-warning': '\u{e913}',
  'sign-out': '\u{e914}',
  'move-left': '\u{e915}',
  'move-right': '\u{e916}',
  'move-up': '\u{e917}',
  'move-down': '\u{e918}',
  upload: '\u{e919}',
  filter: '\u{e91a}',
  'close-left': '\u{e91b}',
  'double-down': '\u{e91c}',
  question: '\u{e91d}',
  location: '\u{e91e}',
  'add-square': '\u{e91f}',
  collapse: '\u{e920}',
  'entity-person': '\u{e921}',
  expand: '\u{e922}',
  'entity-org': '\u{e923}',
  'x-circle': '\u{e924}',
  'exclamation-circle': '\u{e925}',
  clone: '\u{e926}',
  user: '\u{e927}',
  close: '\u{e928}',
  'alert-format': '\u{e929}',
  'TXT-format': '\u{e92a}',
  'CSV-format': '\u{e92b}',
  graph: '\u{e92c}',
  extent: '\u{e92d}',
  reference: '\u{e92e}',
  'round-arrow-left': '\u{e92f}',
  'round-arrow-right': '\u{e930}',
  compare: '\u{e931}',
  'API-dev': '\u{e932}',
  'reference-auth': '\u{e933}',
  'location-auth': '\u{e934}',
  'org-auth': '\u{e935}',
  'person-auth': '\u{e936}',
  calendar: '\u{e937}',
  'copy-link': '\u{e938}',
  'password-lock': '\u{e939}',
  'adv-settings': '\u{e93a}',
  embed: '\u{e93b}',
  bell: '\u{e93c}',
  'org-alert': '\u{e93d}',
  'location-alert': '\u{e93e}',
  'reference-alert': '\u{e93f}',
  download: '\u{e940}',
  evaluate: '\u{e941}',
  menu: '\u{e942}',
};

export type IconName = keyof typeof NAME_CODE_MAP;

/**
 * Basis IDR icons
 */
const Icon: React.FC<{
  name: IconName;
  className?: string;
}> = props => {
  return <span className={cx(styles.root, props.className)}>{NAME_CODE_MAP[props.name]}</span>;
};

export default Icon;
