import Link from "next/link";
import Imagen from "./Imagen";
import estilos from "./ficha.module.css";
const Ficha = ({ valor }) => {
  return (
    <>
      <div className={estilos.producto}>
        <div className="nombre">{valor.title}</div>
        <div className="precio">{valor.price}</div>
        <div className="image">
          <Imagen valor={valor} />
        </div>
        <div>
          <Link href={`/productos/${valor.id}`}>
            <button>Ver</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Ficha;
