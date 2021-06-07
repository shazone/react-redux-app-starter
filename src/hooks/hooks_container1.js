import React, { useState, useEffect, useReducer, useContext } from 'react';
import * as Reducer from '../store/hooks_state/hook_reducer';
import * as ACTIONS from '../store/actions/actions';
import Context from '../utils/context';

const HooksContainer1 =() => {

    const context = useContext(Context);

    const [stateValue, setValue] = useState(0);
    
    //for useEffect
    const [effectValue,setUseEffectValue] = useState(null);

    //for useReducer
    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);


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

    const handleDispatchTrue = ()=>{
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = ()=>{
        dispatch(ACTIONS.failure())
    }

    return(
      <div>
      React Hooks
      <br />
        <button onClick={() => incrementValue()}> Increment Local Value</button>
        <button onClick={() => decrementValue()}> Decrement Local Value</button>
        <button onClick={() => changeUseEffectValue()}> Change Use Effect</button>

        <button onClick={() => handleDispatchTrue()}> handleDispatchTrue</button>
        <button onClick={() => handleDispatchFalse()}> handleDispatchFalse</button>

        <button onClick={() => context.addGlobalValue()}> addGlobalValue</button>
        <button onClick={() => context.decGlobalValue()}> decGlobalValue</button>

        <button onClick={() => context.dispatchContextTrue()}> Dispatch Context True</button>
        <button onClick={() => context.dispatchContextFalse()}> Dispatch Context False</button>   

        <br />
        <div>
           {effectValue ? <p>{effectValue}</p> : <p>No Value</p>} 
           {state.stateprop1 ? <p>state prop1 is true</p> : <p>state prop1 is false</p>} 
           {context.reducerGlobalState ? <p>state prop2 is true</p> : <p>state prop2 is false</p>} 
            <p>Local State Value: {stateValue}</p>
            <p>Glocal(Context) State Value: {context.valueGlobalState}</p>
        </div>
      </div>
    )
}

export default HooksContainer1;