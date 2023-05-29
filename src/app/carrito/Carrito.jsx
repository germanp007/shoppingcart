"use client";
import { useSelector, useDispatch } from "react-redux";
import { devolver } from "@/store/miSlice";
import estilos from "./carrito.module.css";
import { useMemo, useRef, useState } from "react";

const page = () => {
  const [total, setTotal] = useState(0);
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

  return (
    <>
      <div ref={ref} className={estilos.carrito}>
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
