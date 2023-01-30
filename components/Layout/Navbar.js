import Link from "next/link";
import Image from "next/image";

export default function Navbar({ }) {
    return (
      <>
        <div className="bg-white text-black grid grid-flow-col items-center absolute top-0 left-0 w-full p-8">
            <Link href="/">
            <div className="hidden md:grid">
              <Image src="/gfx/hau-logo.png" width={400} height={60} />
            </div>
            </Link>
            <Link href="/">
            <div className="md:hidden grid">
              <Image src="/gfx/hau-logo-2.png" width={200} height={60} />
            </div>
            </Link>
            <div className="grid justify-items-end">
              <Link href="/kontakt">
              <div className="w-48 rounded-full bg-black text-white hover:bg-white hover:text-black uppercase p-5 text-center lg:text-xl">
                Kontakt oss
              </div>
              </Link>
            </div>
        </div>
      </>
    )
  }