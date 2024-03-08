import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getProductResponse } from "@/libs/api-libs";

const imgElektronik =
  "https://down-id.img.susercontent.com/file/dcd61dcb7c1448a132f49f938b0cb553_tn";
const imgComputer =
  "https://down-id.img.susercontent.com/file/id-50009109-0bd6a9ebd0f2ae9b7e8b9ce7d89897d6_tn";
const imgHandphone =
  "https://down-id.img.susercontent.com/file/5230277eefafad8611aaf703d3e99568_tn";
const imgMenColth =
  "https://down-id.img.susercontent.com/file/04dba508f1ad19629518defb94999ef9_tn";
const imgMenShoes =
  "https://down-id.img.susercontent.com/file/3c8ff51aab1692a80c5883972a679168_tn";
const imgMenBag =
  "https://down-id.img.susercontent.com/file/47ed832eed0feb62fd28f08c9229440e_tn";
const imgAcsFash =
  "https://down-id.img.susercontent.com/file/1f18bdfe73df39c66e7326b0a3e08e87_tn";
const imgWatch =
  "https://down-id.img.susercontent.com/file/2bdf8cf99543342d4ebd8e1bdb576f80_tn";
const imgSugery =
  "https://down-id.img.susercontent.com/file/eb7d583e4b72085e71cd21a70ce47d7a_tn";
const imgHoby =
  "https://down-id.img.susercontent.com/file/42394b78fac1169d67c6291973a3b132_tn";
const imgFood =
  "https://down-id.img.susercontent.com/file/7873b8c3824367239efb02d18eeab4f5_tn";
const imgBeauty =
  "https://down-id.img.susercontent.com/file/2715b985ae706a4c39a486f83da93c4b_tn";
const imgHouseItem =
  "https://down-id.img.susercontent.com/file/c1494110e0383780cdea73ed890e0299_tn";
const imgWomanCloth =
  "https://down-id.img.susercontent.com/file/6d63cca7351ba54a2e21c6be1721fa3a_tn";
const imgMuslimCloth =
  "https://down-id.img.susercontent.com/file/b98756cdb31eabe3d7664599e24ccc29_tn";
const imgBabyFashion =
  "https://down-id.img.susercontent.com/file/9251edd6d6dd98855ff5a99497835d9c_tn";
const imgMomnBaby =
  "https://down-id.img.susercontent.com/file/4d1673a14c26c8361a76258d78446324_tn";
const imgWomanShoe =
  "https://down-id.img.susercontent.com/file/id-50009109-a947822064b7a8077b15596c85bd9303_tn";
const imgWomanBag =
  "https://down-id.img.susercontent.com/file/id-50009109-da8cea4e4705abb4dd935b244668e9dd_tn";
const imgOtomotif =
  "https://down-id.img.susercontent.com/file/27838b968afb76ca59dd8e8f57ece91f_tn";

const listImg = [
  imgHandphone,
  imgComputer,
  imgBeauty,
  imgMuslimCloth,
  imgMenShoes,
  imgMenBag,
  imgAcsFash,
  imgWatch,
  imgSugery,
  imgHoby,
  imgFood,
  imgElektronik,
  imgHouseItem,
  imgWomanCloth,
  imgMenColth,
  imgBabyFashion,
  imgMomnBaby,
  imgWomanShoe,
  imgOtomotif,
  imgWomanBag,
];

const ListCategory = async () => {
  const category: string[] = await getProductResponse("/categories", "");

  return (
    <div className="grid lg:grid-cols-10 md:grid-cols-5 grid-cols-3 justify-around gap-3 px-5">
      {category.map((categoryObj, index) => {
        return (
          <Link
            key={index}
            href={`/category/${categoryObj}`}
            className="container flex flex-col items-center cursor-pointer shadow-md md:p-5 p-0"
          >
            <Image
              src={listImg[index]}
              alt=""
              width={70}
              height={30}
              className="h-15"
            ></Image>
            <p className="md:text-base text-xs text-center md:p-0 p-2 ">
              {categoryObj}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default ListCategory;
