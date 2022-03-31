function Input(props) {

    const onChange = (event)=>{        
        props.inputValue(event);
    }

    return (
      <div >        
        <input onChange={onChange}></input>
      </div>
    );
  }

export default Input;