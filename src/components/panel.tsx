import React from 'react';

interface PanelProps {
  theme: string;
  children: React.ReactNode;
}

export const Panel: React.FunctionComponent<PanelProps> = (props) => {
  return (
    <div className={`panel ${props.theme}`}>
      { props.children }
    </div>
  );
};
