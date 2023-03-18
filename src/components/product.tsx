import React from 'react';
// import { Link } from 'react-router-dom';

interface Props {
  panel: React.ReactNode;
  buttonText: string;
  link: string;
}

export function Product(props: Props) {
  return (
  <div className='product'>
    { props.panel }
    <div className='buttonContainer'>
    {/* <Link to={ props.link }> */}
        <button className='btn'>{ props.buttonText }</button>
    {/* </Link> */}
    </div>
  </div>
  )
};
