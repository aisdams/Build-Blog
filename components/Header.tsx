import Image from "next/image";
import Link from "next/link";
import foto from "../public/johnny.jpg"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src={foto}
            height={50}
            width={50}
            alt="logo"
            className="rounded-full"
          />
        </Link>
        <h1>The Wolf</h1>
      </div>

      <div>
        <Link href="https://www.youtube.com/watch?v=x3fCEPFgUSM&t=3422s" className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center">
            Sign up to the University of Code
        </Link>
      </div>
    </header>
  );
}

export default Header;
