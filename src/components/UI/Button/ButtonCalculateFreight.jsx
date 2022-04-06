import Button from '@mui/material/Button';

function ButtonCalculateFreight(props) {

    const calculate = ()=>{      
      if ((!props.postalCodeOrigin) || (!props.postalCodeDestination)) {
        return 0;
      }
      return parseInt(props.postalCodeOrigin) + parseInt(props.postalCodeDestination);
    }

    return (
      <div >
        <Button variant="contained">Calculate Freight</Button>        
        <h1>{props.postalCodeOrigin}</h1>
        <h1>{props.postalCodeDestination}</h1>        
        <h1>{props.weigthOrder}</h1>        

        <h1>The result is: {calculate()}</h1>   
      </div>
    );
  }

export default ButtonCalculateFreight;