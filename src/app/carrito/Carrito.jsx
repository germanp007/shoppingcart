"use client";
import { useSelector, useDispatch } from "react-redux";
import { devolver } from "@/store/miSlice";
import estilos from "./carrito.module.css";
import { useMemo, useRef, useState } from "react";
import cart from "../../../public/images/carrito.png";
import flecha from "../../../public/images/abrir_cerrar_carrito.png";
import Image from "next/image";
const page = () => {
  const [total, setTotal] = useState(0);
  const [arrow, setArrow] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.misCategorias.miCarrito);

  const calcularTotal = useMemo(
    () => setTotal(carrito.reduce((a, b) => a + b.precio, 0)),
    [carrito]
  );
  const eliminar = (index) => {
    dispatch(devolver(index));
  };
  const handleEvent = () => {
    setArrow(!arrow);
  };
  console.log(arrow);
  return (
    <>
      <div>
        <Image
          width={50}
          height={50}
          src={cart}
          alt="cart"
          style={{ marginRight: "15px" }}
        />
        <Image
          width={30}
          height={30}
          src={flecha}
          alt="arrow"
          onClick={handleEvent}
          className={arrow ? estilos.invertido : estilos.normal}
        />
      </div>
      <div
        ref={ref}
        className={!arrow ? estilos.carrito : estilos.carritoescondido}
      >
        {carrito.length > 0 ? (
          carrito.map((element, index) => {
            return (
              <div key={index}>
                <img
                  src={element.imagen}
                  alt={element.title}
                  height="auto"
                  width="60px"
                  onClick={() => eliminar(index)}
                />
              </div>
            );
          })
        ) : (
          <h6>Shopping cart is empty</h6>
        )}
      </div>
      <div>
        <p>Total Shopping cart {total.toFixed(2)} $</p>
      </div>
    </>
  );
};

export default page;
