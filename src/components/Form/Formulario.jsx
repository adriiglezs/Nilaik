// useState y useEffect son para hacer que funcione
// useState nos ayuda a tener el control de una variable todo el tiempo
// useEffect nos deja usar codigo despues de mostrar

import React, { useState, useEffect } from "react";

// usaState convierte en estado e inicia en el valor que se le dice 
// cuando se llama serProducto se actualiza el valor

const Formulario = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    const productosGuardados = localStorage.getItem("productos");
    if (productosGuardados) {
      setProductos(JSON.parse(productosGuardados));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductos([...productos, { nombre, precio }]);
    setNombre("");
    setPrecio("");
  };

  const handleMostrar = () => {
    setMostrar(!mostrar);
  };

  return (
    <div>
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
        <button type="button" onClick={handleMostrar}>
          Mostrar productos
        </button>
      </form>
      {mostrar && (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr key={index}>
                <td>{producto.nombre}</td>
                <td>{producto.precio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Formulario;
