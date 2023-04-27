import React from 'react';
import { Product } from '../components/product'
import { NavBar } from '../components/navbar'
import { Panel } from '../components/panel'
import { FormoJobPanel } from '../components/formojob_panel'
import { ExtensionPanel } from '../components/extension_panel'
import { APIPanel } from '../components/API_panel'

export function About() {
  return (
    <div className='content'>
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap" rel="stylesheet"></link>
      <NavBar IsBuyPage={false} />
      <Product panel={
        <Panel 
          theme='lightPanel' 
          children={ <FormoJobPanel />} 
          showGuideLines={true} />
        } 
        buttonText='Try Designer' 
        link='.' />

      <Product panel={
        <Panel 
          theme='lightPanel' 
          children={ <ExtensionPanel />} 
          showGuideLines={true} />
        } 
        buttonText='Try Extension' 
        link='.' />

      <Product panel={
        <Panel 
          theme='darkPanel' 
          children={ <APIPanel />} 
          showGuideLines={true} />
        } 
        buttonText='GitHub' 
        link='.' />
    </div>
  );
}
