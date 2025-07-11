import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoUniform() {
  return (
    <Link href="/event" className="flex items-center gap-2">
      <Image
        src="/logos/logo-saiki-uniform-fit.png"
        alt="Logo Saikindo Uniform"
        width={50}
        height={50}
        priority
        className="size-12 invert"
      />
      <div className="flex flex-col">
        <span className="font-bold">Saikindo</span>
        <span className="text-sm tracking-[3px] text-primary">Uniform</span>
      </div>
    </Link>
  );
}
