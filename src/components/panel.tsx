import React from 'react';
import { GuideLine } from './guideLine';

interface PanelProps {
  theme: string;
  children: React.ReactNode;
}

export const Panel: React.FunctionComponent<PanelProps> = (props) => {
  return (
    <div className={`panel ${props.theme}`}>
      <div className='artefacts'>
        <div className='topArtefact' />
        <div className='bottomArtefact' />
        <GuideLine />
      </div>
      <div className='panelChildren'>
        { props.children }
      </div>
    </div>
  );
};
