import React, { useState, useEffect } from 'react';

const HooksContainer1 =() => {

    const [stateValue, setValue] = useState(0);
    const [effectValue,setUseEffectValue] = useState(null);

    useEffect(()=>{
        setTimeout(() => setUseEffectValue("useEffect Worked"),3000);
    },[stateValue])


    const incrementValue = () => {
        setValue(stateValue + 1);
    }

    const decrementValue = () => {
        setValue(stateValue - 1);
    }

    const changeUseEffectValue =()=>{
        setUseEffectValue('Some String')
    }

    return(
      <div>
      React Hooks
      <br />
        <button onClick={() => incrementValue()}> Increment Local Value</button>
        <button onClick={() => decrementValue()}> Decrement Local Value</button>
        <button onClick={() => changeUseEffectValue()}> Change Use Effect</button>
        <br />
        <div>
           {effectValue ? <p>{effectValue}</p> : <p>No Value</p>} 
            <p>Local State Value: {stateValue}</p>
        </div>
      </div>
    )
}

export default HooksContainer1;