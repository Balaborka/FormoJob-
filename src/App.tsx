import React from 'react';
import { Panel } from './components/panel'
import { FormoJobPanel } from './components/formojob_panel'
import { ExtensionPanel } from './components/extension_panel'
import { APIPanel } from './components/API_panel'

function App() {
  return (
    <body className='main'>
      <div className='content'>
        <Panel theme='lightPanel' children={<FormoJobPanel />} />
        <Panel theme='lightPanel' children={<ExtensionPanel />} />
        <Panel theme='darkPanel' children={<APIPanel />} />
      </div>
    </body>
  );
}

export default App;
