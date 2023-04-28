import React, { useState } from 'react';
import '../rangeControl.css';

interface Props {
  min: number;
  max: number;
  step: number;
  onValueChange: (value: number) => void; 
}

const RangeControl: React.FC<Props> = ({ min, max, step, onValueChange }) => {
  const [value, setValue] = useState(min);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = Number(e.target.value);
    const nearestValue = Math.round(currentValue / step) * step;
    setValue(Math.max(min, Math.min(max, nearestValue)));
    onValueChange(nearestValue); 
  };

  const rangeArray = [];
  let currentValue = min;
  while (currentValue <= max) {
    rangeArray.push(currentValue);
    currentValue += step;
  }

  return (
    <div className='rangeControl'>
      <input type='range' min={min} max={max} step={step} value={value} onChange={handleChange} />
      <div className='rangeValues'>
        {rangeArray.map((number, index) => (
          <span key={index} style={{ left: `${((number - min) / (max - min)) * 100}%` }}>{number}</span>
        ))}
      </div>
    </div>
  );
};

export default RangeControl;
