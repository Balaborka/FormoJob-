import React from 'react'

interface PanelHeaderProps {
    header: string;
    description: string;
}

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = (props) => {
    return (
        <div className='panelHeader'>
            <div className='topArtefact'>

            </div>
            <div className='panelHeaderTitle'>
                { props.header }
            </div>
            <div className='panelHeaderDescription'>
                { props.description }
            </div>
        </div>
    )
}