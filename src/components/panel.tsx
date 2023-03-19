import React from 'react';
import { PanelHeader } from './panelHeader'


interface PanelProps {
  theme: string;
  headerText: string;
  headerDescription: string;
  children: React.ReactNode;
}

export const Panel: React.FunctionComponent<PanelProps> = (props) => {
  return (
    <div className={`panel ${props.theme}`}>
      <PanelHeader header={ props.headerText } description={ props.headerDescription } />
      <div className='panelChildren'>
        { props.children }
      </div>
    </div>
  );
};
