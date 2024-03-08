import CardList from "@/components/CardList";
import React from "react";
import { getProductResponse } from "@/libs/api-libs";

interface iCategory {
  params: {
    keyword: string;
  };
}

const Page: React.FC<iCategory> = async ({ params }) => {
  const keyword = params.keyword;
  const result = await getProductResponse(`/category/${keyword}`, "");
  return (
    <div>
      <div className="container mx-auto px-6 flex flex-col gap-2">
        <CardList
          title={`category : ${keyword}`}
          href=""
          api={result}
        ></CardList>
      </div>
    </div>
  );
};

export default Page;
