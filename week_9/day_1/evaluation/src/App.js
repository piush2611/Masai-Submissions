import React from 'react';
import Uber from './components/Web/Uber'
import Login from './components/Login/Login'
import ProductForm from './components/Product/ProductForm'

function App() {
  return (
    <div>
      <Uber />
      <Login />
      <h1 className="m-3 conrainer text-center">Product</h1>
      <ProductForm />
    </div>
  );
}

export default App;
