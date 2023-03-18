import React from 'react';
import { Screenshot } from './screenshot'

interface InstructionProps {
    title: string;
    description: React.ReactNode;
    image: string;
    signature: string;
}

export const Instruction: React.FunctionComponent<InstructionProps> = (props) => {
    return (
        <div className='instruction'>
            <div>
                <div className='instructionTitle'>{props.title}</div>
                <div className='instructionDescription'>{props.description}</div>
            </div>
            <Screenshot image={ props.image } signature={ props.signature } />
        </div>
    );
};
