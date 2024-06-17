import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center lg:flex">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-2xl font-semibold ml-2.5 text-white"> Finance</p>
      </div>
    </Link>
  );
};
