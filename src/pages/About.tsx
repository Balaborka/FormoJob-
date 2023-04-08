import React from 'react';
import { Product } from '../components/product'
import { NavBar } from '../components/navbar'
import { Panel } from '../components/panel'
import { FormoJobPanel } from '../components/formojob_panel'
import { ExtensionPanel } from '../components/extension_panel'
import { APIPanel } from '../components/API_panel'
import { PanelAboutHeader } from '../components/panelAboutHeader'

export function About() {
  return (
    <div className='content'>
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap" rel="stylesheet"></link>
      <NavBar />
      <Product panel={
        <Panel 
          theme='lightPanel' 
          childrenHeader={ <PanelAboutHeader header={ "A forms OCR auto-filling tool" } description={ "You talk to your client over a cup of coffee - we generate your contracts" } />  }
          childrenBody={ <FormoJobPanel />} />
        } 
        buttonText='Try Designer' 
        link='.' />

      <Product panel={
        <Panel 
          theme='lightPanel' 
          childrenHeader={ <PanelAboutHeader header={ "Browser Extension" } description={ "Your browser form-filling assistant" } />  }
          childrenBody={ <ExtensionPanel />} />
        } 
        buttonText='Try Extension' 
        link='.' />

      <Product panel={
        <Panel 
          theme='darkPanel' 
          childrenHeader={ <PanelAboutHeader header={ "API" } description={ "Create your own applications based on our recognizing interface" } />  }
          childrenBody={ <APIPanel />} />
        } 
        buttonText='GitHub' 
        link='.' />
    </div>
  );
}
