export const isSupportedFileType = (supportedFileTypes: string[], fileType: string): boolean => {
  return supportedFileTypes.some(supportedFileType => {
    if (supportedFileType === fileType) {
      return true;
    }

    const sftParts = supportedFileType.split('/');
    const parts = fileType.split('/');

    if (sftParts.length === 2 && parts.length === 2) {
      if (sftParts[1] === '*' && sftParts[0] === parts[0]) {
        return true;
      }
    }

    return false;
  });
};
