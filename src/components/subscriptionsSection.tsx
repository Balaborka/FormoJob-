import React from 'react';
import Data from "../data/BuyPage.json"

interface SubscriptionsSectionProps {
    ID: number;
}

export const SubscriptionsSection: React.FunctionComponent<SubscriptionsSectionProps> = (props) => {
    const id = props.ID;
    const subscriptions = Data[id].subscriptions;

    return (
        <div>
            <div className='buyButtonContainer'>
                <button className='btn'>
                    <span>Try 30-day trial <br /> ({Data[id].trialFor})</span>
                </button>
            </div>
            <div className='subscriptions'>
                {subscriptions?.map((el, index) => (
                    <div className={`subscriptionBlock ${index === 0 ? 'subscriptionBlockFirst' : ''}`} key={el.id}>
                        <div className='subscriptionTitle'>{el.name}</div>
                        <div className='subscriptionPrice'>
                            <div className='price'>${el.price}</div>
                            <div className='paymentTepe'>{el.paymentType}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
