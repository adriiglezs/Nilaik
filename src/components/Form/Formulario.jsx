import React, { useState } from "react";

const Formulario = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductos([...productos, { nombre, precio }]);
    setNombre("");
    setPrecio("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="text"
        placeholder="Precio del producto"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <button type="submit">Agregar producto</button>
      <pre>{JSON.stringify(productos, null, 2)}</pre>
    </form>
  );
};

export default Formulario;
