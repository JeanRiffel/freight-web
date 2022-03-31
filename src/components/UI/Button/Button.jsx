import styles from './Button.module.css';

function Button(props) {

    const sum = ()=>{
      const a = props.postalCodeOrigin;
      const b = props.postalCodeDestination;
      return parseInt(a) + parseInt(b);

    }

    return (
      <div >
        <button  className={styles.button} >{props.name}</button>

        <h1>{props.postalCodeOrigin}</h1>
        <h1>{props.postalCodeDestination}</h1>        
        <h1>{props.weigthOrder}</h1>        

        <h1>{sum()}</h1>   
      </div>
    );
  }

export default Button;