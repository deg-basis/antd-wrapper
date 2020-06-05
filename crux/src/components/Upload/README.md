### Single File

```jsx
<Upload
  action="/upload"
  supportedFileTypes={['image/*']}
  data={{ prop1: 'value1' }}
  single={true}
  onUpload={() => {}}
  onReject={() => {}}
  onUploadError={() => {}}
  onCancel={() => {}}
/>
```

### Multiple Files

```jsx
<Upload
  action="/upload"
  supportedFileTypes={['image/*']}
  data={{ prop1: 'value1' }}
  onUpload={() => {}}
  onReject={() => {}}
  onUploadError={() => {}}
  onCancel={() => {}}
/>
```
