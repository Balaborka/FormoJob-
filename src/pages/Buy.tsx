import React from 'react';
import { NavBar } from '../components/navbar'
import Data from "../data/BuyPage.json"
import { Product } from '../components/product'
import { Panel } from '../components/panel'
import { PanelBuyHeader } from '../components/panelBuyHeader'

export function Buy() {
  return (
    <div className='content'>
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap" rel="stylesheet"></link>
      <NavBar />
        <Panel 
          theme='yellowPanel' 
          childrenHeader={ <PanelBuyHeader header={ "FormoJob" } />  } 
          childrenBody={ null } />
    </div>
  );
}
