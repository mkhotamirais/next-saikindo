import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logos/ssg-logo-square.png" alt="Logo" width={50} height={50} priority className="size-10" />
      <div className="flex flex-col *:leading-none">
        <span className="font-josefin-sans text-xl font-semibold tracking-widest">Saikindo</span>
        <span className="text-primary text-sm tracking-tighter">Surya Gumiwang</span>
      </div>
    </Link>
  );
}
