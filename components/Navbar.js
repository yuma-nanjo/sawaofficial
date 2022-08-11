import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <div className="hidden sm:block absolute bottom-1/4 left-0 right-0 m-auto z-20">
        <nav className="list-none flex text-white justify-center">
          {/* hover Action追加 */}
          <li className="m-auto text-sm sm:text-xl md:text-2xl lg:text-4xl text-center opacity-80 hover:opacity-100">
            <Link href="/live">
              <a>LIVE</a>
            </Link>
          </li>
          <li className="m-auto text-sm sm:text-xl md:text-2xl lg:text-4xl text-center opacity-80 hover:opacity-100">
            <Link href="/live">
              <a>MUSIC</a>
            </Link>
          </li>
          <li className="m-auto text-sm sm:text-xl md:text-2xl lg:text-4xl text-center opacity-80 hover:opacity-100">
            <Link href="/live">
              <a>MOVIE</a>
            </Link>
          </li>
          <li className="m-auto text-sm sm:text-xl md:text-2xl lg:text-4xl text-center opacity-80 hover:opacity-100">
            <Link href="/live">
              <a>BLOG</a>
            </Link>
          </li>
          <li className="m-auto text-sm sm:text-xl md:text-2xl lg:text-4xl text-center opacity-80 hover:opacity-100">
            <Link href="/live">
              <a>SNS</a>
            </Link>
          </li>
          <li className="m-auto text-sm sm:text-xl md:text-2xl lg:text-4xl text-center opacity-80 hover:opacity-100">
            <Link href="/live">
              <a>CONTACT</a>
            </Link>
          </li>
        </nav>
      </div>
    </>
  );
}
