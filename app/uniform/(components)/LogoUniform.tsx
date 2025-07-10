import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoUniform() {
  return (
    <Link href="/event">
      <Image
        src="/logos/logo-saiki-uniform-fit.png"
        alt="Logo Saikindo Uniform"
        width={50}
        height={50}
        priority
        className="size-10"
      />
      <div className="flex flex-col">
        <span>Saikindo</span>
        <span>Uniform</span>
      </div>
    </Link>
  );
}
