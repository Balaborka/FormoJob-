import React, { useState, useEffect, useRef } from 'react'
import { PanelHeader } from './panelHeader'
import { GuideLine } from './guideLine';

interface PanelHeaderProps {
    header: string;
}

export const PanelBuyHeader: React.FunctionComponent<PanelHeaderProps> = (props) => {
    return (
        <div>
            <PanelHeader children={
                <div className='panelBuyHeaderTitle'>
                    { props.header }
                </div>
            }/>
        </div>
    )
}
