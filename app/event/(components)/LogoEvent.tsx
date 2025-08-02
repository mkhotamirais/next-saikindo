import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoEvent() {
  return (
    <Link href="/event" className="flex gap-2 items-center">
      <Image
        src="/logos/logo-saiki-event-fit.png"
        alt="Logo Saikindo Event"
        width={50}
        height={50}
        priority
        className="size-12 invert"
      />
      <div className="flex flex-col">
        <span className="font-bold text-white font-heebo">Saikindo</span>
        <span className="text-sm tracking-[3px] text-primary">Uniform</span>
      </div>
    </Link>
  );
}
