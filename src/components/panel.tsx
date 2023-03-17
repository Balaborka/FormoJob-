import React from 'react';

interface PanelProps {
  children: React.ReactNode;
}

export const Panel: React.FunctionComponent<PanelProps> = (props) => {
  return (
    <div className='panel'>
      {props.children}
    </div>
  );
};
