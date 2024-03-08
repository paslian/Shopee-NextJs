"use client";

import Image from "next/image";
import React, { useState } from "react";

interface iDetailImage {
  thumbnail: string;
  images: [];
}

const DetailImage: React.FC<iDetailImage> = ({ thumbnail, images }) => {
  const [image, setImage] = useState(thumbnail);
  const handleSelectImg = (selectedImg: string) => {
    setImage(selectedImg);
  };
  return (
    <>
      <Image
        className="w-full rounded h-80 md:object-contain object-fill shadow-inner"
        src={image}
        alt=""
        width={1000}
        height={0}
      ></Image>
      <div className="grid grid-cols-5 gap-2">
        {images?.map((image: string, index: number) => {
          return (
            <img
              className="w-full rounded h-16 md:object-contain object-fill shadow-2xl hover:cursor-pointer"
              src={image}
              alt=""
              width={1000}
              height={0}
              key={index}
              onClick={() => handleSelectImg(image)}
            ></img>
          );
        })}
      </div>
    </>
  );
};

export default DetailImage;
