import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Label from './components/Label';
import ButtonCalculateFreight from './components/UI/Button/ButtonCalculateFreight';

function App() {

  const [postalCodeOrigin , setPostalCodeOrigin ] = useState('');
  const [postalCodeDestination , setPostalCodeDestination]  = useState('');
  const [weigthOrder , setWeigthOrder]  = useState('');

  const inputPostalCodeOrigin = (event) => {
    setPostalCodeOrigin(event.target.value);    
  }

  const inputPostalCodeDestination = (event) => {
    setPostalCodeDestination(event.target.value);    
  }

  const inputWeigthOrder = (event) =>{
    setWeigthOrder(event.target.value);
  }

  return (
    <div className="">     
          
          <Label name="Postal Code Origin:"    />
          <Input inputValue={inputPostalCodeOrigin} />   

          <Label name="Postal Code Destination:"  />
          <Input inputValue={inputPostalCodeDestination} />   

          <Label name="Weigth:" />
          <Input inputValue={inputWeigthOrder} />   

          <ButtonCalculateFreight postalCodeOrigin={postalCodeOrigin}  
                                  postalCodeDestination={postalCodeDestination} 
                                  weigthOrder={weigthOrder} />    
    </div>
  );
}

export default App;
