"use client";

import Image from "next/image";
import Link from "next/link";
import SearchBar from "./searchbar";

const logoShopee =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1200px-Shopee.svg.png";

const Navbar = () => {
  return (
    <div className="bg-white container mx-auto p-5 border-b-2 sticky top-0 flex md:flex-row flex-col justify-between z-10  gap-3">
      <Link href={"/"}>
        <Image
          className="w-40"
          src={logoShopee}
          alt=""
          width={100}
          height={100}
        />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
