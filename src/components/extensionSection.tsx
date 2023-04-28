import React from 'react';
import Data from "../data/BuyPage.json"

interface ExtensionSectionProps {
    ID: number;
}

export const ExtensionSection: React.FunctionComponent<ExtensionSectionProps> = (props) => {
    const id = props.ID;
    const subscriptions = Data[id].subscriptions;

    return (
        <div>
            <div className='buyButtonContainer'>
            </div>
        </div>
    );
};
