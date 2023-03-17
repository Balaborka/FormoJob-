import React from 'react';

interface BlockProps {
    title: string;
    description: string;
    image: string;
}

export const Block: React.FunctionComponent<BlockProps> = (props) => {
    return (
        <div className='block'>
            <div>
                <div className='blockTitle'>{props.title}</div>
                <div className='blockDescription'>{props.description}</div>
            </div>
            <img className='blockImage' src={props.image}></img>
        </div>
    );
};
