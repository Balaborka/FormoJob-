import React from 'react'
import ListBox from './listBox';
import { PanelAboutHeader } from '../components/panelAboutHeader'

import CodeIcon from '../icons/Code.png'

interface ListItem {
    id: number;
    text: string;
}

export function APIPanel() {
    const listUseAPI: ListItem[] = [
        { id: 1, text: 'Send images;' },
        { id: 2, text: 'API will recognize words;' },
        { id: 3, text: 'Obtain a words array.' },
    ];

    return (
        <div>
            <PanelAboutHeader header={ "API" } description={ "Create your own applications based on our recognizing interface" } />

            <div className='APIcontentContainer'>
                <img className='blockIcon' src={ CodeIcon } />
                <ListBox itemsSource={ listUseAPI } />
            </div>
        </div>
    )
}