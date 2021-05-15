import React from 'react';
import store from './Store'
import { addTodo, toggleItem, removeToDo } from './Action';


var input = ""

const handleChange = e => {
  input = e.target.value
}

function App() {
  const items = store.getState().todo
  return (
    <div className="w-25 container p-5 bg-light">
      <h3 className="text-center">To-Do-App</h3>
      <div className="d-flex justify-content-between mb-4">
        <input type="text" onChange={handleChange} className="form-control w-75" placeholder="Add new to-do" />
        <button onClick={() => store.dispatch(addTodo({ text: input, completed: false, id: Math.random() }))} className="btn btn-sm btn-outline-success">Add</button>
      </div>

      {items.map(e =>
        <div key={e.id} className="d-flex justify-content-between m-1">
          <div onClick={() => store.dispatch(toggleItem(e.id))} style={{ textDecoration: e.completed ? "line-through" : "none" }} className={e.completed ? "text-success" : "text-dark"} >{e.text}</div>
          <button onClick={() => store.dispatch(removeToDo(e.id))} className="btn btn-sm btn-warning">Remove </button>
        </div>)

      }
    </div>
  );
}

export default App;

