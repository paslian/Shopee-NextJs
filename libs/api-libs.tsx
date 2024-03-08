export const getProductResponse = async (resources: string, query: string) => {
  const response = await fetch(
    `https://dummyjson.com/products${resources}?${query}`
  );
  const data = await response.json();
  return data;
};

export const totalProduct = async () => {
  const product = await getProductResponse("", "");
  const totalProduct = product.total;
  return totalProduct;
};
