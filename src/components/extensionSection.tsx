import React from 'react';
import Data from "../data/BuyPage.json"

interface ExtensionSectionProps {
    ID: number;
}

export const ExtensionSection: React.FunctionComponent<ExtensionSectionProps> = (props) => {
    const id = props.ID;

    return (
        <div className='supportContentContainer'>
            <div className='extensionPaymentType'>{Data[id].paymentType}</div>
            <button className='buyBtn btn'>Use</button>
        </div>
    );
};
