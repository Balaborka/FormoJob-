import React from 'react';
import {Panel} from './components/panel'
import {FormoJobPanel} from './components/formojob_panel'
import {ExtensionPanel} from './components/extension_panel'
import {APIPanel} from './components/API_panel'

function App() {
  return (
    <body className='main'>
      <div className='content'>
        <Panel children={<FormoJobPanel />} />
        <Panel children={<ExtensionPanel />} />
        <Panel children={<APIPanel />} />
      </div>
    </body>
  );
}

export default App;
