import React from 'react';
import { GuideLine } from '../guideLine';

interface PanelProps {
  theme: string;
  children: React.ReactNode;
  showGuideLines?: boolean;
}

export const Panel: React.FunctionComponent<PanelProps> = (props) => {
  const showGuideLines = props.showGuideLines;

  return (
    <div className={`panel ${props.theme}`}>
      <div className='artefacts'>
        <div className='topArtefact' />
        <div className='bottomArtefact' />
        {showGuideLines && <GuideLine />}
      </div>
      <div className='panelChildren'>
        { props.children }
      </div>
    </div>
  );
};
