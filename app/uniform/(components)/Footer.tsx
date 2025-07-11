import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import LogoUniform from "./LogoUniform";
import Image from "next/image";
import Link from "next/link";

const pages = [
  { label: "Saikindo", url: "/", logoImage: "/logos/ssg-logo-square.png" },
  { label: "Saikindo Uniform", url: "/uniform", logoImage: "/logos/logo-saiki-uniform-fit.png" },
  { label: "Saikindo Power", url: "/power", logoImage: "/logos/logo-saiki-power-fit.png" },
  { label: "Saikindo Event", url: "/event", logoImage: "/logos/logo-saiki-event-fit.png" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-bg pt-16 pb-8 text-white">
      <div className="container flex flex-col lg:flex-row gap-8">
        <div className="w-full">
          <div className="w-fit">
            <LogoUniform />
          </div>
          <article className="space-y-4 mt-4">
            <address>Komp. LPTI Jl. Paneli No.13A RT03/08 Kel Ciparigi Kecamatan Bogor Utara</address>
            <p className="text-sm leading-relaxed text-gray-400">
              PT. Saikindo Surya Gumiwang is a company that professional and reliable in the field of cleaning and
              building maintenance, power service, FTTH material supply, uniform, and event organizers. PT. Saikindo
              Surya Gumiwang has a focus on delivering the right solution for all types of related needs building
              cleaning and maintenance, electrical service, provision FTTH materials, uniform, and event organizers.
            </p>
          </article>
        </div>
        <div className="w-full lg:w-80 space-y-6">
          <div>
            <h3 className="h3 mb-3">Visit Our Pages</h3>
            <div className="flex flex-col">
              {pages.map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="py-1 flex gap-2 items-center text-gray-400 hover:text-primary text-sm"
                >
                  <Image src={item.logoImage} width={50} height={50} alt={item.label} className="invert w-6 h-6" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="h3 mb-3">Follow Us On</h3>
            <div className="flex gap-4">
              <FaYoutube className="text-gray-400" />
              <FaInstagram className="text-gray-400" />
              <FaLinkedinIn className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
