import cx from 'classnames';
import styles from './Upload.module.css';
import React, { useMemo, useState } from 'react';
import Icon from '../Icon';
import { Button, Progress, Upload as AUpload } from 'antd';
import { UploadChangeParam } from 'antd/es/upload';
import { RcFile } from 'antd/lib/upload/interface';
import { UploadFile } from 'antd/es/upload/interface';

// TODO: should be replaced by an i18n function
const T = {
  message: 'Drag Files Here or Click to Browse Files',
  cancel: 'Cancel',
};

const isDirectoryUploadSupported = () => {
  const input = document.createElement('input') as { webkitdirectory?: any };
  // modern browsers supports webkitdirectory attribute
  //   https://caniuse.com/#feat=input-file-directory
  return typeof input.webkitdirectory === 'boolean';
};

const Upload: React.FC<{
  action: string;
  data?: { [name: string]: string };
  onUpload: (uploadFile: UploadFile) => void;
  onError: (uploadFile: UploadFile) => void;
  className?: string;
}> = props => {
  const [numberOfFiles, setNumberOfFiles] = useState(0);
  const [numberOfUploadedFiles, setNumberOfUploadedFiles] = useState(0);
  const [cancelInProgress, setCancelInProgress] = useState(false);
  const [uploading, setUploading] = useState(false);

  const allowDirectoryUpload = useMemo(() => isDirectoryUploadSupported(), []);

  const beforeUpload = (file: RcFile, fileList: RcFile[]): boolean | PromiseLike<void> => {
    console.log(`beforeUpload: ${fileList.length}`);
    setNumberOfFiles(x => x + 1);
    return true;
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setCancelInProgress(true);
  };

  const handleChange = (info: UploadChangeParam) => {
    switch (info.file.status) {
      case 'uploading':
        console.log('Upload::uploading');
        setUploading(true);
        break;
      case 'done':
        console.log(`Upload::done: (${numberOfUploadedFiles} / ${numberOfFiles})`);
        setUploading(false);
        if (cancelInProgress) {
          console.log('canceling');
          setNumberOfFiles(0);
          setNumberOfUploadedFiles(0);
          setCancelInProgress(false);
        } else {
          setNumberOfUploadedFiles(x => x + 1);
        }
        props.onUpload(info.file);
        break;
      case 'success':
        console.log('Upload::success');
        break;
      case 'error':
        console.log('Upload::error');
        setUploading(false);
        props.onError(info.file);
        break;
      case 'removed':
      default:
        break;
    }
  };

  return (
    <div className={cx(styles.root, props.className)}>
      <AUpload.Dragger
        multiple={true}
        showUploadList={false}
        directory={allowDirectoryUpload}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        action={props.action}
        method="post"
        data={props.data}
      >
        <div className={styles.draggerContent}>
          {T.message}
          <Icon className={styles.icon} name="upload" />
        </div>
      </AUpload.Dragger>
      <div className={styles.progressContainer}>
        {uploading && (
          <>
            <Progress
              percent={(numberOfUploadedFiles / numberOfFiles) * 100}
              type="line"
              format={() => `${numberOfUploadedFiles} / ${numberOfFiles}`}
            />
            <Button className={styles.cancel} type="link" onClick={handleCancelClick}>
              {T.cancel}
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Upload;
