import Link from "next/link";

const MobileMenu = () => {
  // Todo: Fix the mobile menu
  return (
    <div className="absolute inset-0 top-[96px] z-10 w-full bg-[rgba(0,0,0,0.65)] text-nav-mobile uppercase text-white tablet:hidden">
      <div className="bg-black">
        <nav>
          <ul className="flex flex-col space-y-8 px-6 py-12">
            <li>
              <Link href="/our-company">Our Company</Link>
            </li>
            <li>
              <Link href="/locations">Locations</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
