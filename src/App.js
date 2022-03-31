import './App.css';
import React, { useState } from 'react';
import Input from './components/Input';
import Label from './components/Label';
import Button from './components/Button';

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
      <header className="">
          
          <Label name="Postal Code Origin:"    />
          <Input inputValue={inputPostalCodeOrigin} />   

          <Label name="Postal Code Destination:"  />
          <Input inputValue={inputPostalCodeDestination} />   

          <Label name="Weigth:" />
          <Input inputValue={inputWeigthOrder} />   

          <Button name="Calculate" postalCodeOrigin={postalCodeOrigin} postalCodeDestination={postalCodeDestination}  weigthOrder={weigthOrder}  />

      </header>
    </div>
  );
}

export default App;
