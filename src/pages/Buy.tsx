import React from 'react';
import { NavBar } from '../components/navbar'
import Data from "../data/BuyPage.json"
import { BuyPanel } from "../components/buy_panel"
import { Panel } from '../components/panel'
import { SubscriptionsSection } from '../components/subscriptionsSection'

export function Buy() {
  return (
    <div className='content'>
      <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900&display=swap" rel="stylesheet"></link>
      <NavBar IsBuyPage={true} />
        <Panel 
          theme='yellowPanel' 
          children={ <BuyPanel id={0} children={ <SubscriptionsSection ID={ parseInt(Data[0].id) } />} />}/>
        <Panel 
          theme='yellowPanel' 
          children={ <BuyPanel id={1} children={ <SubscriptionsSection ID={ parseInt(Data[1].id) } />} />}/>
        <Panel 
          theme='yellowPanel' 
          children={ <BuyPanel id={2} children={ null } />}/>
        <Panel 
          theme='yellowPanel' 
          children={ <BuyPanel id={3} children={ null } />}/>
    </div>
  );
}
