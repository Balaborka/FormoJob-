import React, { useState } from 'react';
import Data from "../data/BuyPage.json"
import RangeControl from './RangeControl';

interface SupportSectionProps {
  ID: number;
}

export const SupportSection: React.FunctionComponent<SupportSectionProps> = (props) => {
  const min = 10;  
  const id = props.ID;
  const [priceValue, setPriceValue] = useState<string>(min.toString());
  const [inquiries, setinquiriesValue] = useState<string>(min.toString());

  const handlePriceChange = (value: number) => {
    setPriceValue(value.toString());
    let ppi = Data[id]?.pricePerInquiry ?? min.toString();
    let sum = value * parseInt(ppi);
    setinquiriesValue(sum.toString());
  };

  return (
    <div>
      <div className='supportContentContainer'>
        <div className='supportPrice'>
          <div className='price'>${priceValue}</div>
          <div className='paymentTepe'>per {inquiries} additional inquiries</div>
        </div>
        <RangeControl min={min} max={30} step={5} onValueChange={handlePriceChange} /> 
        <button className='buyBtn btn'>Buy</button>
      </div>
    </div>
  );
};
