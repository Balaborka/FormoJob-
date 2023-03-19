import React from 'react';
import { Product } from './components/product'
import { NavBar } from './components/navbar'
import { Panel } from './components/panel'
import { FormoJobPanel } from './components/formojob_panel'
import { ExtensionPanel } from './components/extension_panel'
import { APIPanel } from './components/API_panel'

function App() {
  return (
    <div className='content'>
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap" rel="stylesheet"></link>
      <NavBar />
      <Product panel={
        <Panel 
          theme='lightPanel' 
          headerText='A forms OCR auto-filling tool' 
          headerDescription='You talk to your client over a cup of coffee - we generate your contracts' 
          children={ <FormoJobPanel />} />
        } 
        buttonText='Try Designer' 
        link='.' />

      <Product panel={
        <Panel 
          theme='lightPanel' 
          headerText='Browser Extension'
          headerDescription='Your browser form-filling assistant'
          children={ <ExtensionPanel />} />
        } 
        buttonText='Try Extension' 
        link='.' />

      <Product panel={
        <Panel 
          theme='darkPanel' 
          headerText='API'
          headerDescription='Create your own applications based on our recognizing interface'
          children={ <APIPanel />} />
        } 
        buttonText='GitHub' 
        link='.' />
    </div>
  );
}

export default App;
