import React from 'react';
import Login from './Components/Login/Login'
import Product from './Components/Product/ProductForm'
import Slack from './Components/Web/Slack'

function App() {
  return (
    <div>
      <div className="container p-5 my-5">
        <Login />
      </div>
      <Product />
      <Slack />
    </div>
  );
}

export default App;
