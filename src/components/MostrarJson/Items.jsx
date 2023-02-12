import React, { useState, useEffect } from "react";

// aqui creamos un estado en react
// Items en esta parte es un arreglo vacio
// lo que hace es que items sea igual a un arreglo vacio utilizando una funcion flecha
const Items = () => {
  const [items, setItems] = useState([]);

// la funcion en la que guardamos en la memoria local el json y hacemos que nuestra
// variable Items sea igual a lo que tenemos en la memoria local
// useEffect te permite añadir comportamiento a un componente.
// lo que nos ayuda a actualizar lo que se muestra en nuestra tabla

  useEffect(() => {
    // Guardar el JSON en memoria local
    const itemData = [
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rojo",
  "Talla": 2,
  "Codigo": "CJRJ2"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rojo",
  "Talla": 4,
  "Codigo": "CJRJ4"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rojo",
  "Talla": 6,
  "Codigo": "CJRJ6"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rojo",
  "Talla": 8,
  "Codigo": "CJRJ8"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rojo",
  "Talla": 10,
  "Codigo": "CJRJ10"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rojo",
  "Talla": 12,
  "Codigo": "CJRJ12"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rojo",
  "Talla": 14,
  "Codigo": "CJRJ14"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rojo",
  "Talla": 16,
  "Codigo": "CJRJ16"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rosa",
  "Talla": 2,
  "Codigo": "CJRS2"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rosa",
  "Talla": 4,
  "Codigo": "CJRS4"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rosa",
  "Talla": 6,
  "Codigo": "CJRS6"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rosa",
  "Talla": 8,
  "Codigo": "CJRS8"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rosa",
  "Talla": 10,
  "Codigo": "CJRS10"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rosa",
  "Talla": 12,
  "Codigo": "CJRS12"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rosa",
  "Talla": 14,
  "Codigo": "CJRS14"
 },
 {
  "Articulo": "Conjunto",
  "Diseño": "Jordan",
  "Color": "Rosa",
  "Talla": 16,
  "Codigo": "CJRS16"
 }
];

// lo aterior lo pusimos en una variable
// ahora la variable la metemos a memoria local con el nombre de items
    localStorage.setItem("items", JSON.stringify(itemData));

    // Imprimir en consola lo que se guardó en la memoria local
    console.log(JSON.parse(localStorage.getItem("items")));

    // Actualizar el estado con los datos del JSON guardados en memoria local
    setItems(JSON.parse(localStorage.getItem("items")));
  }, []);

  // aqui es la tabla que tenemos que muestra todo
  // en la funcion map pues lo que hace es recorrer el objeto creado e ir creando filas 
  // dependiendo lo que exista en la variable en este caso
  // lo que existe en la variable es lo que teniamos guardado en la memoria local

  return (
    <div>
      <h1>Tarea 7</h1>
      <h2>Estamos mostrando el json que guardamos en memoria local</h2>
      <table>
        <thead>
          <tr>
            <th>img</th>
            <th>Artículo</th>
            <th>Diseño</th>
            <th>Color</th>
            <th>Talla</th>
            <th>Código</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.Codigo}>
              <td>""</td>
              <td>{item.Articulo}</td>
              <td>{item.Diseño}</td>
              <td>{item.Color}</td>
              <td>{item.Talla}</td>
              <td>{item.Codigo}</td>
              <td><button id="myButton">0</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
