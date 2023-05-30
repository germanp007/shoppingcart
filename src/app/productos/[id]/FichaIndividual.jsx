"use client";
import { useDispatch } from "react-redux";
import { comprar } from "@/store/miSlice";
import Imagen from "@/app/componentes/Imagen";
import Link from "next/link";
import estilos from "./fichaindividual.module.css";
const FichaIndividual = ({ datos }) => {
  const dispatch = useDispatch();
  const adquirir = (datos) => {
    dispatch(
      comprar({
        producto: datos.id,
        precio: datos.price,
        imagen: datos.image,
      })
    );
  };

  return (
    <>
      <div className={estilos.fichaindividual}>
        <div>{datos.title}</div>
        <div>{datos.price}$</div>
        <div>{datos.description}</div>
        <div>{datos.category}</div>
        <div>
          {datos.rating.rate} {datos.rating.count}
        </div>
        <div>
          <Imagen valor={datos} />
        </div>
        <div>
          <button onClick={() => adquirir(datos)}>Comprar</button>
          <Link href="/productos">
            <button>Volver a Productos</button>
          </Link>
          <Link href="/categorias">
            <button>Volver a Categorias</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FichaIndividual;
