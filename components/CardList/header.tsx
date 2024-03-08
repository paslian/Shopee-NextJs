import Link from "next/link";
import React from "react";

interface iHeader {
  title: string;
  href?: string;
}

const Header: React.FC<iHeader> = ({ title, href }) => {
  const decodedTitle = decodeURI(title);
  return (
    <div className="flex justify-between items-center p-2 border-b-2">
      <h1 className="text-[#ee4d2d] text-2xl font-bold">{decodedTitle}</h1>
      {href && (
        <Link href={href} className="hover:underline hover:text-[#ee4d2d]">
          Lihat Semua
        </Link>
      )}
    </div>
  );
};

export default Header;
