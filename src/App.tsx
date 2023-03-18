import React from 'react';
import { Product } from './components/product'
import { Panel } from './components/panel'
import { FormoJobPanel } from './components/formojob_panel'
import { ExtensionPanel } from './components/extension_panel'
import { APIPanel } from './components/API_panel'

function App() {
  return (
    <div className='content'>
      <Product panel={<Panel theme='lightPanel' children={<FormoJobPanel />} />} buttonText='Try Designer' link='.' />
      <Product panel={<Panel theme='lightPanel' children={<ExtensionPanel />} />} buttonText='Try Extension' link='.' />
      <Product panel={<Panel theme='darkPanel' children={<APIPanel />} />} buttonText='GitHub' link='.' />
    </div>
  );
}

export default App;
