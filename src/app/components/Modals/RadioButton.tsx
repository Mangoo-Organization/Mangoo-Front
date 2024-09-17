import React, { useState } from 'react';
import './RadioButton.css';

interface RadioButtonProps {
  checkedId: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({ checkedId }) => {
  return (
    <div className="radio-container">
      <label className='radio-label'>
        <input type="radio" name="example" id="radio1" checked={checkedId === 'radio1'} readOnly />
        {/*Opção 1*/}
      </label>

      <label className='radio-label'>
        <input type="radio" name="example" id="radio2" checked={checkedId === 'radio2'} readOnly />
        {/*Opção 2*/}
      </label>

      <label className='radio-label'>
        <input type="radio" name="example" id="radio3" checked={checkedId === 'radio3'} readOnly />
        {/*Opção 3*/}
      </label>
      
      <label className='radio-label'>
        <input type="radio" name="example" id="radio4" checked={checkedId === 'radio4'} readOnly />
        {/*Opção 4*/}
      </label>
    </div>
  );
};

export default RadioButton;