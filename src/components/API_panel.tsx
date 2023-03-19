import React from 'react'
import { PanelHeader } from './panelHeader'
import ListBox from './listBox';

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
            <div className='APIcontentContainer'>
                <img className='blockIcon' src={ CodeIcon } />
                <ListBox itemsSource={ listUseAPI } />
            </div>
        </div>
    )
}