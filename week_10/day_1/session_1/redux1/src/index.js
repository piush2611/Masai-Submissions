import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import counter from './Reducer'
import { incrementCounter, decrementCounter, multiplyCount, divideCount, calculateRemainder } from './Action'


const store = createStore(counter);

const userInput = {
    value:0
}

const handleChange = e => {
    userInput.value= e.target.value
}


function App() {
    return(
        <div>
            <input type="text" onChange={handleChange} />
            Count: {store.getState().count}
            <br/>
            <button onClick={() => store.dispatch(incrementCounter(userInput.value))} >Increment</button>
            <br/>
            <button onClick={() => store.dispatch(decrementCounter(userInput.value))}>Decrement</button>
            <br/>
            <button onClick={() => store.dispatch(multiplyCount(userInput.value))}>Multiply count</button>
            <br/>
            <button onClick={() => store.dispatch(divideCount(userInput.value))}>Divide count</button>
            <br/>
            <button onClick={() => store.dispatch(calculateRemainder(userInput.value))}>calculate remainder</button>
        </div>
    )
}


const render = () => ReactDOM.render(<App />, document.getElementById('root'));
render();
store.subscribe(render)
