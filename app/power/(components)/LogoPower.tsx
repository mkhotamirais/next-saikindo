import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoPower() {
  return (
    <Link href="/power" className="flex gap-2 items-center w-fit">
      <Image
        src="/logos/logo-saiki-power-fit.png"
        alt="Logo Saikindo Power"
        width={50}
        height={50}
        priority
        className="size-12 invert"
      />
      <div className="flex flex-col">
        <span className="">Saikindo</span>
        <span>Power</span>
      </div>
    </Link>
  );
}
