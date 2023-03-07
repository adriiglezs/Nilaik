import Footer from "../../components/Footer/Footer";
import style from "./Checkout.module.css";
import nilaikFooter from "../../assets/brand.png";
import React, { useState, useEffect } from 'react';

export default function Checkout() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(getUserData());
  }, []);/* 
  const [data, setData] = useState({}); */

  /* useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://nilaik.up.railway.app/clientes');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []); */

  function getUserData() {
    const userData = localStorage.getItem('userData');
    return JSON.parse(userData);
  }


  return (
    <>
      <div className={style.LoginPageContainerGlobal}>
        <div className={style.LoginPageContainerLogin}>
          <div className={style.loginCard}>

            <div className={style.loginCardBody}>
              <form>
                <div className={style.loginFormGroup}>
                  <label htmlFor="email">Nombre de usuario: </label>
                  <label className={style.label2}>{data.username}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Apellido: </label>
                  <label className={style.label2}>{data.lastname}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Email: </label>
                  <label className={style.label2}>{data.email}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Direccion: </label>
                  <label className={style.label2}>{data.adress}</label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">Fecha pedido: </label>
                  <label className={style.label2}> 07 - marzo- 2023 </label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">ID Cliente: </label>
                  <label className={style.label2}>123456 </label>
                </div>
                <div className={style.loginFormGroup}>
                  <label htmlFor="password">ID Carrito: </label>
                  <label className={style.label2}>1</label>
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