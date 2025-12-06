// src/components/ProductList.js
import React from "react";
import useFetch from "../hooks/useFetch";
 
const ProductList = () => {
  const { data, loading, error } = useFetch("https://api.escuelajs.co/api/v1/products");

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return ( 
    <div style={styles.container}>
      {data?.slice(0, 10).map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.images[0]} alt={product.title} style={styles.image} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
  },
};

export default ProductList;
