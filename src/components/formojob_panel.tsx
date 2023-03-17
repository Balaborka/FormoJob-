import React from 'react'
import { PanelHeader } from './panelHeader'
import { Block } from './block'

import Time from '../icons/Time.png'
import Mistake from '../icons/Mistake.png'
import Search from '../icons/Search.png'
import Nature from '../icons/Nature.png'

export function FormoJobPanel() {
    return (
        <div>
            <PanelHeader header='A forms OCR auto-filling tool' description='You talk to your client over a cup of coffee - we generate your contracts' />
            <div className='blocksContainer'>
            <Block 
                title='Save your time' 
                description="How long does it take you to move all ID data to a contract? So, if you want to save time, you can use our app. All you need is to focus your phone camera on a client's ID. The app will copy-paste the required data to the target fields in your contract automatically." 
                image={ Time } />
            <Block 
                title='Forget about mistakes'
                description="A person often makes mistakes while filling out contracts. Now it is high time to make our app be in charge of this action."
                image={ Mistake } />
            <Block 
                title='Don’t lose documents'
                description="Tons of different signed contracts are usually kept in drawers. Currently, there is a point in storing them in your devices (a phone, a tablet, a computer, etc.)."
                image={ Search } />
            <Block 
                title='Take care of nature'
                description="Printing contracts is an integral part of the business. However, you can always send a contract to your client by e-mail. Save a sheet of paper today - save a forest in the future."
                image={ Nature } />
            </div>
        </div>
    )
}