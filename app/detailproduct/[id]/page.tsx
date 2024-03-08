import DetailImage from "@/components/DetailImage";
import { getProductResponse } from "@/libs/api-libs";
import { Rating } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface iPage {
  params: {
    id: number;
  };
}
const Page: React.FC<iPage> = async ({ params }) => {
  const id = params.id;
  const data = await getProductResponse(`/${id}`, "");

  return (
    <div className="container mx-auto flex md:flex-row flex-col gap-5 mt-5">
      <div className="container mx-auto flex flex-col md:px-0 px-3 gap-2">
        <DetailImage
          thumbnail={data.thumbnail}
          images={data.images}
        ></DetailImage>
        <div className="flex justify-between items-center ">
          <div className="flex gap-2 items-center ">
            <p>share:</p>
            <Link href={"https://www.facebook.com/share_channel/"}>
              <Image
                src={
                  "https://icons.iconarchive.com/icons/danleech/simple/256/facebook-icon.png"
                }
                alt=""
                width={500}
                height={500}
                className="w-10 rounded-xl"
              ></Image>
            </Link>
            <Link href={"https://www.x.com/"}>
              <Image
                src={
                  "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
                }
                alt=""
                width={500}
                height={500}
                className="w-10 rounded-xl"
              ></Image>
            </Link>
            <Link href={"https://id.pinterest.com/pin-creation-tool/"}>
              <Image
                src={
                  "https://icons.iconarchive.com/icons/danleech/simple/256/pinterest-icon.png"
                }
                alt=""
                width={500}
                height={500}
                className="w-10 rounded-xl"
              ></Image>
            </Link>
          </div>
          <p>|</p>
          <p>Favorite</p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-2 md:px-0 px-3">
        <h1 className="md:text-5xl text-3xl">{data.title}</h1>
        <h1 className="text-xl text-slate-500">{data.brand}</h1>
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <h1>{data.rating}</h1>
            <Rating
              defaultValue={data.rating}
              precision={0.5}
              readOnly
            ></Rating>
          </div>
          <h1>category: {data.category}</h1>
        </div>
        <h1 className="text-5xl text-green-700">$ {data.price}</h1>
        <div className="bg-gray-300 md:p-5 p-3 rounded-lg flex flex-col gap-3">
          <div className="grid grid-cols-4 md:gap-0 gap-5">
            <p className="col-span-1">Return</p>
            <div className="col-span-3 flex gap-2">
              <Image
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fc40ac00de8257314355.png"
                alt=""
                className="w-5"
                width={500}
                height={500}
              ></Image>
              <p>Bebas Pengembalian</p>
            </div>
          </div>
          <div className="grid grid-cols-4 md:gap-0 gap-5">
            <p className="col-span-1">Protection</p>
            <p className="col-span-3">Proteksi Kerusakan +</p>
          </div>
          <div className="grid grid-cols-4 md:gap-0 gap-5">
            <p className="col-span-1">Pengiriman</p>
            <div className="col-span-3 flex gap-2">
              <Image
                src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/5cfa35a94ab2309361a5.png"
                alt=""
                className="w-5"
                width={500}
                height={500}
              ></Image>
              <p>Gratis Ongkir</p>
            </div>
          </div>
          <div className="grid grid-cols-4 md:gap-0 gap-5">
            <p className="col-span-1">Kuantitas</p>
            <div className="flex gap-3 col-span-3">
              <input type="number" min="0" max={data.stock} />
              <p className=" text-gray-500">{data.stock} left</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Link
              className=" rounded text-center bg-[#ee4d2d3d] text-[#ee4d2d] border-2 border-[#ee4d2d] p-3"
              href={"https://shopee.co.id/"}
            >
              Add to Cart
            </Link>
            <Link
              className="bg-[#ee4d2d] rounded text-center text-white p-3"
              href={"https://shopee.co.id/"}
            >
              Buy Now
            </Link>
          </div>
        </div>
        <div className="bg-orange-300 p-3 rounded-lg">
          <h2>Description: </h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
