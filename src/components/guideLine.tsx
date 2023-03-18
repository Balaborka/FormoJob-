import React from 'react';

import LeftCursorIcon from '../icons/LeftCursor.svg'
import RightCursorIcon from '../icons/RightCursor.svg'

export function GuideLine() {
  return (
    <div className='guideLine'>
        <img className='blockIcon LeftCursorIcon' src={ LeftCursorIcon } />
        <img className='blockIcon RightCursorIcon' src={ RightCursorIcon } />
    </div>
  );
}