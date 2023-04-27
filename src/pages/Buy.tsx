import React from 'react';
import { NavBar } from '../components/navbar'
import Data from "../data/BuyPage.json"
import { BuyFormoJobPanel } from "../components/buyFormojob_panel"
import { Panel } from '../components/panel'

export function Buy() {
  return (
    <div className='content'>
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap" rel="stylesheet"></link>
      <NavBar IsBuyPage={true} />
        <Panel 
          theme='yellowPanel' 
          children={ <BuyFormoJobPanel /> } />
        <Panel 
          theme='yellowPanel' 
          children={ null  } />
        <Panel 
          theme='yellowPanel' 
          children={ null  } />
        <Panel 
          theme='yellowPanel' 
          children={ null  } />
    </div>
  );
}
