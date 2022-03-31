function Button(props) {
    return (
      <div >
        <button>{props.name}</button>

        <h1>{props.postalCodeOrigin}</h1>
        <h1>{props.postalCodeDestination}</h1>        
        <h1>{props.weigthOrder}</h1>        
      </div>
    );
  }

export default Button;