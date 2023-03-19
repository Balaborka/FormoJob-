import React from 'react';

import NewbieIcon from '../icons/Newbie.svg'
import FormoJobIcon from '../icons/FormoJob.svg'

export function NavBar() {
  return (
    <div className='navbar'>
        <div className='leftNavbar'>
            <img className='navbarIcon' src={ NewbieIcon }></img>
            <img className='navbarIcon' src={ FormoJobIcon }></img>
            <a className='navbarFJ'>FormoJob</a>
            <a className='navbarBN'>By Newbie</a>
        </div>
        <div className='rightNavbar'>
            <a>Designer</a>
            <a>Extension</a>
            <a>API</a>
            <a>Demo</a>
            <a>Buy</a>
            <a>Support</a>
        </div>
    </div>
  );
};
