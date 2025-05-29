import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api").then(res => setProducts(res.data)).catch(console.error);
  }, []);

  return (
    <div>
      <h1>Product Catalog</h1>
      <ul>
        {products.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
