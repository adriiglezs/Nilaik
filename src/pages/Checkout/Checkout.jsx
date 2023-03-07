import Footer from "../../components/Footer/Footer";
import style from "./Checkout.module.css";
import nilaikFooter from "../../assets/brand.png";
import React, { useState, useEffect } from 'react';

export default function Checkout() {

  const userData = JSON.parse(localStorage.getItem('user'));
  const username = userData.username;
  const lastname = userData.lastname;
  const email = userData.email;
  const adress = userData.adress;
  const idCliente = userData.idCliente;
  const idCarrito = idCliente;
  const userDatap = JSON.parse(localStorage.getItem('order'));
  const quantity = userDatap.quantity;
  const total = userDatap.total;

  // Get the current date and format it as "dd - month - yyyy"
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const currentDate = new Date().toLocaleDateString('es-ES', options);

  return (
    <>
      <div className={style.LoginPageContainerGlobal}>
        <div className={style.LoginPageContainerLogin}>
          <div className={style.loginCard}>

            <div className={style.loginCardBody}>
              <form>
                <div className={style.loginFormGroup}>
                  <label htmlFor="email">Nombre de usuario: </label>
                  <label className={style.label2}>{username}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Apellido: </label>
                  <label className={style.label2}>{lastname}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Email: </label>
                  <label className={style.label2}>{email}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Direccion: </label>
                  <label className={style.label2}>{adress}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Fecha pedido: </label>
                  <label className={style.label2}>{currentDate}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Cantidad de conjuntos adquiridos: </label>
                  <label className={style.label2}>{quantity}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Precio total a pagar </label>
                  <label className={style.label2}>{total}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <input type="submit" className={style.loginBtn} value="Confirmar pedido" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={style.LoginPageContainerImg}>
          <img
            className={style.LoginPageImg}
            src={nilaikFooter}
            alt="Nilaik logo de colores diversos"
          />
        </div>
      </div>

      <Footer styleFoo={style.foo} />
    </>
  );
};
