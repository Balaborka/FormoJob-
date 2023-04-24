import React, { useState, useEffect, useRef, CSSProperties } from 'react'

interface PanelHeaderProps {
    children: React.ReactNode;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = (props) => {
    return (
        <div className='panelHeader'>
            <div>
              { props.children }
            </div>
        </div>
    )
}
