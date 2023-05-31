"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "@/store/miSlice";
import Ficha from "../componentes/Ficha";
import estilos from "./categories.module.css";
import Link from "next/link";
const page = () => {
  const [datos, setDatos] = useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.misCategorias.category);

  const getCategory = async (info) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${info}`
    );
    const data = await response.json();
    setDatos(data);
  };

  useEffect(() => {
    if (selector) {
      getCategory(selector);
    }
  }, [selector]);

  return (
    <>
      <select onChange={(e) => dispatch(setCategory(e.target.value))}>
        <option>Selecciona una Categoria</option>
        <option value="electronics">Electronica</option>
        <option value="jewelery">Joyeria</option>
        <option value="men's clothing">Ropa para caballeros</option>
        <option value="women's clothing">Ropa para damas</option>
      </select>
      <Link href="/">
        {" "}
        <button>Volver</button>{" "}
      </Link>
      <div className={estilos.categories}>
        {datos.map((e, i) => {
          return <Ficha valor={e} key={i} />;
        })}
      </div>
    </>
  );
};

export default page;
