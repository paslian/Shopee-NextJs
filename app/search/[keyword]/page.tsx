import CardList from "@/components/CardList";
import React from "react";
import { getProductResponse } from "@/libs/api-libs";

interface iSearch {
  params: {
    keyword: string;
  };
}

const Page: React.FC<iSearch> = async ({ params }) => {
  const keyword = params.keyword;
  const result = await getProductResponse("/search", `q=${keyword}`);
  return (
    <div>
      <div className="container mx-auto px-6 flex flex-col gap-2">
        <CardList
          title={`hasil pencarian ${keyword}`}
          href=""
          api={result}
        ></CardList>
      </div>
    </div>
  );
};

export default Page;
