const getCategory = () => {
  return fetch(`https://fakestoreapi.com/products/categories/`, {
    cache: "no-store",
  }).then((response) => response.json());
};

const page = async () => {
  const datos = await getCategory();

  return (
    <>
      <select>
        <option value="">Selecciona una Categoria</option>
        <option value="">Electronica</option>
        <option value="">Joyeria</option>
        <option value="">Ropa para caballeros</option>
        <option value="">Ropa para damas</option>
      </select>
    </>
  );
};

export default page;
