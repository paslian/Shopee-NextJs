import Hero from "@/components/Hero";
import CardList from "../components/CardList";
import ListCategory from "@/components/ListCategory";
import { getProductResponse, totalProduct } from "../libs/api-libs";

const Page = async () => {
  const totalDataProduct = await totalProduct();
  const limit = 12;
  const randomNum = ~~(Math.random() * (totalDataProduct - limit) + 1);
  const products = await getProductResponse(
    "",
    `limit=${limit}&skip=${randomNum}`
  );
  return (
    <>
      <div className="container mx-auto px-6 flex flex-col gap-2">
        <Hero></Hero>
        <ListCategory></ListCategory>
        <CardList
          title="Rekomendasi"
          href="/products"
          api={products}
        ></CardList>
      </div>
    </>
  );
};

export default Page;
