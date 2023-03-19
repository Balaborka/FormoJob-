import React from 'react'
import { Block } from './block'
import { Instruction } from './instruction'
import ListBox from './listBox';

import TimeIcon from '../icons/Time.png'
import MistakeIcon from '../icons/Mistake.png'
import SearchIcon from '../icons/Search.png'
import NatureIcon from '../icons/Nature.png'
import DesktopViewImage from '../icons/DesktopView.png'
import MobileViewImage from '../icons/MobileView.png'

interface ListItem {
    id: number;
    text: string;
}

export function FormoJobPanel() {
    const listCreateTemplate: ListItem[] = [
        { id: 1, text: 'Open FormoJob Designer;' },
        { id: 2, text: 'Load or create the empty template of your contract;' },
        { id: 3, text: "Load the test images of the user's documents;" },
        { id: 4, text: "Bind the recognized fields with the the target areas in your contract;" },
        { id: 5, text: "Add parameters and signatures if it needed;" },
        { id: 6, text: "Save the template." },
    ];
    const listFillContract: ListItem[] = [
        { id: 1, text: 'Open the target template;' },
        { id: 2, text: 'Load the required images;' },
        { id: 3, text: 'Enter the required parameters and sign the document;' },
        { id: 4, text: 'Save, share or print the resulting document.' },
    ];
    
    return (
        <div>
            <div className='blocksContainer'>
                <Block
                    title='Save your time'
                    description="How long does it take you to move all ID data to a contract? So, if you want to save time, you can use our app. All you need is to focus your phone camera on a client's ID. The app will copy-paste the required data to the target fields in your contract automatically."
                    image={ TimeIcon } />
                <Block
                    title='Forget about mistakes'
                    description="A person often makes mistakes while filling out contracts. Now it is high time to make our app be in charge of this action."
                    image={ MistakeIcon } />
                <Block
                    title='Don’t lose documents'
                    description="Tons of different signed contracts are usually kept in drawers. Currently, there is a point in storing them in your devices (a phone, a tablet, a computer, etc.)."
                    image={ SearchIcon } />
                <Block
                    title='Take care of nature'
                    description="Printing contracts is an integral part of the business. However, you can always send a contract to your client by e-mail. Save a sheet of paper today - save a forest in the future."
                    image={ NatureIcon } />
            </div>

            <div className='instructionsContainer'>
                <Instruction title='Create a template' description={ <ListBox itemsSource={ listCreateTemplate } /> } image={ DesktopViewImage } signature='FormoJob Designer - Desktop view' />
                <Instruction title='Auto-fill a contract' description={ <ListBox itemsSource={ listFillContract } /> } image={ MobileViewImage } signature='FormoJob Viewer - Mobile view' />
            </div>
        </div>
    )
}