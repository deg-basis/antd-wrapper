import cx from 'classnames';
import styles from './Upload.module.css';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Icon from '../Icon';
import { Button, Modal, Spin, Upload as AUpload } from 'antd';
import { RcFile, UploadChangeParam } from 'antd/es/upload';
import { UploadFile } from 'antd/es/upload/interface';
import { UploadProps } from 'antd/lib/upload/interface';
import { getMessages } from '../../i18n';

const T = getMessages('Upload');

/**
 * stopped -> uploading -> finishing -> stopped
 *                      -> canceling -> stopped
 */
type UploadState = 'stopped' | 'uploading' | 'finishing' | 'canceling';

// webkitdirectory=true means that the form accepts a directory only.
// So it is required to use webkitdirectory=true or false appropriately.
// In this component, there are two <Upload> components for true or false, and <Dragger> for D&D.
const isDirectoryUploadSupported = (): boolean => {
  const input = document.createElement('input') as { webkitdirectory?: boolean };
  // modern browsers supports webkitdirectory attribute
  //   https://caniuse.com/#feat=input-file-directory
  return typeof input.webkitdirectory === 'boolean';
};

const Upload: React.FC<{
  action: string;
  supportedFileTypes: string[];
  data: { [name: string]: string };
  onUpload: () => void;
  /** on rejected before uploading */
  onReject: (file: RcFile) => void;
  onUploadError: (file: UploadFile) => void;
  onCancel: () => void;
  className?: string;
}> = ({ onCancel, ...props }) => {
  // all files including not to upload because of unsupported file
  const [numberOfFiles, setNumberOfFiles] = useState(0);
  const [numberOfFilesToUpload, setNumberOfFilesToUpload] = useState(0);
  // files processed including both uploaded and handled as error
  const [numberOfProcessedFiles, setNumberOfProcessedFiles] = useState(0);
  const [numberOfUploadedFiles, setNumberOfUploadedFiles] = useState(0);
  // use display* state in the progress dialog when stopped state. These remain after numberOf* state is reset.
  const [displayNumberOfFiles, setDisplayNumberOfFiles] = useState(0);
  const [displayNumberOfProcessedFiles, setDisplayNumberOfProcessedFiles] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);
  const [showProgress, setShowProgress] = useState(false);
  const [uploadState, setUploadState] = useState<UploadState>('stopped');

  const allowDirectoryUpload = useMemo(() => isDirectoryUploadSupported(), []);

  const stop = useCallback(() => {
    setUploadedFiles([]);
    setNumberOfFiles(0);
    setNumberOfFilesToUpload(0);
    setNumberOfProcessedFiles(0);
    setNumberOfUploadedFiles(0);
    setDisplayNumberOfFiles(numberOfFiles);
    setDisplayNumberOfProcessedFiles(numberOfProcessedFiles);
    setUploadState('stopped');
  }, [numberOfFiles, numberOfProcessedFiles]);

  useEffect(() => {
    setShowProgress(uploadState === 'uploading' || uploadState === 'finishing');
  }, [uploadState]);

  useEffect(() => {
    if (uploadState === 'uploading' && numberOfUploadedFiles === numberOfFilesToUpload) {
      setUploadState('finishing');
    }
  }, [numberOfFilesToUpload, numberOfUploadedFiles, uploadState]);

  useEffect(() => {
    if (uploadState === 'canceling') {
      stop();
    } else if (uploadState === 'finishing') {
      // delay to show progress dialog for a short while
      setTimeout(stop, 500);
    }
  }, [stop, uploadState]);

  const beforeUpload = (file: RcFile): boolean | PromiseLike<void> => {
    if (uploadState === 'canceling') {
      return false;
    }

    setNumberOfFiles(x => x + 1);

    if (props.supportedFileTypes.length > 0 && !props.supportedFileTypes.includes(file.type)) {
      props.onReject(file);
      setNumberOfProcessedFiles(x => x + 1);
      return false;
    }

    setNumberOfFilesToUpload(x => x + 1);
    return true;
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
    setUploadState('canceling');
    onCancel();
  };

  const handleChange = (info: UploadChangeParam): void => {
    setUploadedFiles(info.fileList);

    switch (info.file.status) {
      case 'uploading':
        setUploadState('uploading');
        break;
      case 'done':
        setNumberOfProcessedFiles(x => x + 1);
        setNumberOfUploadedFiles(x => x + 1);
        if (uploadState !== 'canceling') {
          props.onUpload();
        }
        break;
      case 'error':
        setNumberOfProcessedFiles(x => x + 1);
        setNumberOfUploadedFiles(x => x + 1);
        props.onUploadError(info.file);
        break;
      default:
    }
  };

  const stopPropagation: React.MouseEventHandler = e => e.stopPropagation();

  const uploadProps: UploadProps = {
    accept: props.supportedFileTypes.join(','),
    fileList: uploadedFiles,
    multiple: true,
    showUploadList: false,
    beforeUpload,
    onChange: handleChange,
    action: props.action,
    disabled: uploadState === 'uploading' || uploadState === 'canceling' || uploadState === 'finishing',
    method: 'post',
    data: props.data,
  };

  const numberOfFilesLabel =
    uploadState === 'stopped'
      ? T.progress(displayNumberOfProcessedFiles, displayNumberOfFiles)
      : T.progress(numberOfProcessedFiles, numberOfFiles);

  return (
    <div className={cx(styles.root, props.className)}>
      <AUpload.Dragger {...uploadProps}>
        <div className={styles.droppableArea}>
          <span>{T.message.dragFilesHere}</span>
          <Icon className={styles.icon} name="upload" />
          <span>{T.message.orBrowseFor}</span>
          <div onClick={stopPropagation}>
            <AUpload {...uploadProps}>
              <Button className={styles.button} type="link">
                {T.message.files}
              </Button>
            </AUpload>
          </div>
          {allowDirectoryUpload && (
            <>
              <span>{T.message.or}</span>
              <div onClick={stopPropagation}>
                <AUpload {...uploadProps} directory={true}>
                  <Button className={styles.button} type="link">
                    {T.message.folders}
                  </Button>
                </AUpload>
              </div>
            </>
          )}
        </div>
      </AUpload.Dragger>
      <div className={styles.progressContainer}>
        <Modal visible={showProgress} footer={null} closable={false}>
          <div>
            <Spin />
            <span className={styles.numbers}>{numberOfFilesLabel}</span>
          </div>
          <Button className={styles.cancel} type="link" onClick={handleCancelClick}>
            {T.cancel}
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default Upload;
