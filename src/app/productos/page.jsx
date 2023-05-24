import Ficha from "../componentes/Ficha";
import estilos from "./productos.module.css";
const cargarDatos = () => {
  return fetch("https://fakestoreapi.com/products", { cache: "no-store" }).then(
    (response) => response.json()
  );
};
const page = async () => {
  const datos = await cargarDatos();

  return (
    <>
      <div>Productos</div>
      <div className={estilos.productos}>
        {datos.map((e, i) => {
          return <Ficha valor={e} key={i} />;
        })}
      </div>
    </>
  );
};

export default page;
