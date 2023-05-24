"use client";
import { useSelector, useDispatch } from "react-redux";

const page = () => {
  const dispatch = useDispatch();
  const eliminar = () => {};
  const carrito = useSelector((state) => state.misCategorias.miCarrito);
  return (
    <>
      {carrito.map((element, indice) => {
        return (
          <div key={indice}>
            <img
              src={element.image}
              alt={element.title}
              // onClick={eliminar()}
              height="60px"
            />
          </div>
        );
      })}
    </>
  );
};

export default page;
