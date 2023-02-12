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
    // obtiene lo que hay en la local
    const productosGuardados = localStorage.getItem("productos");
    // vemos si hay datos guardados
    if (productosGuardados) {
      //si hay datos guardados se convierten en json y luego se actualizan con setProductos
      setProductos(JSON.parse(productosGuardados));
    }
    // [] hace que solo se use una vez despues de montar ( crear componente y se agrega al DOM)
  },  []);

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);


// funcion fecha que recibe e (datos del formulario)
// preventDefault hace que al recargar la pagina no se pierdan los datos

  const agregar = (e) => {
    e.preventDefault();

    // ... es hacer una copa del arreglo existente
    // luego se agrega el siguietne objeto

    setProductos([...productos, { nombre, precio }]);
    
    // se limpian los valores con lo siguiente despues de enviar los datos
    setNombre("");
    setPrecio("");
  };

  const mmostrar = () => {
    setMostrar(!mostrar);
  };

  return (
    <div>
      <form onSubmit={agregar}>
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
        <button type="button" onClick={mmostrar}>
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
