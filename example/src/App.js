import React from 'react';
import { Heading } from '@basistechnology/crux';
import './App.css';
import IconExample from './examples/IconExample';
import IconWithLabelExample from './examples/IconWithLabelExample';
import ButtonExample from './examples/ButtonExample';
import HeadingExample from './examples/HeadingExample';
// FIXME: these may be uncommented once UploadExample and IconWithTooltipExample are exported from crux
// import UploadExample from "./examples/UploadExample";
// import IconWithTooltipExample from "./examples/IconWithTooltipExample";

function App() {
  return (
    <div className="app">
      <Heading level={1}>Examples</Heading>

      <ButtonExample />
      <HeadingExample />
      <IconExample />
      <IconWithLabelExample />
      {/* FIXME: these may be uncommented once UploadExample and IconWithTooltipExample are exported from crux */}
      {/*<IconWithTooltipExample/>*/}
      {/*<UploadExample/>*/}
    </div>
  );
}

export default App;
