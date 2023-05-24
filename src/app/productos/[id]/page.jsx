import FichaIndividual from "./FichaIndividual";

const cargarDatos = (id) => {
  return fetch(`https://fakestoreapi.com/products/${id}`).then((response) =>
    response.json()
  );
};

const page = async ({ params }) => {
  const { id } = params;
  const datos = await cargarDatos(id);
  return (
    <>
      <FichaIndividual datos={datos} />
    </>
  );
};

export default page;
