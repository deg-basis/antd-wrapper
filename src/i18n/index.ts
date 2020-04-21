import { message as Upload } from './en/Upload';

type Messages = {
  Upload: typeof Upload;
};

const MESSAGES: Messages = {
  Upload,
};

export const getMessages = <Namespace extends keyof Messages>(namespace: Namespace): Messages[Namespace] => {
  return MESSAGES[namespace];
};
