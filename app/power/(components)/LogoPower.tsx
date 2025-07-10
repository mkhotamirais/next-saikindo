import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoPower() {
  return (
    <Link href="/event">
      <Image
        src="/logos/logo-saiki-power-fit.png"
        alt="Logo Saikindo Power"
        width={50}
        height={50}
        priority
        className="size-10"
      />
      <div className="flex flex-col">
        <span>Saikindo</span>
        <span>Power</span>
      </div>
    </Link>
  );
}
