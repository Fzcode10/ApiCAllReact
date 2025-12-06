// src/App.js
import React from "react";
import ProductList from "./components/productList";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>Product List</h1>
      <ProductList />
    </div>
  );
}

export default App;
