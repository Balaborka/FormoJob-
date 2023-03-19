import React from 'react';

import LeftCursorIcon from '../icons/LeftCursor.png'
import RightCursorIcon from '../icons/RightCursor.png'

export function GuideLine() {
  return (
    <div className='guideLine'>
        <img className='LeftCursorIcon' src={ LeftCursorIcon } />
        <img className='RightCursorIcon' src={ RightCursorIcon } />
    </div>
  );
}