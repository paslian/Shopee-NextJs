"use client";

import CardList from "@/components/CardList";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import { getProductResponse } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const [product, setProduct] = useState([]);
  const [total, setTotal] = useState(0);
  const limit = 30;
  const skip = limit * (page - 1);

  const fetchData = async () => {
    const dataProduct = await getProductResponse(
      "",
      `limit=${limit}&skip=${skip}`
    );
    setProduct(dataProduct);
    setTotal(dataProduct.total);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="container mx-auto px-6 flex flex-col gap-2">
      <CardList title="All Products" href="" api={product}></CardList>
      <Pagination page={page} setPage={setPage} total={totalPages}></Pagination>
    </div>
  );
};

export default Page;
