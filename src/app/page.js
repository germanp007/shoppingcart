import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Pagina Principal</h1>
      <Link href="/categorias">Categorias</Link>
      <Link href="/productos">Productos</Link>
    </>
  );
};

export default Home;
