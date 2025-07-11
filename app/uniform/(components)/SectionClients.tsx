import { clientPhotos } from "@/app/(root)/content";
import Image from "next/image";
import Link from "next/link";

export default function SectionClients() {
  return (
    <section className="py-8 border-t-2 border-primary/20">
      <div className="container">
        <div className="flex items-center overflow-x-scroll gap-2 [&::-webkit-scrollbar]:hidden">
          {clientPhotos.slice(0, 10).map((item, index) => (
            <Image
              key={index}
              src={item}
              width={300}
              height={300}
              alt="saikindo clients"
              className="bg-white border border-gray-300 p-1 min-w-28 rounded-lg object-contain object-center h-14 w-full"
            />
          ))}
          <Link href="/clients" className="text-primary min-w-max hover:underline">
            All Clients
          </Link>
        </div>
      </div>
    </section>
  );
}
