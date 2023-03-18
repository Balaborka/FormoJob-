import React from 'react';

interface Props {
    image: string;
    signature: string;
}

export function Screenshot(props: Props) {
    return (
        <div>
            <img className='screenshotImage' src={props.image}></img>
            <div className='screenshotSignature'>{props.signature}</div>
        </div>
    );
};
