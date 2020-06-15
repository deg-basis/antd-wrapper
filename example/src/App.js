import React from 'react';
import { Heading } from '@basistechnology/crux';
import './App.css';
import MenuExample from './examples/MenuExample';
import IconExample from './examples/IconExample';
import IconWithLabelExample from './examples/IconWithLabelExample';
import ButtonExample from './examples/ButtonExample';
import HeadingExample from './examples/HeadingExample';
import UploadExample from "./examples/UploadExample";
import IconWithTooltipExample from "./examples/IconWithTooltipExample";

function App() {
  return (
    <div className="app">
      <MenuExample />

      <div className="app-body">
        <Heading level={1}>Examples</Heading>

        <ButtonExample />
        <HeadingExample />
        <IconExample />
        <IconWithLabelExample />
        <IconWithTooltipExample/>
        <UploadExample/>
      </div>
    </div>
  );
}

export default App;
