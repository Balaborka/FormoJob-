import React from 'react'
import { GuideLine } from './guideLine';

interface PanelHeaderProps {
    header: string;
    description: string;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = (props) => {
    return (
        <div className='panelHeader'>
            <div className='topArtefact' />
            <div className='bottomArtefact' />
            <div className='panelHeaderTitle'>
                { props.header }
            </div>
            <div className='panelHeaderDescription'>
                { props.description }
            </div>
            <GuideLine />
        </div>
    )
}