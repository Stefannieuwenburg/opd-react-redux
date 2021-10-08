import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals'
import {createStore} from 'redux'
//Store 


//Action
const increment = () => {
  return {
    type:"INCREMENT"
  }
}
const decrement = () => {
  return {
    type:"DECREMENT"
  }
}

//Reducer
const counter = (state = 0, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1; 
        default:
        break;
 }

}

let store = createStore(counter);
//display it to the console
store.subscribe(()=> console.log(store.getState()))


//dispatch
store.dispatch(increment());







ReactDOM.render(<React.StrictMode> <App /></React.StrictMode>,document.getElementById('root'));
reportWebVitals();
