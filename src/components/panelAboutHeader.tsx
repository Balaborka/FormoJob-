import React, { useState, useEffect, useRef } from 'react'
import { PanelHeader } from './panelHeader'

interface PanelHeaderProps {
    header: string;
    description: string;
}

export const PanelAboutHeader: React.FunctionComponent<PanelHeaderProps> = (props) => {
    return (
        <div>
            <PanelHeader children={
                <div className='panelHeaderContent'>
                    <div className='panelAboutHeaderTitle'>
                        { props.header }
                    </div>
                    <div className='panelAboutHeaderDescription'>
                        { props.description }
                    </div>
                </div>
            } />
        </div>
    )
}
