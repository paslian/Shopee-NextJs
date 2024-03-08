import Image from "next/image";
import Header from "./header";
import Link from "next/link";

const codImg =
  "https://down-id.img.susercontent.com/file/id-50009109-8d834dd660b129d1d3c72d22c1cb8867";

interface iProducts {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  stock: number;
}

interface iCard {
  api: {
    products: iProducts[];
  };
  title: string;
  href: string;
}

const CardList: React.FC<iCard> = ({ api, title, href }) => {
  return (
    <>
      <Header title={title} href={href}></Header>
      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3">
        {api.products?.map((item) => {
          return (
            <Link
              href={`/detailproduct/${item.id}`}
              className="shadow-xl flex flex-col transition ease-in-out hover:translate-y-1 hover:cursor-pointer rounded"
            >
              <Image
                className="w-full h-52"
                src={item.thumbnail}
                alt=""
                width={300}
                height={0}
              />
              <div className="flex flex-col flex-grow justify-between p-3 gap-2">
                <p className=" line-clamp-2 ">{item.title}</p>
                <div className="flex flex-col gap-2">
                  <Image
                    className="w-8"
                    src={codImg}
                    width={30}
                    height={10}
                    alt=""
                  />
                  <div className="flex justify-between items-center">
                    <h1 className=" items-end">$ {item.price}</h1>
                    <p className="text-xs">{item.stock} left</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CardList;
