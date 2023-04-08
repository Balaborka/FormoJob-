import React, { useState, useEffect, useRef } from 'react'
import { GuideLine } from './guideLine';

interface PanelHeaderProps {
    children: React.ReactNode;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = (props) => {
    const bottomArtefactRef = useRef<HTMLDivElement>(null);
    const [marginTop, setMarginTop] = useState<string>('-2%');

    useEffect(() => {
        const handleScroll = () => {
          if (bottomArtefactRef.current) {
            const { top, bottom } = bottomArtefactRef.current.getBoundingClientRect();
            if (top >= 0 && bottom <= window.innerHeight) {
              const percentage = (1 - (bottom / window.innerHeight)) * (4 - 2) + 2;
              setMarginTop(`-${percentage}%`);
            }
          }
        };
      
        handleScroll();
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className='panelHeader'>
            <div className='topArtefact' />
            <div className='bottomArtefact' style={{ marginTop }} ref={bottomArtefactRef} />
            <div>
              { props.children }
            </div>
        </div>
    )
}
