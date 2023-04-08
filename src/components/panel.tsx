import React from 'react';

interface PanelProps {
  theme: string;
  childrenHeader: React.ReactNode;
  childrenBody: React.ReactNode;
}

export const Panel: React.FunctionComponent<PanelProps> = (props) => {
  return (
    <div className={`panel ${props.theme}`}>
      <div>
        { props.childrenHeader }
      </div>
      <div className='panelChildren'>
        { props.childrenBody }
      </div>
    </div>
  );
};
