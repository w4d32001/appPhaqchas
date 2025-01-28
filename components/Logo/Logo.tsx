import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center">
        <Link href="" className="uppercase text-2xl flex items-center text-white gap-2 h-full">
        <Image src="/volleyball.png" alt="" className="w-10"  width={1} height={2}/>
        <h1 className="text-shadow-heavy font-Bebas-Neue">Phaqchas</h1>
      </Link>
    </div>
  );
}
