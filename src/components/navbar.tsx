import React from 'react';

import NewbieIcon from '../icons/Newbie.svg'
import FormoJobIcon from '../icons/FormoJob.svg'

interface NavBarProps {
  IsBuyPage: boolean;
}

export function NavBar(props: NavBarProps) {
  const isBuyPage = props.IsBuyPage;

  return (
    <div className='navbar'>
      <div className='leftNavbar'>
        <img className='navbarIcon' src={ NewbieIcon } alt="Newbie Icon"></img>
        <img className='navbarIcon' src={ FormoJobIcon } alt="FormoJob Icon"></img>
        <a className='navbarFJ'>FormoJob</a>
        <a className='navbarBN'>By Newbie</a>
      </div>
      <div className='rightNavbar'>
        {!isBuyPage && <a>Designer</a>}
        {!isBuyPage && <a>Extension</a>}
        {!isBuyPage && <a>API</a>}
        {isBuyPage && <a>About</a>}
        <a>Demo</a>
        {!isBuyPage && <a>Buy</a>}
        <a>Support</a>
      </div>
    </div>
  );
};

